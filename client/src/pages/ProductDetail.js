import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCT } from '../utils/queries';
import { useStoreContext } from '../utils/GlobalState';
import {
  ADD_TO_CART,
  UPDATE_CART_QUANTITY,
  REMOVE_FROM_CART,
  UPDATE_PRODUCTS,
} from '../utils/actions';
import { idbPromise } from '../utils/helpers';
import { Container, Row, Col, Button, Spinner, Image, Form } from 'react-bootstrap';

const ProductDetail = () => {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();
  const [currentProduct, setCurrentProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  
  const { loading, data } = useQuery(QUERY_PRODUCT, {
    variables: { id },
  });
  
  const { products, cart } = state;
  
  useEffect(() => {
    // If we have data from the query, set the current product
    if (data) {
      setCurrentProduct(data.product);
      dispatch({
        type: UPDATE_PRODUCTS,
        products: [data.product],
      });
      
      // Save to IndexedDB
      idbPromise('products', 'put', data.product);
    } 
    // If we don't have data from the query, try to get it from IndexedDB
    else if (!loading) {
      idbPromise('products', 'get').then((indexedProducts) => {
        const product = indexedProducts.find((p) => p._id === id);
        if (product) {
          setCurrentProduct(product);
          dispatch({
            type: UPDATE_PRODUCTS,
            products: [product],
          });
        }
      });
    }
  }, [data, loading, dispatch, id]);
  
  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === id);
    
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: id,
        purchaseQuantity: parseInt(quantity)
      });
      // Update IndexedDB
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(quantity)
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...currentProduct, purchaseQuantity: parseInt(quantity) }
      });
      // Add to IndexedDB
      idbPromise('cart', 'put', { 
        ...currentProduct, 
        purchaseQuantity: parseInt(quantity) 
      });
    }
  };
  
  const removeFromCart = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: currentProduct._id
    });
    
    // Remove from IndexedDB
    idbPromise('cart', 'delete', { ...currentProduct });
  };
  
  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0 && value <= currentProduct.quantity) {
      setQuantity(value);
    }
  };
  
  if (loading) {
    return (
      <div className="d-flex justify-content-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }
  
  if (!currentProduct?.name) {
    return <h2>Product Not Found</h2>;
  }
  
  return (
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <Image 
            src={`/images/${currentProduct.image}`} 
            alt={currentProduct.name} 
            fluid 
            className="product-detail-image"
          />
        </Col>
        <Col md={6}>
          <h1>{currentProduct.name}</h1>
          <p className="text-muted">
            {currentProduct.category?.name}
          </p>
          <h3 className="my-3">${currentProduct.price?.toFixed(2)}</h3>
          <p className="my-4">{currentProduct.description}</p>
          
          <div className="d-flex align-items-center mb-4">
            <Form.Label className="me-3 mb-0">Quantity:</Form.Label>
            <Form.Control
              type="number"
              min="1"
              max={currentProduct.quantity}
              value={quantity}
              onChange={handleQuantityChange}
              style={{ width: '80px' }}
              disabled={currentProduct.quantity <= 0}
            />
            <span className="ms-3">
              {currentProduct.quantity > 0 
                ? `${currentProduct.quantity} in stock` 
                : 'Out of Stock'}
            </span>
          </div>
          
          <div className="d-grid gap-2">
            <Button 
              variant="primary" 
              size="lg"
              onClick={addToCart}
              disabled={currentProduct.quantity <= 0}
            >
              Add to Cart
            </Button>
            
            {cart.some(p => p._id === currentProduct._id) && (
              <Button 
                variant="danger" 
                size="lg"
                onClick={removeFromCart}
              >
                Remove from Cart
              </Button>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
