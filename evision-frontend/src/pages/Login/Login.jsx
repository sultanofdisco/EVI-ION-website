import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  // 미리 저장된 유저 목록 (하드코딩) -> 회원가입 기능이 없어서 일단 이렇게 함
  const storedUsers = [
    { username: "evi", password: "sion", role: "admin" },
    { username: "human", password: "aiai", role: "user" },
    { username: "aiai", password: "human", role: "user" }
  ];

  const handleLogin = () => {
    // 입력한 아이디 & 비번이 storedUsers에 있는지 확인
    const foundUser = storedUsers.find(
      (user) => user.username === username && user.password === password
    );

    if (foundUser) {
      login(foundUser); // 로그인 성공 시 user 정보 저장

      // role에 따라 다른 페이지로 이동
      if (foundUser.role === "admin") {
        navigate("/admin"); // 관리자 계정이면 관리자 페이지로
        alert("관리자 계정으로 로그인되었습니다.");

      } else {
        navigate("/"); // 일반 유저면 메인 페이지로
        alert("로그인 성공!");
      }
    } else {
      alert("로그인 실패! 아이디와 비밀번호를 확인하세요.");
    }
  };

  return (
    <div className="login-container">
      <h1>로그인</h1>
      <input
        type="text"
        placeholder="아이디"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="비밀번호"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>로그인</button>
    </div>
  );
};

export default Login;
