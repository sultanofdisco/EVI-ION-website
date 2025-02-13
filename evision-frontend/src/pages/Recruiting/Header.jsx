import "./Header.css";
import { Link } from "react-router-dom";
import bigkey from "../../assets/bigkey.png";

const Header = () => {
  return (
    <div className="header-container">

      <div className="ev h1">EVI$ION</div>

      <div className="bk">
        <img src={bigkey} alt="Big Key Logo" className="biglogo" />
      </div>

      <div className="li h2">
        <span style={{ color: "white" }}>사이버보안학과 </span>
        <span style={{ color: "#349e40" }}>유일 과 해킹 동아리 </span>
        <span style={{ color: "white" }}>EVI$ION과</span>
        <br />
        <span style={{ color: "white" }}>함께할 </span>
        <span style={{ color: "#349e40" }}>신입부원</span>
        <span style={{ color: "white" }}>을 기다립니다</span>
        <br />
        <hr />
      </div>
    </div>
  );
};

export default Header;
