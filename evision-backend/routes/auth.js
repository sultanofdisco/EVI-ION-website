import express from "express";
import { login } from "../controllers/authController.js";

const router = express.Router();

// ✅ 로그인 요청 (POST /login)
router.post("/login", (req, res, next) => {
  console.log("✅ 로그인 요청 도착:", req.body);
  next();
});

router.post("/login", login);

export default router;
