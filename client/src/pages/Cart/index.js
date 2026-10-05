import React from 'react';
import { useStoreContext } from '../../utils/GlobalState';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from '../../utils/actions';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [state, dispatch] = useStoreContext();

  const removeFromCart = (item) => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id
    });
  };

  const updateCartQuantity = (item, quantity) => {
    dispatch({
      type: UPDATE_CART_QUANTITY,
      _id: item._id,
      purchaseQuantity: parseInt(quantity)
    });
  };

  const calculateTotal = () => {
    return state.cart.reduce((total, item) => {
      return total + (item.price * item.purchaseQuantity);
    }, 0).toFixed(2);
  };

  if (!state.cart.length) {
    return (
      <Container className="my-5">
        <Row>
          <Col>
            <h2>Your Cart is Empty!</h2>
            <Link to="/products" className="btn btn-primary mt-3">Continue Shopping</Link>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <h2>Shopping Cart</h2>
      {state.cart.map(item => (
        <Card key={item._id} className="mb-3">
          <Card.Body>
            <Row>
              <Col md={3}>
                <Card.Img src={item.image} alt={item.name} />
              </Col>
              <Col md={9}>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>${item.price}</Card.Text>
                <div className="d-flex align-items-center">
                  <span className="me-2">Quantity:</span>
                  <input
                    type="number"
                    min="1"
                    className="form-control w-25 me-3"
                    value={item.purchaseQuantity}
                    onChange={(e) => updateCartQuantity(item, e.target.value)}
                  />
                  <Button variant="danger" onClick={() => removeFromCart(item)}>
                    Remove
                  </Button>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      ))}
      <Card className="mt-4">
        <Card.Body>
          <Row>
            <Col>
              <h3>Total: ${calculateTotal()}</h3>
              {Auth.loggedIn() ? (
                <Button variant="success" className="mt-2">
                  Checkout
                </Button>
              ) : (
                <p>Please <Link to="/login">login</Link> to checkout</p>
              )}
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Cart;
