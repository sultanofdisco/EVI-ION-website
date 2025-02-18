import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import supabase from '../utils/supabaseClient.js';

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("로그인 요청 이메일:", email);

    // 📌 Supabase에서 이메일로 관리자 정보 조회
    const { data: user, error } = await supabase
      .from('admins') // ✅ 'users' → 'admins' 테이블 사용
      .select('id, email, password, role') // 🔥 비밀번호 포함 (bcrypt 비교를 위해 필요)
      .eq('email', email)
      .single();  // ✅ 하나의 계정만 조회

    console.log("Supabase에서 찾은 유저:", user);
    if (error || !user) {
      return res.status(400).json({ message: '이메일 또는 비밀번호가 올바르지 않습니다.' });
    }

    // 🔥 비밀번호 비교 (bcrypt 해싱된 값과 사용자가 입력한 값 비교)
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: '이메일 또는 비밀번호가 올바르지 않습니다.' });
      console.log("Supabase 응답:", user, error);

    }

    // 🔥 JWT 토큰 생성
    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    // 🔥 JWT를 쿠키에 저장
    res.cookie('token', token, { 
      httpOnly: true, 
      secure: process.env.NODE_ENV === 'production', 
      sameSite: 'strict' 
    });

    // ✅ 로그인 성공 응답 (관리자 여부 포함)
    res.status(200).json({ 
      message: '로그인 성공', 
      token, 
      role: user.role,
      isAdmin: user.role === 'admin' // ✅ 관리자 여부 반환
    });

  } catch (error) {
    console.error('로그인 오류:', error);
    res.status(500).json({ message: '서버 오류 발생', error: error.message });

  }
};
