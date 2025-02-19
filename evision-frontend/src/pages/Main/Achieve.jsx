import React from 'react';
import { motion } from 'framer-motion';
import './Achieve.css';

const events = [
  {
    year: '2019',
    details: ['K-사이버 시큐리티 챌린지 자동차용 침입 탐지 트랙 - 3위'],
    position: 'right'
  },
  {
    year: '2020',
    details: [
      '양자암호통신 아이디어 공모전 1등상',
      '제7회 소프트웨어개발경진대회 최우수상(2등)',
      '스틸리언 모의해킹 분야 인턴십 수행',
      '스틸리언 보안인재 멘토링 프로그램 1기 수료',
      '2020 스마트시티 서비스 아이디어 공모전 우수상',
      '보안 솔루션 회사 인턴 - 네트워크 드라이범 개발 업무 수행',
      '블록체인 아이디어 공모전 - 최우수상',
      '2020 하반기 BOSCH Korea 사이버보안사업부 인턴',
      '해피문데이 스타트업 인턴 (2020.01.08~02.26)',
      '고려대 해커톤 - 베스트 서비스상'
    ],
    position: 'left'
  },
  {
    year: '2023',
    details: [
      '드림핵 X-MAS CTF 문제 출제위원 (2023.12)',
      '한국정보보호학회 동계학술대회 CISC-W23 발표 (2023.12)',
      'HSpace 해커팀 법인 기업 외주 프로젝트 진행 (2023.8~)'
    ],
    position: 'right',
    customClass: 'custom-2023'
  },
  {
    year: '2024',
    details: [
      '서울대학교 정보보호 수업 A팀 (2024.02~)',
      '고려대 해킹동아리 리더 활동 (2024.01~)',
      '네이버 클라우드 보안 직무 정규직 최종 합격',
      '고려대학교 컴퓨터시스템보안 연구실 석사 과정(2024.02~)',
      '서울대학교 보안최적화 연구실 인턴(2024.02 ~)',
      'KITRI 화이트햇 스쿨 2기 수료생 2명',
      'KITRI Best Of Best(BOB) 13기 보안컨설팅 트랙 1명',
      'KITRI Best Of Best(BOB) 13기 디지털 포렌식 트랙 1명',
      '딥페이크 가짜뉴스 대응 아이디어 공모전 우수상',
    ],
    position: 'left',
    customClass: 'custom-2024'
  }
];

// 스크롤 애니메이션 설정
const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } }
};

function Achieve() {
  return (
    <motion.div 
      className="achieve-section" 
      id="achieve"
      variants={fadeInVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <h2>성과 및 수상 실적</h2>
      <div className="timeline">
        {events.map((event, index) => (
          <motion.div 
            key={index} 
            className={`event ${event.position} ${event.customClass || ''}`}
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
          >
            <div className="year">{event.year}</div>
            <div className="details">
              {event.details.map((detail, idx) => (
                <p key={idx}>{detail}</p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Achieve;
