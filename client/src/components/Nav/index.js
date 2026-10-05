import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Badge } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import Auth from '../../utils/auth';
import { useStoreContext } from '../../utils/GlobalState';
import { TOGGLE_CART } from '../../utils/actions';
import './style.css';

function Navigation() {
  const [state, dispatch] = useStoreContext();

  function toggleCart() {
    dispatch({ type: TOGGLE_CART });
  }

  function getCartItemCount() {
    return state.cart.reduce((sum, item) => sum + item.purchaseQuantity, 0);
  }

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/orderHistory">
            Order History
          </Nav.Link>
          <Nav.Link onClick={() => Auth.logout()}>
            Logout
          </Nav.Link>
          <Nav.Link onClick={toggleCart} className="cart-icon">
            <FaShoppingCart />
            {state.cart.length > 0 && (
              <Badge bg="danger" pill className="cart-badge">
                {getCartItemCount()}
              </Badge>
            )}
          </Nav.Link>
        </Nav>
      );
    } else {
      return (
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/signup">
            Signup
          </Nav.Link>
          <Nav.Link as={Link} to="/login">
            Login
          </Nav.Link>
          <Nav.Link onClick={toggleCart} className="cart-icon">
            <FaShoppingCart />
            {state.cart.length > 0 && (
              <Badge bg="danger" pill className="cart-badge">
                {getCartItemCount()}
              </Badge>
            )}
          </Nav.Link>
        </Nav>
      );
    }
  }

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Vintage Clothing
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/products">
              All Products
            </Nav.Link>
            {/* You can add category links here */}
          </Nav>
          {showNavigation()}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
