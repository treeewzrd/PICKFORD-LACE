import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { VintageTheme } from '../utils/theme';


function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section film-grain">
        <Container fluid className="p-0">
          <div 
            className="hero-banner" 
            style={{ 
              backgroundImage: "url('/images/vintage-background.jpg')",
              height: "80vh",
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative"
            }}
          >
            <div className="hero-overlay" style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,0.4)"
            }}>
              <Container className="h-100 d-flex flex-column justify-content-center text-white">
                <h1 className="display-3 fw-bold">PICKFORD - LACE</h1>
                <p className="lead">Vintage Treasures from the 50s to Y2K</p>
                <div>
                  <Button 
                    as={Link} 
                    to="/products" 
                    variant="outline-light" 
                    size="lg" 
                    className="mt-3"
                  >
                    Explore Collection
                  </Button>
                </div>
              </Container>
            </div>
          </div>
        </Container>
      </section>

      {/* Categories Section */}
      <section className="categories-section py-5">
        <Container>
          <h2 className="text-center mb-4">Explore By Style</h2>
          <Row>
            {VintageTheme.categories.map((category, index) => (
              <Col md={4} sm={6} key={index} className="mb-4">
                <div className="category-card text-center p-4 h-100">
                  <h3>{category}</h3>
                  <Link to={`/products?category=${category}`} className="stretched-link">
                    Explore
                  </Link>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Era Section */}
      <section className="era-section py-5 bg-light">
        <Container>
          <h2 className="text-center mb-4">Shop By Era</h2>
          <Row className="justify-content-center">
            {VintageTheme.eras.map((era, index) => (
              <Col md={2} sm={4} xs={6} key={index} className="mb-3">
                <Link 
                  to={`/products?era=${era}`} 
                  className="era-link d-block text-center p-3"
                >
                  <div className="era-circle mb-2">
                    {era.substring(0, 2)}
                  </div>
                  <span>{era}</span>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* About Section */}
      <section className="about-section py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h2>Our Vintage Aesthetic</h2>
              <p>
                Western Outlaw meets Mid-Century Modern. A journey through vintage - 
                from leather-clad rebels to Vegas showgirls, punk rock edges to designer elegance.
              </p>
              <p>
                Each piece tells a story, carefully curated to bring authentic vintage style 
                to your wardrobe. From the rebellious spirit of the 50s to the bold statements of Y2K.
              </p>
              <Button as={Link} to="/about" variant="outline-dark">Learn More</Button>
            </Col>
            <Col md={6}>
              <div className="collage-container p-4">
                {/* Placeholder for collage images */}
                <div className="vintage-collage">
                  <div className="collage-image image-1"></div>
                  <div className="collage-image image-2"></div>
                  <div className="collage-image image-3"></div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Home;
