import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // ✅ 프론트엔드 실행 포트
    proxy: {
      "/api": {
        target: "http://54.180.97.182:3001", // ✅ 백엔드 주소
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""), // ✅ 경로 재작성
      },
    },
  },
});
