import React, { createContext, useContext, useReducer } from 'react';
import { reducer } from './reducers';

const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    products: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: '',
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

// Add these exports to match what's being imported in your components
const useGlobalState = () => {
  const [state] = useStoreContext();
  return state;
};

const useGlobalDispatch = () => {
  const [, dispatch] = useStoreContext();
  return dispatch;
};

const GlobalProvider = ({ children }) => {
  return (
    <StoreProvider>
      {children}
    </StoreProvider>
  );
};

export { StoreProvider, useStoreContext, useGlobalState, useGlobalDispatch, GlobalProvider };
