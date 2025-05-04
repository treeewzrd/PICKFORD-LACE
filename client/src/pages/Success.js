import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_ORDER } from '../utils/mutations';
import { useStoreContext } from '../utils/GlobalState';
import { CLEAR_CART } from '../utils/actions';

function Success() {
  const [addOrder] = useMutation(ADD_ORDER);
  const [state, dispatch] = useStoreContext();

  useEffect(() => {
    async function saveOrder() {
      const cart = state.cart;
      const products = cart.map(item => item._id);
      
      if (products.length) {
        const { data } = await addOrder({ variables: { products } });
        const productData = data.addOrder.products;

        dispatch({
          type: CLEAR_CART
        });
      }
    }

    saveOrder();
  }, [addOrder, state.cart, dispatch]);
  
  return (
    <div className="container my-1">
      <h1>Success!</h1>
      <h2>Thank you for your purchase!</h2>
      <h2>You will now be redirected to the home page</h2>
    </div>
  );
}

export default Success;
