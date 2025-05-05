import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useGlobalState, useGlobalDispatch } from '../utils/GlobalState';
import Auth from '../utils/auth';

function Navigation() {
  const state = useGlobalState();
  const dispatch = useGlobalDispatch();
  const navigate = useNavigate();
  
  const handleLogout = () => {
    Auth.logout();
    dispatch({ type: 'LOGOUT' });
    navigate('/');
  };
  
  return (
    <Navbar bg="light" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand as={Link} to="/" className="vintage-brand">
          PICKFORD - LACE
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/products">Shop</Nav.Link>
            <Nav.Link as={Link} to="/cart">
              Cart {state.cart.length > 0 && `(${state.cart.length})`}
            </Nav.Link>
            {state.user ? (
              <>
                <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
