import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import client from './utils/apolloClient';

// Import pages
import LandingPage from './pages/LandingPage';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Success from './pages/Success';
import NoMatch from './pages/NoMatch';

// Import components
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Import styles
import './styles/global.css';

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="app-container film-grain">
          <Routes>
            {/* Landing page as the root route */}
            <Route path="/" element={<LandingPage />} />
            
            {/* All other routes with Navigation and Footer */}
            <Route path="/home" element={
              <>
                <Navigation />
                <Home />
                <Footer />
              </>
            } />
            <Route path="/login" element={
              <>
                <Navigation />
                <Login />
                <Footer />
              </>
            } />
            <Route path="/signup" element={
              <>
                <Navigation />
                <Signup />
                <Footer />
              </>
            } />
            <Route path="/products" element={
              <>
                <Navigation />
                <Products />
                <Footer />
              </>
            } />
            <Route path="/products/:id" element={
              <>
                <Navigation />
                <ProductDetail />
                <Footer />
              </>
            } />
            <Route path="/cart" element={
              <>
                <Navigation />
                <Cart />
                <Footer />
              </>
            } />
            <Route path="/checkout" element={
              <>
                <Navigation />
                <Checkout />
                <Footer />
              </>
            } />
            <Route path="/success" element={
              <>
                <Navigation />
                <Success />
                <Footer />
              </>
            } />
            <Route path="*" element={
              <>
                <Navigation />
                <NoMatch />
                <Footer />
              </>
            } />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
