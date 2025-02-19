import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.5, ease: "easeOut" } }
};

function About() {
  return (
    <motion.div 
      className="about-section" 
      id="about"
      variants={fadeInVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
    >
      <h2>동아리 소개</h2>
      <p>&quot;Ewha’s Vision, Cyber’s Future&quot;<br /></p>
      <p>
      EVI$ION은 이화여자대학교 인공지능대학 소속 사이버보안학과 동아리로, <br />
      이화에서부터 시작되는 보안 혁신과 미래 보안 비전을 향해 다함께 나아가겠다는 뜻을 담고 있습니다. <br />
      최신 보안 기술을 탐구하며, 사이버보안 분야의 학문적 발전을 도모하고 보안 전문가로 성장하는 것을 목표로 합니다.
      </p>

      <div className="tag-container">
        <div className="tag">web</div>
        <div className="tag">crypto</div>
        <div className="tag">reversing</div>
        <div className="tag">system</div>
        <div className="tag">forensics</div>
      </div>
      
      <a href="https://www.instagram.com/evision_security?igsh=OTVzYXJxbnlod2Vt" target="_blank" className="instagram-link">
        EVI$ION 인스타그램 보러가기 &gt;&gt;
      </a>
    </motion.div>
  );
}

export default About;
