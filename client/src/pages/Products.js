import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import { useLocation } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { QUERY_PRODUCTS } from '../utils/queries';
import { VintageTheme } from '../utils/theme';

// Function to add random images to products
const addImagesToProducts = (products) => {
  return products.map(product => {
    // Generate a random number between 1 and 10
    const randomImageNum = Math.floor(Math.random() * 10) + 1;
    
    // Create the image path
    const imagePath = `/${randomImageNum}.jpg`;
    
    // Return product with added images array
    return {
      ...product,
      images: [imagePath]
    };
  });
};

function Products() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  
  const [filters, setFilters] = useState({
    category: queryParams.get('category') || '',
    era: queryParams.get('era') || '',
    minPrice: '',
    maxPrice: ''
  });
  
  const { loading, error, data } = useQuery(QUERY_PRODUCTS);
  const [filteredProducts, setFilteredProducts] = useState([]);
  
  // Create mock products if no data is available
  useEffect(() => {
    if (!data || !data.products || data.products.length === 0) {
      const mockProducts = [
        {
          id: 1,
          name: "Vintage Floral Dress",
          category: "Women's Clothing",
          price: 89.99,
          era: "1970s",
          description: "Beautiful floral pattern dress from the 70s"
        },
        {
          id: 2,
          name: "Denim Jacket",
          category: "Men's Clothing",
          price: 65.99,
          era: "1980s",
          description: "Classic denim jacket with distressed details"
        },
        {
          id: 3,
          name: "Leather Handbag",
          category: "Accessories",
          price: 45.99,
          era: "1960s",
          description: "Genuine leather handbag with gold hardware"
        },
        {
          id: 4,
          name: "Silk Scarf",
          category: "Accessories",
          price: 28.99,
          era: "1950s",
          description: "Elegant silk scarf with floral pattern"
        },
        {
          id: 5,
          name: "Wool Coat",
          category: "Women's Clothing",
          price: 120.99,
          era: "1960s",
          description: "Warm wool coat perfect for winter"
        },
        {
          id: 6,
          name: "Vintage Sunglasses",
          category: "Accessories",
          price: 35.99,
          era: "1980s",
          description: "Classic aviator sunglasses"
        },
        {
          id: 7,
          name: "Leather Boots",
          category: "Shoes",
          price: 95.99,
          era: "1970s",
          description: "Genuine leather boots with side zipper"
        },
        {
          id: 8,
          name: "Pearl Necklace",
          category: "Jewelry",
          price: 55.99,
          era: "1950s",
          description: "Elegant pearl necklace with gold clasp"
        }
      ];
      
      // Add random images to mock products
      const productsWithImages = addImagesToProducts(mockProducts);
      setFilteredProducts(productsWithImages);
    }
  }, [data]);
  
  // Filter products based on user selections
  useEffect(() => {
    if (data && data.products && data.products.length > 0) {
      // Add images to products from API
      let productsWithImages = addImagesToProducts(data.products);
      
      let filtered = [...productsWithImages];
      
      if (filters.category) {
        filtered = filtered.filter(product => 
          product.category === filters.category
        );
      }
      
      if (filters.era) {
        filtered = filtered.filter(product => 
          product.era === filters.era
        );
      }
      
      if (filters.minPrice) {
        filtered = filtered.filter(product => 
          product.price >= parseFloat(filters.minPrice)
        );
      }
      
      if (filters.maxPrice) {
        filtered = filtered.filter(product => 
          product.price <= parseFloat(filters.maxPrice)
        );
      }
      
      setFilteredProducts(filtered);
    }
  }, [data, filters]);
  
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value
    });
  };
  
  const clearFilters = () => {
    setFilters({
      category: '',
      era: '',
      minPrice: '',
      maxPrice: ''
    });
  };
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  
  return (
    <Container>
      <h1 className="mb-4">Vintage Collection</h1>
      
      <Row>
        {/* Filters */}
        <Col md={3} className="mb-4">
          <div className="filter-section p-3 border rounded">
            <h4>Filters</h4>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Category</Form.Label>
                <Form.Select 
                  name="category"
                  value={filters.category}
                  onChange={handleFilterChange}
                >
                  <option value="">All Categories</option>
                  {VintageTheme.categories.map((category, index) => (
                    <option key={index} value={category}>{category}</option>
                  ))}
                </Form.Select>
              </Form.Group>
              
              <Form.Group className="mb-3">
                <Form.Label>Era</Form.Label>
                <Form.Select 
                  name="era"
                  value={filters.era}
                  onChange={handleFilterChange}
                >
                  <option value="">All Eras</option>
                  {VintageTheme.eras.map((era, index) => (
                    <option key={index} value={era}>{era}</option>
                  ))}
                </Form.Select>
              </Form.Group>
              
              <Form.Group className="mb-3">
                <Form.Label>Price Range</Form.Label>
                <Row>
                  <Col>
                    <Form.Control 
                      type="number" 
                      placeholder="Min" 
                      name="minPrice"
                      value={filters.minPrice}
                      onChange={handleFilterChange}
                    />
                  </Col>
                  <Col>
                    <Form.Control 
                      type="number" 
                      placeholder="Max" 
                      name="maxPrice"
                      value={filters.maxPrice}
                      onChange={handleFilterChange}
                    />
                  </Col>
                </Row>
              </Form.Group>
              
              <Button 
                variant="outline-secondary" 
                size="sm" 
                onClick={clearFilters}
                className="w-100"
              >
                Clear Filters
              </Button>
            </Form>
          </div>
        </Col>
        
        {/* Products */}
        <Col md={9}>
          <Row>
            {filteredProducts.length > 0 ? (
              filteredProducts.map(product => (
                <Col lg={4} md={6} key={product.id} className="mb-4">
                  <ProductCard product={product} />
                </Col>
              ))
            ) : (
              <Col>
                <p>No products found matching your criteria.</p>
              </Col>
            )}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Products;
