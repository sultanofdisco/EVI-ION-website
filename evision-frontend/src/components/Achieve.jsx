import React from 'react';
import './Achieve.css';

const events = [
  {
    year: '2019',
    details: [
      'K-사이버 시큐리티 챌린지 자동차용 침입 탐지 트랙 - 3위'
    ],
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
      'HSpace 해커팀 법인 기업 외주 프로젝트 진행 (2023.8~)'
    ],
    position: 'right',
    customClass: 'custom-2023'
  },
  {
    year: '2024',
    details: [
      '서울대학교 정보보호 수업 A팀 (2024.02~)',
      '고려대 해킹동아리 리더 활동 (2024.01~)'
    ],
    position: 'left',
    customClass: 'custom-2024'
  }
];

function Achieve() {
  return (
    <div className="achieve-section" id="achieve">
      <h2>성과 및 수상 실적</h2>
      <div className="timeline">
        {events.map((event, index) => (
          <div key={index} className={`event ${event.position} ${event.customClass || ''}`}>
            <div className="year">{event.year}</div>
            <div className="details">
              {event.details.map((detail, idx) => (
                <p key={idx}>{detail}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Achieve;