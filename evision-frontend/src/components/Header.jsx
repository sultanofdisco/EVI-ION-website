import React from 'react';
import logo from '../assets/logo.png'; 
import './Header.css';

function Header() {
  return (
    <div className="header">
      <div className="logo-text">
        <a href="#">EVI$ION</a>
      </div>
      <img className="logo" src={logo} alt="EVISION 로고" /> 
      <nav className="nav">
        <ul>
          <li><a href="#" className="recruiting-wrapper"><span className="recruiting-btn">Recruiting</span></a></li>
          <li><a href="#">동아리 소개</a></li>
          <li><a href="#">성과 및 수상실적</a></li>
          <li><a href="#">주요활동</a></li>
          <li><a href="#">자주 묻는 질문</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
