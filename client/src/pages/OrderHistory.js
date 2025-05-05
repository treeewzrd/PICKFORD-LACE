import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';
import { Container, Row, Col, Card, ListGroup, Spinner, Alert, Button } from 'react-bootstrap';

function OrderHistory() {
  const { loading, data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
  }

  if (loading) {
    return (
      <div className="d-flex justify-content-center my-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h2>Order History</h2>
          <p>
            Welcome back, {user.username}!
          </p>
          
          {user.orders.length ? (
            user.orders.map((order) => (
              <Card key={order._id} className="mb-4">
                <Card.Header className="d-flex justify-content-between align-items-center">
                  <span>
                    Order placed: {new Date(parseInt(order.purchaseDate)).toLocaleDateString()}
                  </span>
                  <span>
                    Order #: {order._id.substring(order._id.length - 8)}
                  </span>
                </Card.Header>
                <ListGroup variant="flush">
                  {order.products.map(({ _id, image, name, price }, index) => (
                    <ListGroup.Item key={index} className="d-flex">
                      <div className="order-image-container me-3">
                        <img
                          alt={name}
                          src={`/images/${image}`}
                          className="order-image"
                        />
                      </div>
                      <div className="flex-grow-1">
                        <div className="d-flex justify-content-between">
                          <Link to={`/products/${_id}`}>
                            <h5>{name}</h5>
                          </Link>
                          <div>${price.toFixed(2)}</div>
                        </div>
                      </div>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card>
            ))
          ) : (
            <Alert variant="info">
              <p>You haven't placed any orders yet!</p>
              <Button as={Link} to="/" variant="primary">
                Start Shopping
              </Button>
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default OrderHistory;
