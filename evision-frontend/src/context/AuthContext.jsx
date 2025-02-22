import { createContext, useState, useContext } from "react";

// 로그인한 유저 정보를 전역적으로 저장
// 로그인한 사용자의 정보를 유지하고, 필요한 곳에서 사용할 수 있도록 함
// 나중에 어딘가에서 필요하겟...지?

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
