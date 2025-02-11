import React from "react";
import "./admin.css";
import keyImage from "../assets/key.png"; // 열쇠 이미지 경로

const Admin = () => {
  return (
    <div className="admin-container">
      {/* 열쇠 이미지 */}
      <img src={keyImage} alt="Key" className="key-image" />

      {/* 관리자 페이지 제목 */}
      <h1 className="admin-title">관리자 페이지</h1>

      {/* 지원 목록 제목 */}
      <h2 className="admin-subtitle">지원 목록</h2>

      {/* 지원자 목록 테이블 */}
      <div className="table-container">
        <table className="applicants-table">
          <thead>
            <tr>
              {Array.from({ length: 8 }).map((_, index) => (
                <th key={index}></th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 7 }).map((_, rowIndex) => (
              <tr key={rowIndex}>
                {Array.from({ length: 8 }).map((_, colIndex) => (
                  <td key={colIndex}></td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
