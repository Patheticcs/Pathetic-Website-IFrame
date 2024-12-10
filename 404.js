// pages/404.js
import React from 'react';
import './404.html'; // Assuming your style.css is in the same directory or adjust the path accordingly

const Custom404 = () => {
  return (
    <div className="error-container">
      <h1>404</h1>
      <p>Oops! The page you're looking for is not here.</p>
      <a href="/">Go Back to Home</a>
    </div>
  );
};

export default Custom404;
