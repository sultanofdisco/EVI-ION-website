import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) {  
    alert("로그인이 필요합니다!");  // 로그인 안 한 사용자에게 경고
    return <Navigate to="/login" replace />;
  }

  if (user.role !== "admin") {  
    alert("관리자만 접근할 수 있습니다.");  // 일반 사용자 접근 차단하고 거르기
    return <Navigate to="/" replace />;  // 홈 페이지로 이동
  }

  return children;
};

export default ProtectedRoute;
