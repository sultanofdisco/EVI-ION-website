import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './Header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogoClick = (e) => {
    e.preventDefault();
    window.location.href = "/";
  };

  return (
    <header className="header">
      <div className="header_logo" onClick={handleLogoClick}>
        <img className="logo" src={logo} alt="EVISION 로고" />
        <span className="logo-text">EVI$ION</span>
      </div>

      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>☰</button>

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
    </header>
  );
}

export default Header;