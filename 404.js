import React from "react";
import "./styles.css"; // Adjust the path as per your project structure.

const Custom404 = () => {
  const handleMouseMove = (e) => {
    const container = e.currentTarget;
    const { offsetWidth: width, offsetHeight: height } = container;
    const { offsetX, offsetY } = e;
    const x = (offsetX / width) * 2 - 1;
    const y = (offsetY / height) * 2 - 1;
    container.style.transform = `perspective(1000px) rotateX(${y * 5}deg) rotateY(${x * 5}deg)`;
    container.style.transition = "transform 0.1s ease-out";
  };

  const handleMouseLeave = (e) => {
    const container = e.currentTarget;
    container.style.transition = "transform 0.5s ease-out";
    container.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div className="error-page">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        id="background-video"
      >
        <source
          src="https://r2.ammo.lol/a8f43fff-1f64-4f72-bac8-491af0f46638.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div
        className="container"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <h1>404</h1>
        <p>Oops! The page you're looking for is not here.</p>
        <a href="/">Go Back to Home</a>
      </div>
    </div>
  );
};

export default Custom404;
