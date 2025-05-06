import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { loadStripe } from '@stripe/stripe-js';
import { CREATE_CHECKOUT_SESSION } from '../utils/mutations';
import { useStoreContext } from '../utils/GlobalState';
import { CLEAR_CART } from '../utils/actions';
import Auth from '../utils/auth';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

// Load Stripe
const stripePromise = loadStripe('pk_test_TYRGmROdQvnmh4qeicFf0w8q00lClIxyE4');

const Checkout = () => {
  const [state, dispatch] = useStoreContext();
  const [getCheckout, { data }] = useMutation(CREATE_CHECKOUT_SESSION);
  
  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.createCheckoutSession.session });
      });
      dispatch({ type: CLEAR_CART });
    }
  }, [data, dispatch]);
  
  function calculateTotal() {
    let sum = 0;
    state.cart.forEach((item) => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);
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
  
  if (!state.cart.length) {
    return (
      <Container className="my-5">
        <h2>Your cart is empty!</h2>
      </Container>
    );
  }
  
  return (
    <Container className="my-5">
      <Row>
        <Col md={8}>
          <Card>
            <Card.Header>
              <h2>Checkout Summary</h2>
            </Card.Header>
            <Card.Body>
              {state.cart.map((item) => (
                <div key={item._id} className="d-flex justify-content-between mb-3">
                  <div>
                    <strong>{item.name}</strong> ({item.purchaseQuantity})
                  </div>
                  <div>${(item.price * item.purchaseQuantity).toFixed(2)}</div>
                </div>
              ))}
              <hr />
              <div className="d-flex justify-content-between">
                <strong>Total:</strong>
                <strong>${calculateTotal()}</strong>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              {Auth.loggedIn() ? (
                <Button 
                  variant="primary" 
                  className="w-100"
                  onClick={submitCheckout}
                >
                  Proceed to Payment
                </Button>
              ) : (
                <p>Please <a href="/login">log in</a> to complete your purchase.</p>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Checkout;
