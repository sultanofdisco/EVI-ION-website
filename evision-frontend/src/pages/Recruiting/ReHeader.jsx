import { Link } from "react-router-dom";
import "./ReHeader.css"; // 스타일 적용
import littlekey from "../../assets/logo.png";


const ReHeader = () => {
  return (
    <div className="re-header-container">
      <Link to="/" className="lk">
        <img src={littlekey} alt="Little Key Logo" className="re-logo" />
      </Link>
    </div>
  );
};

export default ReHeader;
