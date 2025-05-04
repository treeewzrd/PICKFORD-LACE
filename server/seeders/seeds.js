const db = require('../config/connection');
const { User, Product, Category } = require('../models');
const bcrypt = require('bcrypt');

db.once('open', async () => {
  await Category.deleteMany();
  await Product.deleteMany();
  await User.deleteMany();

  // Create categories
  const categories = await Category.insertMany([
    { name: 'Electronics' },
    { name: 'Clothing' },
    { name: 'Books' },
    { name: 'Home & Kitchen' },
    { name: 'Toys & Games' }
  ]);

  console.log('Categories seeded');

  // Create products
  const products = await Product.insertMany([
    {
      name: 'Smartphone',
      description: 'Latest model with advanced features',
      image: 'smartphone.jpg',
      price: 699.99,
      quantity: 50,
      category: categories[0]._id
    },
    {
      name: 'Laptop',
      description: 'High-performance laptop for work and gaming',
      image: 'laptop.jpg',
      price: 1299.99,
      quantity: 25,
      category: categories[0]._id
    },
    {
      name: 'T-Shirt',
      description: 'Comfortable cotton t-shirt',
      image: 'tshirt.jpg',
      price: 19.99,
      quantity: 100,
      category: categories[1]._id
    },
    {
      name: 'Jeans',
      description: 'Classic blue jeans',
      image: 'jeans.jpg',
      price: 49.99,
      quantity: 75,
      category: categories[1]._id
    },
    {
      name: 'Novel',
      description: 'Bestselling fiction novel',
      image: 'novel.jpg',
      price: 14.99,
      quantity: 200,
      category: categories[2]._id
    },
    {
      name: 'Cookbook',
      description: 'Collection of delicious recipes',
      image: 'cookbook.jpg',
      price: 24.99,
      quantity: 150,
      category: categories[2]._id
    },
    {
      name: 'Coffee Maker',
      description: 'Automatic coffee maker with timer',
      image: 'coffeemaker.jpg',
      price: 89.99,
      quantity: 30,
      category: categories[3]._id
    },
    {
      name: 'Blender',
      description: 'High-speed blender for smoothies',
      image: 'blender.jpg',
      price: 69.99,
      quantity: 40,
      category: categories[3]._id
    },
    {
      name: 'Board Game',
      description: 'Family board game for all ages',
      image: 'boardgame.jpg',
      price: 34.99,
      quantity: 60,
      category: categories[4]._id
    },
    {
      name: 'Action Figure',
      description: 'Collectible action figure',
      image: 'actionfigure.jpg',
      price: 19.99,
      quantity: 80,
      category: categories[4]._id
    }
  ]);

  console.log('Products seeded');

  // Create a test user
  const saltRounds = 10;
  const password = await bcrypt.hash('password123', saltRounds);
  
  await User.create({
    username: 'testuser',
    email: 'test@example.com',
    password: password,
    orders: []
  });

  console.log('User seeded');

  console.log('Database seeded!');
  process.exit(0);
});
