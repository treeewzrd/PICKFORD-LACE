import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Image, Tabs, Tab } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCT } from '../utils/queries';
import { useGlobalDispatch } from '../utils/GlobalState';

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useGlobalDispatch();
  const [activeImage, setActiveImage] = useState(0);
  
  const { loading, error, data } = useQuery(QUERY_PRODUCT, {
    variables: { id }
  });
  
  const addToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        ...data.product,
        quantity: 1
      }
    });
    
    // Optional: Navigate to cart
    // navigate('/cart');
  };
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  
  const { product } = data;
  
  return (
    <Container className="py-4">
      <Button 
        variant="link" 
        className="mb-3 ps-0" 
        onClick={() => navigate(-1)}
      >
        &larr; Back to Products
      </Button>
      
      <Row>
        {/* Product Images */}
        <Col md={6} className="mb-4">
          <div className="product-main-image mb-3">
            <Image 
              src={product.images[activeImage]} 
              alt={product.name} 
              fluid 
              className="vintage-image"
            />
          </div>
          
          {product.images.length > 1 && (
            <Row>
              {product.images.map((image, index) => (
                <Col xs={3} key={index}>
                  <Image 
                    src={image} 
                    alt={`${product.name} thumbnail ${index}`} 
                    thumbnail 
                    className={`product-thumbnail ${activeImage === index ? 'active' : ''}`}
                    onClick={() => setActiveImage(index)}
                  />
                </Col>
              ))}
            </Row>
          )}
        </Col>
        
        {/* Product Details */}
        <Col md={6}>
          <div className="product-info">
            <h1>{product.name}</h1>
            <p className="era-badge">{product.era}</p>
            <p className="category-badge">{product.category}</p>
            <h2 className="price">${product.price.toFixed(2)}</h2>
            
            <div className="product-meta mb-4">
              <p><strong>Condition:</strong> {product.condition}</p>
              <p><strong>Size:</strong> {product.size}</p>
            </div>
            
            <div className="mb-4">
              <Button 
                variant="primary" 
                size="lg" 
                className="w-100 mb-2"
                onClick={addToCart}
              >
                Add to Cart
              </Button>
            </div>
            
            <Tabs defaultActiveKey="description" className="mb-3">
              <Tab eventKey="description" title="Description">
                <div className="p-3">
                  <p>{product.description}</p>
                </div>
              </Tab>
              <Tab eventKey="details" title="Details">
                <div className="p-3">
                  <p><strong>Era:</strong> {product.era}</p>
                  <p><strong>Category:</strong> {product.category}</p>
                  <p><strong>Condition:</strong> {product.condition}</p>
                  <p><strong>Size:</strong> {product.size}</p>
                </div>
              </Tab>
              <Tab eventKey="care" title="Care">
                <div className="p-3">
                  <h5>Vintage Care Instructions</h5>
                  <ul>
                    <li>Hand wash cold or dry clean</li>
                    <li>Do not bleach</li>
                    <li>Hang dry</li>
                    <li>Iron on low heat if needed</li>
                    <li>Store in a cool, dry place</li>
                  </ul>
                </div>
              </Tab>
            </Tabs>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetail;
