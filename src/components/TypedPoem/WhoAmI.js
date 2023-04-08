import React, { useState, useEffect } from 'react';
import { Zoom } from 'react-awesome-reveal';
import Typed from 'typed.js';
import './WhoAmI.css';

const WhoAmI = () => {
  const typedOptions = {
    strings: [
      "Valedictorian",
      "Enterprising Innovator",
      "Computer Engineer",
      "Dare Devil",
      "Environment Enthusiast",
    ],
    typeSpeed: 50,
    backSpeed: 20,
    loop: true,
  };

  useEffect(() => {
    const typed = new Typed(".typed-element", typedOptions);
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="typed-poem-container">
      <Zoom triggerOnce>
        <h1 className="upper-div">I am</h1>
        <h1 className="typed-element"></h1>
      </Zoom>
      <a href="https://www.linkedin.com/in/jasonkongie/" target="_blank" rel="noreferrer" className="linkedin-btn">LinkedIn</a>
    </div>
  );
};

export default WhoAmI;
