import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_ORDER } from '../utils/mutations';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Success() {
  const [addOrder] = useMutation(ADD_ORDER);

  useEffect(() => {
    async function saveOrder() {
      const cart = JSON.parse(localStorage.getItem('cart'));
      
      if (cart && cart.length) {
        const products = cart.map(item => item._id);
        
        await addOrder({ variables: { products } });
        
        // Clear the cart from localStorage
        localStorage.removeItem('cart');
      }
    }
    
    saveOrder();
  }, [addOrder]);

  return (
    <Container className="my-5 text-center">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Body>
              <h1 className="mb-4">Thank You for Your Purchase!</h1>
              <p className="lead">
                Your order has been successfully processed. You will receive a confirmation email shortly.
              </p>
              <p className="mt-4">
                <Link to="/products" className="btn btn-primary">
                  Continue Shopping
                </Link>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Success;

