import React from 'react';
import { Link } from 'react-router-dom';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_CURRENT_CATEGORY } from '../../utils/actions';
import { Row, Col, Card } from 'react-bootstrap';
import './style.css';

function CategoryMenu({ categories }) {
  const [, dispatch] = useStoreContext();

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id,
    });
  };

  return (
    <Row className="category-menu">
      {categories.map((category) => (
        <Col key={category._id} xs={6} md={3} className="mb-4">
          <Link 
            to={`/products?category=${category._id}`} 
            onClick={() => handleClick(category._id)}
            className="text-decoration-none"
          >
            <Card className="category-card text-center h-100">
              <Card.Body className="d-flex flex-column justify-content-center">
                <Card.Title>{category.name}</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      ))}
    </Row>
  );
}

export default CategoryMenu;
