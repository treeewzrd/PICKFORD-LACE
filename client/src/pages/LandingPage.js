import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleEnter = () => {
    navigate('/home');
  };

  return (
    <div className="landing-container">
      {/* For an image background */}
      <div className="landing-content" onClick={handleEnter}>
        <img 
          src="/images/pickford-lace-logo.jpg" 
          alt="Pickford & Lace" 
          className="landing-logo"
        />
        <div className="enter-prompt">Click to Enter</div>
      </div>

      {/* Uncomment this section if you want to use a video background instead */}
      {/*
      <video autoPlay muted loop className="landing-video">
        <source src="/videos/vintage-fashion.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="landing-content" onClick={handleEnter}>
        <h1 className="landing-title">Pickford & Lace</h1>
        <div className="enter-prompt">Click to Enter</div>
      </div>
      */}
    </div>
  );
};

export default LandingPage;
