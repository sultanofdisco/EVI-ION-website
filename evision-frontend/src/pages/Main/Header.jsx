import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './Header.css';

// 홈페이지를 새로 고침
function Header() {

  const [isOpen, setIsOpen] = useState(false);

  const handleLogoClick = (e) => {
    e.preventDefault(); // 기본 동작 막기
    window.location.href = "/"; // 메인 페이지로 이동 + 새로고침
  };

  return (
    <div className="header">
      <div className="header_logo">
        <img className="logo" src={logo} alt="EVISION 로고" />
        <a href="#" className="logo-text" onClick={handleLogoClick}>EVI$ION</a>
      </div>

      
      {/* 햄버거 버튼 */}
      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>☰</button>

      {/* 메뉴 */}
      <nav className={`menu ${isOpen ? "open" : ""}`}>
        <ul>
        <li>
            <Link to="/recruiting" className="recruiting-wrapper">
              <span className="recruiting-btn">Recruiting</span>
            </Link>
          </li>          
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
