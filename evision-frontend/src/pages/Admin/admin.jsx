import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "./Modal";
import "./admin.css";
import { API_URL } from "../../config"; 

const Admin = () => {
  const [applicants, setApplicants] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchApplicants = async () => {
      try {
        const response = await axios.get(`${API_URL}/admin`, {
          withCredentials: true,
        });

        console.log("✅ 지원자 목록 응답:", response.data);
        if (response.data?.success) {
          setApplicants(response.data.data);
        } else {
          console.warn("⚠ 지원자 리스트 없음:", response.data);
        }
      } catch (error) {
        console.error("❌ 지원자 목록 가져오기 실패:", error.response?.data?.message || error.message);
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
                  <td className="clickable" onClick={() => { setSelectedAnswer(applicant.A1); setModalOpen(true); }}>
                    {applicant.A1 ? `${applicant.A1.substring(0, 50)}...` : "내용 없음"}
                  </td>
                  <td className="clickable" onClick={() => { setSelectedAnswer(applicant.A2); setModalOpen(true); }}>
                    {applicant.A2 ? `${applicant.A2.substring(0, 50)}...` : "내용 없음"}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="no-data">지원자가 없습니다.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} content={selectedAnswer} title="전체 보기" />
    </div>
  );
};

export default Admin;
