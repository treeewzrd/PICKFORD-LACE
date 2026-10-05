import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { useMutation } from '@apollo/client';
import { CREATE_CHECKOUT_SESSION } from '../../utils/mutations';
import { idbPromise } from '../../utils/helpers';
import CartItem from '../CartItem';
import Auth from '../../utils/auth';
import { useStoreContext } from '../../utils/GlobalState';
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../../utils/actions';
import './style.css';
import { Button, Offcanvas } from 'react-bootstrap';

// Stripe promise
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY || '');

const Cart = () => {
  const [state, dispatch] = useStoreContext();
  const navigate = useNavigate();
  const [getCheckout, { data }] = useMutation(CREATE_CHECKOUT_SESSION);

  // If there's checkout data, redirect to Stripe
  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.createCheckoutSession.session });
      });
    }
  }, [data]);

  // Load cart from IndexedDB when component mounts
  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise('cart', 'get');
      dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
    }

    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);

  function toggleCart() {
    dispatch({ type: TOGGLE_CART });
  }

  function calculateTotal() {
    return state.cart.reduce((sum, item) => {
      return sum + item.price * item.purchaseQuantity;
    }, 0).toFixed(2);
  }

  function submitCheckout() {
    const productIds = [];

    state.cart.forEach((item) => {
      for (let i = 0; i < item.purchaseQuantity; i++) {
        productIds.push(item._id);
      }
    });

    getCheckout({
      variables: { products: productIds },
    });
  }

  return (
    <Offcanvas 
      show={state.cartOpen} 
      onHide={toggleCart} 
      placement="end"
      className="cart-sidebar"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {state.cart.length ? (
          <div>
            {state.cart.map(item => (
              <CartItem key={item._id} item={item} />
            ))}

            <div className="d-flex justify-content-between align-items-center mt-4 mb-3">
              <strong>Total:</strong>
              <span className="fs-4">${calculateTotal()}</span>
            </div>

            {Auth.loggedIn() ? (
              <Button 
                variant="success" 
                className="w-100" 
                onClick={submitCheckout}
              >
                Checkout
              </Button>
            ) : (
              <Button 
                variant="primary" 
                className="w-100" 
                onClick={() => navigate('/login')}
              >
                Log in to check out
              </Button>
            )}
          </div>
        ) : (
          <div className="text-center py-5">
            <h4>Your cart is empty!</h4>
            <Button 
              variant="outline-primary" 
              className="mt-3" 
              onClick={toggleCart}
            >
              Continue Shopping
            </Button>
          </div>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Cart;
