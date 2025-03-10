import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Header.css";
import logo from "../../assets/logo.png";
import hamburgerBar from "../../assets/hamburgerBar.png";

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isApplicationPeriod, setApplicationPeriod] = useState(true);

//  useEffect(() => {
//    axios.get('http://54.180.97.182:3001/admin', { key: 1234 }).then((response) => {
//      setApplicationPeriod(response.data.isApplicationPeriod === "true");
//    });
//  }, []);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="nav-bar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img src={logo} alt="Logo" />
          <span className="logo-text">EVI$ION</span>
        </Link>

        <ul className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
          <li>
            <Link to={isApplicationPeriod ? "/recruiting" : "/register/notperiod"} className="nav-btn">
              Recruiting
            </Link>
          </li>
          <li onClick={() => scrollToSection("about")}>동아리 소개</li>
          <li onClick={() => scrollToSection("achieve")}>수상 실적 및 기록</li>
          <li onClick={() => scrollToSection("activity")}>활동 기록</li>
          <li onClick={() => scrollToSection("faq")}>자주 묻는 질문</li>
          <li onClick={() => navigate("/login")}>로그인</li>
        </ul>

        <button className="nav-toggle" onClick={toggleMenu}>
          <img
            src={hamburgerBar}
            alt="Toggle Menu"
          />
        </button>
      </div>
    </nav>
  );
};

export default Header;
