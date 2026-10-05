import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-light py-4 mt-5">
      <Container>
        <Row>
          <Col md={4}>
            <h5>PICKFORD - LACE</h5>
            <p>Vintage clothing curations from the 50s to Y2K</p>
          </Col>
          <Col md={4}>
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Shop</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Connect</h5>
            <ul className="list-unstyled">
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://etsy.com" target="_blank" rel="noopener noreferrer">Etsy</a></li>
              <li><a href="https://depop.com" target="_blank" rel="noopener noreferrer">Depop</a></li>
            </ul>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <p className="small text-muted">© {new Date().getFullYear()} PICKFORD - LACE. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
