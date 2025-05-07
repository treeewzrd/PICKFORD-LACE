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
            <h5>Pickford & Lace</h5>
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
              <li><Link to="/category/womens">Women's</Link></li>
              <li><Link to="/category/mens">Men's</Link></li>
              <li><Link to="/category/accessories">Accessories</Link></li>
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
            <h5>Shop With Us</h5>
            <div className="shop-platforms">
              <a href="https://www.etsy.com/shop/PickfordandLaceShop" target="_blank" rel="noopener noreferrer" className="platform-link">
                <img src={etsyLogo} alt="Etsy Shop" className="platform-logo" />
                <span>Etsy</span>
              </a>
              
              <a href="https://www.ebay.com/usr/pickfordandlacevintage/Women/_i.html?_sacat=260010" target="_blank" rel="noopener noreferrer" className="platform-link">
                <img src={ebayLogo} alt="eBay Store" className="platform-logo" />
                <span>eBay</span>
              </a>
              
              <a href="https://www.depop.com/pickfordandlace/" target="_blank" rel="noopener noreferrer" className="platform-link">
                <img src={depopLogo} alt="Depop Shop" className="platform-logo" />
                <span>Depop</span>
              </a>
              
              <a href="https://poshmark.com/closet/pickfordandlace" target="_blank" rel="noopener noreferrer" className="platform-link">
                <img src={poshmarkLogo} alt="Poshmark Closet" className="platform-logo" />
                <span>Poshmark</span>
              </a>
            </div>
            
            <h5 className="mt-4">Newsletter</h5>
            <p>Subscribe for updates on new arrivals and promotions.</p>
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
              &copy; {new Date().getFullYear()} Pickford & Lace Vintage. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
