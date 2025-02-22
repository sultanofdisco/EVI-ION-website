import { useNavigate } from "react-router-dom";
import "./Body.css";

const Body = () => {
  const navigate = useNavigate(); // 네비게이션 함수

  const handleApplyClick = () => {
    navigate("/apply"); // "/apply" 페이지로 이동
  };

  return (
    <div className="body-container">
      <h1>모집 대상</h1>
      <p>사이버 보안 주 • 복수 전공생 혹은 진입 예정 호크마 <br/> & 보안 관련 경험이 있거나 보안에 대한 지식을 가지신 분</p>

      <h2>모집 과정</h2>
      <p>서류 접수 (2/21-2/26) → 면접 대상자 선정 (2/27) → 면접 (2/28-3/1) <br/>→ 최종 합격자 발표 (3/2) → 전체 OT (3/6)</p>

      <h3>회비</h3>
      <p>총 40,000원 (보증금 30,000 + 동아리 운영비 10,000원)</p>

      <h4>기타 문의</h4>
      <div className="info">
        <p>인스타그램 @evision_security</p>
        <p>회장 오수진 (010-9064-4550)</p>
        <p>부회장 명승희 (010-2672-8743)</p>
      </div>

      <div className="button-container">
        <button className="apply-btn" onClick={handleApplyClick}>
          지원하기
        </button>
      </div>
    </div>
  );
};

export default Body;