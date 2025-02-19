import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../config"; // ✅ API URL 가져오기
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  // ✅ 로그인 요청 함수
  const handleLogin = async () => {
    if (!email.trim() || !password.trim()) {
      alert("이메일과 비밀번호를 입력해주세요.");
      return;
    }

    console.log("📨 로그인 요청 이메일:", email);
    console.log("🌍 API 요청 URL:", `${API_URL}/login`);

    try {
      const response = await axios.post(
        `${API_URL}/login`,
        { email, password },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true, // ✅ 인증 유지 (쿠키 포함)
        }
      );

      console.log("✅ 서버 응답 데이터:", response.data);

      if (response.data.success) {
        login(response.data);

        // ✅ isAdmin 값 확인 후 이동
        if (response.data.isAdmin) {
          alert("관리자 계정으로 로그인되었습니다.");
          console.log("🔗 관리자 페이지로 이동: /admin");
          navigate("/admin", { replace: true });
        } else {
          alert("로그인 성공!");
          console.log("🔗 메인 페이지로 이동: /");
          navigate("/", { replace: true });
        }
      } else {
        alert("⚠ 로그인 실패: 서버에서 실패 응답을 보냈습니다.");
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || "서버 응답이 없습니다. 네트워크 상태를 확인하세요.";
      console.error("❌ 로그인 실패:", errorMessage);
      alert(`❌ 로그인 실패: ${errorMessage}`);
    }
  };

  // ✅ Enter 키로 로그인 가능하게 설정
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <input
        type="email"
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onKeyDown={handleKeyDown} // ✅ Enter 키 입력 감지
      />
      <input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        onKeyDown={handleKeyDown} // ✅ Enter 키 입력 감지
      />
      <button className="login-button" onClick={handleLogin}>로그인</button>
    </div>
  );
};

export default Login;
