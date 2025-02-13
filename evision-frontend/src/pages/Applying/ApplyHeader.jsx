import { Link } from "react-router-dom";
import "./ApplyHeader.css"; // 스타일 적용
import littlekey from "../../assets/logo.png";


const ApplyHeader = () => {
  return (
    <div className="apply-header-container">
      <Link to="/" className="lk">
        <img src={littlekey} alt="Little Key Logo" className="apply-logo" />
      </Link>
      <Link to="/" className="main-btn rec">
        메인으로
      </Link>
    </div>
  );
};

export default ApplyHeader;
