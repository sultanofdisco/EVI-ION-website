import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-section" id="about">
      <h2>동아리 소개</h2>
      <p>
        EVI$ION은 이화여자대학교 인공지능대학 소속 사이버보안학과 동아리로, 
        사이버보안과 관련된 학술적인 발전을 도모하는 동아리입니다. <br />
        최신 보안 기술을 탐구하며, 사이버 보안의 혁신을 선도하는 것을 목표로 합니다.
      </p>
      <a href="https://www.instagram.com/evision_security?igsh=OTVzYXJxbnlod2Vt" target="_blank" className="instagram-link">
        EVI$ION 인스타그램 보러가기 &gt;&gt;
      </a>
    </div>
  );
}

export default About;
