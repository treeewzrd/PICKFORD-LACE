import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS, QUERY_CATEGORIES } from '../utils/queries';
import ProductItem from '../components/ProductItem';
import { Spinner, Container, Row, Col, Form } from 'react-bootstrap';

const ProductList = () => {
  const [currentCategory, setCurrentCategory] = useState('');
  
  const { loading: productLoading, data: productData } = useQuery(QUERY_PRODUCTS, {
    variables: { category: currentCategory || null }
  });
  
  const { loading: categoryLoading, data: categoryData } = useQuery(QUERY_CATEGORIES);
  
  const products = productData?.products || [];
  const categories = categoryData?.categories || [];
  
  const handleCategoryChange = (e) => {
    setCurrentCategory(e.target.value);
  };
  
  if (productLoading || categoryLoading) {
    return (
      <div className="d-flex justify-content-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }
  
  return (
    <Container>
      <h1 className="my-4">Vintage Collection</h1>
      
      <Row className="mb-4">
        <Col md={4}>
          <Form.Group>
            <Form.Label>Filter by Category</Form.Label>
            <Form.Select 
              value={currentCategory} 
              onChange={handleCategoryChange}
            >
              <option value="">All Categories</option>
              {categories.map(category => (
                <option key={category._id} value={category._id}>
                  {category.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      
      {products.length ? (
        <Row>
          {products.map(product => (
            <Col key={product._id} md={4} className="mb-4">
              <ProductItem product={product} />
            </Col>
          ))}
        </Row>
      ) : (
        <h3>No Products Found</h3>
      )}
    </Container>
  );
};

export default ProductList;
