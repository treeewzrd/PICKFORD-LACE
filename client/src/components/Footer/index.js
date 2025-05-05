import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest } from 'react-icons/fa';
import './style.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5 mt-5">
      <Container>
        <Row>
          <Col md={4} className="mb-4 mb-md-0">
            <h5>Vintage Clothing</h5>
            <p>
              Discover timeless fashion pieces from the past. Our curated collection 
              brings you the best vintage clothing from every era.
            </p>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
                <FaPinterest />
              </a>
            </div>
          </Col>
          
          <Col md={2} className="mb-4 mb-md-0">
            <h5>Shop</h5>
            <ul className="list-unstyled">
              <li><Link to="/products">All Products</Link></li>
              <li><Link to="/products?category=1">Women's</Link></li>
              <li><Link to="/products?category=2">Men's</Link></li>
              <li><Link to="/products?category=3">Accessories</Link></li>
            </ul>
          </Col>
          
          <Col md={2} className="mb-4 mb-md-0">
            <h5>Account</h5>
            <ul className="list-unstyled">
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/signup">Register</Link></li>
              <li><Link to="/orderHistory">Order History</Link></li>
            </ul>
          </Col>
          
          <Col md={4}>
            <h5>Newsletter</h5>
            <p>Subscribe to receive updates on new arrivals and special promotions.</p>
            <form className="newsletter-form">
              <div className="input-group">
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="Your email address" 
                  required
                />
                <button className="btn btn-primary" type="submit">
                  Subscribe
                </button>
              </div>
            </form>
          </Col>
        </Row>
        
        <hr className="my-4" />
        
        <Row>
          <Col className="text-center">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Vintage Clothing. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
