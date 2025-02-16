import React from 'react';
import './Activity.css';
import activity1 from '../../assets/activity1.jpg';
import activity2 from '../../assets/activity2.png';
import activity3 from '../../assets/activity3.jpg';
import activity4 from '../../assets/activity4.png';

function Activity() {
  return (
    <section className="activity-section" id="activity">
      <h2>주요 활동</h2>
      <p>EVI$ION은 다양한 프로젝트와 강의를 통해 역량을 키우고 있습니다.</p> {/* 설명 추가 */}

      <div className="activity-container">
        <div className="activity-box">
          <img src={activity1} alt="Activity 1" />
          <div className="overlay">
            <h3>정규 세션 진행</h3>
            <p>다양한 보안 주제로 강의 및 활동 진행</p>
          </div>
        </div>

        <div className="activity-box">
          <img src={activity4} alt="Activity 2" />
          <div className="overlay">
            <h3>과제 제출 시스템</h3>
            <p>정규 과제 제출 관리 시스템</p>
          </div>
        </div>

        <div className="activity-box">
          <img src={activity3} alt="Activity 3" />
          <div className="overlay">
            <h3>외부 강연</h3>
            <p>외부 초정 강의 및 활동 진행</p>
          </div>
        </div>

        <div className="activity-box">
          <img src={activity2} alt="Activity 4" />
          <div className="overlay">
            <h3>방학 세션 진행</h3>
            <p>방학 기간 중 필수 및 자율 스터디 진행</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Activity;
