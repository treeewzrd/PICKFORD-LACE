import React from 'react';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="vintage-landing">
      <section className="hero">
        <h1>PICKFORD - LACE</h1>
        <p>Vintage Curations: 50s to Y2K</p>
      </section>

      <section className="collection-preview">
        <h2>Our Aesthetic</h2>
        <div className="aesthetic-description">
          <p>
            Western Outlaw meets Mid-Century Modern. 
            A journey through vintage - from leather-clad rebels 
            to Vegas showgirls, punk rock edges to designer elegance.
          </p>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
