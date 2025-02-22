import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import supabase from "../utils/supabaseClient.js";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("📨 로그인 요청 이메일:", email);

    const { data: user, error } = await supabase
      .from("admins")
      .select("id, email, password, role")
      .eq("email", email)
      .single();

    if (error || !user) {
      console.warn("⚠ 로그인 실패: 이메일 또는 비밀번호 불일치");
      return res.status(400).json({ success: false, message: "이메일 또는 비밀번호가 올바르지 않습니다." });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.warn("⚠ 로그인 실패: 비밀번호 불일치");
      return res.status(400).json({ success: false, message: "이메일 또는 비밀번호가 올바르지 않습니다." });
    }

    const isAdmin = user.role === "admin";
    console.log(`✅ 로그인 성공 (isAdmin: ${isAdmin})`);

    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    res.status(200).json({
      success: true,
      message: "로그인 성공",
      token,
      role: user.role,
      isAdmin: isAdmin,
    });
  } catch (error) {
    console.error("🚨 로그인 오류:", error);
    res.status(500).json({ success: false, message: "서버 오류 발생", error: error.message });
  }
};

