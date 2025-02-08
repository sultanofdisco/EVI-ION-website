import React from 'react';
import logo from '../assets/logo.png'; 
import './Header.css';

function Header() {
  const handleLogoClick = (e) => {
    e.preventDefault(); // 기본 동작(페이지 이동) 막기
    window.location.reload(); // 페이지 새로고침
  };

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} alt="EVISION 로고" />
        <a href="#" className="logo-text" onClick={handleLogoClick}>EVI$ION</a>
      </div>
      <nav className="nav">
        <ul>
          <li><a href="#" className="recruiting-wrapper"><span className="recruiting-btn">Recruiting</span></a></li>
          <li><a href="#about">동아리 소개</a></li> 
          <li><a href="#achieve">성과 및 수상실적</a></li>
          <li><a href="#activity">주요활동</a></li>
          <li><a href="#faq">자주 묻는 질문</a></li>
        </ul>
      </nav>
    </div>
  );
}


export default Header;
