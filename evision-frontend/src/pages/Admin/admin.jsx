import React, { useEffect, useState } from "react";
import "./admin.css";
import axios from "axios";
import keyImage from "../../assets/logo.png"; // 열쇠 이미지 경로

const Admin = () => {
  const [applicants, setApplicants] = useState([]); // 지원자 목록 상태

  // 백엔드에서 데이터 가져오기
  useEffect(() => {
    const fetchApplicants = async () => {
      try {
        const response = await axios.get("http://localhost:3001/admin");
        if (response.data.success) {
          setApplicants(response.data.data); // Extract data correctly
        } else {
          console.error("데이터 로드 실패:", response.data.message);
        }
      } catch (error) {
        console.error("데이터 가져오기 실패:", error.message);
      }
    };

    fetchApplicants();
  }, []);

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
              <th>ID</th>
              <th>이름</th>
              <th>학번</th>
              <th>전화번호</th>
              <th>이메일</th>
              <th>질문1</th>
              <th>질문2</th>
            </tr>
          </thead>
          <tbody>
            {applicants.length > 0 ? (
              applicants.map((applicant) => (
                <tr key={applicant.id}>
                  <td>{applicant.id}</td>
                  <td>{applicant.name}</td>
                  <td>{applicant.student_number}</td>
                  <td>{applicant.phone_number}</td>
                  <td>{applicant.email}</td>
                  <td>{applicant.A1}</td>
                  <td>{applicant.A2}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="no-data">
                  지원자가 없습니다.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
