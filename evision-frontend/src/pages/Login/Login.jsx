import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../config";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      alert("이메일과 비밀번호를 입력해주세요.");
      return;
    }

    console.log("로그인 요청 이메일:", email);

    try {
      const response = await axios.post(
        `${API_URL}/login`, 
        { email, password },
        { withCredentials: true }
      );

      console.log("서버 응답 데이터:", response.data);

      if (response.data.role === "admin") {
        login(response.data);
        navigate("/admin");
        alert("관리자 계정으로 로그인되었습니다.");
      } else {
        login(response.data);
        navigate("/");
        alert("로그인 성공!");
      }
    } catch (error) {
      console.error("로그인 실패:", error.response?.data?.message || error.message);
      alert("로그인 실패: 이메일 또는 비밀번호를 확인해주세요.");
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
      />
      <input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>로그인</button>
    </div>
  );
};

export default Login;
