import "dotenv/config"; // ✅ 환경 변수 로드
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// 🔹 기존 `require()` 방식이 아닌 `import` 방식 사용
import applyRoutes from "./routes/apply.js";
import adminRoutes from "./routes/admin.js";
import mainRoutes from "./routes/main.js";
import recruitingRoutes from "./routes/recruiting.js";
import authRoutes from "./routes/auth.js";

const app = express();

// ✅ CORS 설정 (쿠키 포함)
const allowedOrigins = [
  "http://localhost:5173",
  "https://evision-web.com",
  "http://evision-web.com.s3-website.ap-northeast-2.amazonaws.com",
];

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true, // ✅ 쿠키 허용
    allowedHeaders: ["Content-Type", "Authorization", "Accept"],
  })
);

app.options("*", cors()); // Preflight 요청 처리

// ✅ 요청 확인용 미들웨어
app.use((req, res, next) => {
  console.log(`📩 [${req.method}] 요청 수신: ${req.url}`);
  next();
});

// ✅ 미들웨어 설정
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// ✅ 라우트 추가
app.use("/", authRoutes); // ✅ authRoutes가 `/login`을 처리하도록 수정
app.use("/apply", applyRoutes);
app.use("/admin", adminRoutes);
app.use("/recruiting", recruitingRoutes);
app.use("/", mainRoutes);

// ✅ 기본 에러 핸들링 미들웨어
app.use((err, req, res, next) => {
  console.error("🚨 서버 오류:", err.message);
  res.status(500).json({ success: false, message: "서버 오류 발생" });
});

// ✅ 서버 실행
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on: http://localhost:${PORT}/`);
});
