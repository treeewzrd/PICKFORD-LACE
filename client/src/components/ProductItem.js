import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { useStoreContext } from '../utils/GlobalState';
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from '../utils/actions';
import { idbPromise } from '../utils/helpers';

const ProductItem = ({ product }) => {
  const [state, dispatch] = useStoreContext();
  const { cart } = state;

  const addToCart = () => {
    // Check if item is already in cart
    const itemInCart = cart.find((cartItem) => cartItem._id === product._id);
    
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: product._id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
      // Update IndexedDB
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...product, purchaseQuantity: 1 }
      });
      // Add to IndexedDB
      idbPromise('cart', 'put', { ...product, purchaseQuantity: 1 });
    }
  };

  return (
    <Card className="h-100 product-card">
      <Link to={`/product/${product._id}`}>
        <Card.Img 
          variant="top" 
          src={`/images/${product.image}`} 
          alt={product.name}
          className="product-image"
        />
      </Link>
      <Card.Body className="d-flex flex-column">
        <Link to={`/product/${product._id}`} className="text-decoration-none">
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Card.Text className="text-muted mb-2">
          {product.category.name}
        </Card.Text>
        <Card.Text className="product-description">
          {product.description.substring(0, 100)}...
        </Card.Text>
        <div className="mt-auto">
          <Card.Text className="fw-bold fs-5 mb-2">
            ${product.price.toFixed(2)}
          </Card.Text>
          <Button 
            variant="primary" 
            onClick={addToCart}
            disabled={product.quantity <= 0}
            className="w-100"
          >
            {product.quantity <= 0 ? 'Out of Stock' : 'Add to Cart'}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductItem;
