import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "./Modal";
import "./admin.css";

const Admin = () => {
  const [applicants, setApplicants] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchApplicants = async () => {
      try {
        const response = await axios.get("http://localhost:3001/admin");
        if (response.data.success) {
          setApplicants(response.data.data);
        }
      } catch (error) {
        console.error("데이터 가져오기 실패:", error.message);
      }
    };

    fetchApplicants();
  }, []);

  return (
    <div className="admin-container">
      <h1 className="admin-title">관리자 페이지</h1>
      <h2 className="admin-subtitle">지원 목록</h2>

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
                  <td
                    className="clickable"
                    onClick={() => {
                      setSelectedAnswer(applicant.A1);
                      setModalOpen(true);
                    }}
                  >
                    {applicant.A1.length > 50 ? `${applicant.A1.substring(0, 50)}...` : applicant.A1}
                  </td>
                  <td
                    className="clickable"
                    onClick={() => {
                      setSelectedAnswer(applicant.A2);
                      setModalOpen(true);
                    }}
                  >
                    {applicant.A2.length > 50 ? `${applicant.A2.substring(0, 50)}...` : applicant.A2}
                  </td>
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

      {/* 모달 팝업 */}
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} content={selectedAnswer} title="전체 보기" />
    </div>
  );
};

export default Admin;
