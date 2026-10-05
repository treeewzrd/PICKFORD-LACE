import React from 'react';
import { useStoreContext } from '../../utils/GlobalState';
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from '../../utils/actions';
import { idbPromise } from '../../utils/helpers';
import { Card, Form, Button } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
import './style.css';

const CartItem = ({ item }) => {
  const [, dispatch] = useStoreContext();

  const removeFromCart = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id
    });
    idbPromise('cart', 'delete', { ...item });
  };

  const onChange = (e) => {
    const value = e.target.value;
    
    if (value === '0') {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: item._id
      });
      idbPromise('cart', 'delete', { ...item });
    } else {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: item._id,
        purchaseQuantity: parseInt(value)
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: parseInt(value) });
    }
  };

  return (
    <Card className="mb-3 cart-item">
      <Card.Body>
        <div className="d-flex">
          <div className="cart-item-image-container me-3">
            <img
              src={`/images/${item.image}`}
              alt={item.name}
              className="cart-item-image"
            />
          </div>
          <div className="flex-grow-1">
            <div className="d-flex justify-content-between align-items-start">
              <Card.Title className="mb-1">{item.name}</Card.Title>
              <Button 
                variant="link" 
                className="p-0 text-danger" 
                onClick={removeFromCart}
              >
                <FaTrash />
              </Button>
            </div>
            <Card.Text className="text-muted mb-2">
              ${item.price.toFixed(2)}
            </Card.Text>
            <div className="d-flex align-items-center">
              <Form.Label className="me-2 mb-0">Qty:</Form.Label>
              <Form.Select
                value={item.purchaseQuantity}
                onChange={onChange}
                style={{ width: '80px' }}
              >
                <option value="0">0 (Remove)</option>
                {[...Array(Math.min(10, item.quantity)).keys()].map(x => (
                  <option key={x + 1} value={x + 1}>
                    {x + 1}
                  </option>
                ))}
              </Form.Select>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CartItem;
