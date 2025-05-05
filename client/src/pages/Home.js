import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS, QUERY_CATEGORIES } from '../utils/queries';
import ProductItem from '../components/ProductItem';
import CategoryMenu from '../components/CategoryMenu';
import Cart from '../components/Cart';
import { Container, Row, Col, Carousel, Button, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  const { loading: productLoading, data: productData } = useQuery(QUERY_PRODUCTS);
  const { loading: categoryLoading, data: categoryData } = useQuery(QUERY_CATEGORIES);
  
  const products = productData?.products || [];
  const categories = categoryData?.categories || [];
  
  // Get featured products (first 3)
  const featuredProducts = products.slice(0, 3);
  
  if (productLoading || categoryLoading) {
    return (
      <div className="d-flex justify-content-center my-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }
  
  return (
    <div>
      <Carousel className="home-carousel mb-5">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/banner1.jpg"
            alt="Vintage Collection"
          />
          <Carousel.Caption>
            <h1>Vintage Collection</h1>
            <p>Discover timeless fashion pieces from the past</p>
            <Button as={Link} to="/products" variant="light" size="lg">
              Shop Now
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/banner2.jpg"
            alt="New Arrivals"
          />
          <Carousel.Caption>
            <h1>New Arrivals</h1>
            <p>Check out our latest vintage finds</p>
            <Button as={Link} to="/products" variant="light" size="lg">
              Explore
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      
      <Container>
        <h2 className="text-center mb-5">Shop by Category</h2>
        <CategoryMenu categories={categories} />
        
        <h2 className="text-center my-5">Featured Products</h2>
        <Row>
          {featuredProducts.map(product => (
            <Col key={product._id} md={4} className="mb-4">
              <ProductItem product={product} />
            </Col>
          ))}
        </Row>
        
        <div className="text-center my-5">
          <Button as={Link} to="/products" variant="outline-primary" size="lg">
            View All Products
          </Button>
        </div>
      </Container>
      
      <Cart />
    </div>
  );
};

export default Home;
