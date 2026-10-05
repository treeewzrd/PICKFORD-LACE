import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';

function Signup() {
  const [formState, setFormState] = useState({ 
    username: '', 
    email: '', 
    password: '' 
  });
  const [addUser, { error }] = useMutation(ADD_USER);
  const navigate = useNavigate(); // Add navigation

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await addUser({
        variables: {
          username: formState.username,
          email: formState.email,
          password: formState.password,
        },
      });
      const token = mutationResponse.data.addUser.token;
      Auth.login(token);
      navigate('/'); // Redirect to home page after successful signup
    } catch (e) {
      console.error('Signup error:', e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <Card.Body className="p-4">
              <h2 className="text-center mb-4">Create an Account</h2>
              
              {error && (
                <Alert variant="danger">
                  {error.message || 'Signup failed. Please try again.'}
                </Alert>
              )}
              
              <Form onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="username">Username</Form.Label>
                  <Form.Control
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Choose a username"
                    onChange={handleChange}
                    value={formState.username}
                    required
                  />
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="email">Email</Form.Label>
                  <Form.Control
                    type="email"
                    id="email"
                    name="email"
                    placeholder="youremail@example.com"
                    onChange={handleChange}
                    value={formState.email}
                    required
                  />
                </Form.Group>
                
                <Form.Group className="mb-4">
                  <Form.Label htmlFor="password">Password</Form.Label>
                  <Form.Control
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Create a password"
                    onChange={handleChange}
                    value={formState.password}
                    required
                    minLength="5"
                  />
                  <Form.Text className="text-muted">
                    Password must be at least 5 characters long
                  </Form.Text>
                </Form.Group>
                
                <div className="d-grid">
                  <Button type="submit" variant="primary" size="lg">
                    Create Account
                  </Button>
                </div>
              </Form>
              
              <div className="text-center mt-4">
                <p>
                  Already have an account? <Link to="/login">Login</Link>
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Signup;
