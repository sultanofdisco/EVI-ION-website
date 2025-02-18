import { useState } from "react";
import "./poster.css";  // CSS 파일 import


export default function PosterPopup() {
  const [open, setOpen] = useState(true); // 페이지 로드 시 자동으로 팝업 표시

  return (
    <>
      {open && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button className="close-btn" onClick={() => setOpen(false)}>✖</button>
            <img 
              src="/poster.png" // 포스터 이미지 경로
              alt="Poster" 
              className="poster-image" 
            />
          </div>
        </div>
      )}
    </>
  );
}
