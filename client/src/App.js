// In your App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Cart from './pages/Cart';
import { GlobalProvider } from './utils/GlobalState';

function App() {
  // Define the background style directly in the component
  const appContainerStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/marymirror.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    minHeight: '100vh'
  };

  const mainContentStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: '20px',
    minHeight: '80vh',
    margin: '20px',
    borderRadius: '8px'
  };

  return (
    <GlobalProvider>
      <div className="app-container" style={appContainerStyle}>
        <Navigation />
        <main className="main-content" style={mainContentStyle}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </GlobalProvider>
  );
}

export default App;
