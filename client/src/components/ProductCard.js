import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useGlobalDispatch } from '../utils/GlobalState';

function ProductCard({ product }) {
  const dispatch = useGlobalDispatch();
  
  const addToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        ...product,
        quantity: 1
      }
    });
  };
  
  return (
    <Card className="vintage-card mb-4 h-100">
      <div className="product-image-container">
        <Card.Img 
          variant="top" 
          src={product.images[0]} 
          alt={product.name}
          className="product-image"
        />
        <div className="era-badge">{product.era}</div>
      </div>
      <Card.Body className="d-flex flex-column">
        <Card.Title>{product.name}</Card.Title>
        <Card.Text className="text-muted mb-1">
          {product.category}
        </Card.Text>
        <Card.Text className="mb-3">
          ${product.price.toFixed(2)}
        </Card.Text>
        <div className="mt-auto d-flex justify-content-between">
          <Button 
            variant="outline-secondary" 
            as={Link} 
            to={`/product/${product.id}`}
          >
            Details
          </Button>
          <Button 
            variant="primary" 
            onClick={addToCart}
          >
            Add to Cart
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
