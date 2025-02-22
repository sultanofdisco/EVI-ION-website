import { Link } from "react-router-dom";
import "./ApplyHeader.css"; // 스타일 적용
import littlekey from "../../assets/logo.png";


const ApplyHeader = () => {
  return (
    <div className="apply-header-container">
      <Link to="/" className="lk2">
        <img src={littlekey} alt="Little Key Logo" className="apply-logo" />
      </Link>
    </div>
  );
};

export default ApplyHeader;
