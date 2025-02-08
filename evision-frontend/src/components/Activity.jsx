import React, { useRef } from 'react';
import './Activity.css';

function Activity() {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -600, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 600, behavior: 'smooth' });
    }
  };

  return (
    <section className="activity-section" id="activity">
      <h2>주요 활동</h2>
      <div className="slider-container">
        <button className="slider-button left" onClick={scrollLeft}>&lt;</button>
        <div className="activity-slider" ref={sliderRef}>
          <div className="activity-box first-box"></div>
          <div className="activity-box"></div>
          <div className="activity-box"></div>
          <div className="activity-box"></div>
        </div>
        <button className="slider-button right" onClick={scrollRight}>&gt;</button>
      </div>
    </section>
  );
}

export default Activity;