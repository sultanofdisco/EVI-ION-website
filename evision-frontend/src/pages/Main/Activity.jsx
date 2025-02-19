import React from 'react';
import { motion } from 'framer-motion';
import './Activity.css';
import activity1 from '../../assets/activity1.jpg';
import activity2 from '../../assets/activity2.png';
import activity3 from '../../assets/activity3.jpg';
import activity4 from '../../assets/activity4.png';

// 애니메이션 설정
const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
};

function Activity() {
  return (
    <motion.section 
      className="activity-section" 
      id="activity"
      variants={fadeInVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
    >
      <h2>주요 활동</h2>
      <p>EVI$ION은 다양한 프로젝트와 강의를 통해 역량을 키우고 있습니다.</p>

      <div className="activity-container">
        {[ 
          { img: activity1, title: "정규 세션 진행", desc: "다양한 보안 주제로 강의 및 활동 진행" },
          { img: activity4, title: "과제 제출 시스템", desc: "정규 과제 제출 관리 시스템" },
          { img: activity3, title: "외부 강연", desc: "외부 초정 강의 및 활동 진행" },
          { img: activity2, title: "방학 세션 진행", desc: "방학 기간 중 필수 및 자율 스터디 진행" }
        ].map((activity, index) => (
          <motion.div 
            key={index} 
            className="activity-box"
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
          >
            <img src={activity.img} alt={activity.title} />
            <div className="overlay">
              <h3>{activity.title}</h3>
              <p>{activity.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Activity;
