import React from 'react';
import './Hero.css';
import keyImage from '../assets/key.png';

function Hero() {
  return (
    <div className="hero">
      <h2>EVI$ION</h2>
      <img src={keyImage} alt="Key" />
      <p>사이버보안학과 </p>
      <p>대표 과 해킹 동아리</p>
    </div>
  );
}

export default Hero;