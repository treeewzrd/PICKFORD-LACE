const { AuthenticationError, UserInputError } = require('apollo-server-express');
const { User, Product, Category, Order } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('../utils/stripe');

const resolvers = {
  Query: {
    categories: async () => Category.find(),
    products: async (parent, { category, name }) => {
      const params = {};

      if (category) {
        params.category = category;
      }

      if (name) {
        params.name = { $regex: name, $options: 'i' };
      }

      return Product.find(params).populate('category');
    },
    product: async (parent, { _id }) => Product.findById(_id).populate('category'),
    user: async (parent, args, context) => {
      if (!context.user) {
        throw new AuthenticationError('Not logged in');
      }

      const user = await User.findById(context.user._id).populate({
        path: 'orders.products',
        populate: 'category'
      });

      if (!user) {
        throw new AuthenticationError('User not found');
      }

      user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);
      return user;
    },
    order: async (parent, { _id }, context) => {
      if (!context.user) {
        throw new AuthenticationError('Not logged in');
      }

      const user = await User.findById(context.user._id).populate({
        path: 'orders.products',
        populate: 'category'
      });

      if (!user) {
        throw new AuthenticationError('User not found');
      }

      return user.orders.id(_id);
    }
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },

    addOrder: async (parent, { products }, context) => {
      if (!context.user) {
        throw new AuthenticationError('Not logged in');
      }

      const order = new Order({ products });
      await User.findByIdAndUpdate(
        context.user._id,
        { $push: { orders: order } }
      );

      return order;
    },

    updateUser: async (parent, args, context) => {
      if (!context.user) {
        throw new AuthenticationError('Not logged in');
      }

      return User.findByIdAndUpdate(
        context.user._id,
        args,
        { new: true, runValidators: true }
      );
    },

    updateProduct: async (parent, { _id, quantity }) => {
      const decrement = Math.abs(quantity) * -1;

      return Product.findByIdAndUpdate(
        _id,
        { $inc: { quantity: decrement } },
        { new: true }
      );
    },

    createCheckoutSession: async (parent, { products }, context) => {
      if (!context.user) {
        throw new AuthenticationError('You need to be logged in!');
      }

      if (!stripe) {
        throw new UserInputError('Stripe checkout is not configured on this server.');
      }

      const dbProducts = await Product.find({
        _id: { $in: products }
      });

      const productMap = new Map(
        dbProducts.map(product => [product._id.toString(), product])
      );

      const line_items = products.map(id => {
        const product = productMap.get(id.toString());

        if (!product) {
          throw new UserInputError(`Product not found: ${id}`);
        }

        return {
          price_data: {
            currency: 'usd',
            product_data: {
              name: product.name,
              description: product.description || undefined,
              images: product.image ? [product.image] : undefined
            },
            unit_amount: Math.round(product.price * 100)
          },
          quantity: 1
        };
      });

      const origin = context.headers && context.headers.origin
        ? context.headers.origin
        : process.env.CLIENT_URL;

      if (!origin) {
        throw new UserInputError('CLIENT_URL is not configured.');
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${origin}/cart`
      });

      return { session: session.id };
    }
  }
};

module.exports = resolvers;
