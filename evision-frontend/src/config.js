const API_URL = window.location.hostname === "localhost"
  ? "http://localhost:3001"   // ✅ 로컬에서 실행할 때는 localhost 사용
  : "http://54.180.97.182:3001"; // ✅ 배포된 환경에서는 외부 서버 사용

export { API_URL };
export default API_URL;
