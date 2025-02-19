import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';
import keyImage from '../../assets/key.png';

const fadeInVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: "easeOut" } }
};

function Hero() {
  return (
    <motion.div 
      className="hero"
      variants={fadeInVariants}
      initial="hidden"
      animate="visible"
    >
      <h2>EVI$ION</h2>
      <img src={keyImage} alt="Key" />
      <p>사이버보안학과 </p>
      <p>대표 과 해킹 동아리</p>
    </motion.div>
  );
}

export default Hero;