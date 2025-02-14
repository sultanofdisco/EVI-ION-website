import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import supabase from '../utils/supabaseClient.js';

// ✅ 회원가입 함수 (Supabase 사용)
export const register = async (req, res) => {
  try {
    const { studentId, password, role } = req.body;

    // 1️⃣ 학번 중복 확인
    const { data: existingUser, error: existingUserError } = await supabase
      .from('users')
      .select('*')
      .eq('studentId', studentId)
      .single();

    if (existingUser) {
      return res.status(400).json({ message: '이미 등록된 학번입니다.' });
    }

    // 2️⃣ 비밀번호 해싱
    const hashedPassword = await bcrypt.hash(password, 10);

    // 3️⃣ 새로운 유저 생성 (Supabase `users` 테이블에 저장)
    const userRole = role === 'admin' ? 'admin' : 'user';  // ✅ 기본값 'user', 관리자는 'admin'
    
    const { data, error: insertError } = await supabase
      .from('users')
      .insert([{ studentId, password: hashedPassword, role: userRole }]);

    if (insertError) {
      throw insertError;
    }

    res.status(201).json({ message: '회원가입 성공!', user: data });
  } catch (error) {
    console.error('회원가입 오류:', error);
    res.status(500).json({ message: '서버 오류 발생', error: error.message });
  }
};

// ✅ 로그인 함수 (관리자와 일반 사용자 구별)
export const login = async (req, res) => {
  try {
    const { studentId, password } = req.body;

    // 1️⃣ 학번 확인
    const { data: user, error } = await supabase
      .from('users')
      .select('*')
      .eq('studentId', studentId)
      .single();

    if (!user) {
      return res.status(400).json({ message: '학번 또는 비밀번호가 올바르지 않습니다.' });
    }

    // 2️⃣ 비밀번호 확인
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: '학번 또는 비밀번호가 올바르지 않습니다.' });
    }

    // 3️⃣ JWT 토큰 생성 (role 포함)
    const tokenPayload = { id: user.id, role: user.role };
    
    const tokenOptions = { expiresIn: '1h' };

    const token = jwt.sign(tokenPayload, process.env.JWT_SECRET, tokenOptions);

    // ✅ 응답에서 role 정보 포함
    res.cookie('token', token, { httpOnly: true });
    res.json({ message: '로그인 성공', token, role: user.role });
  } catch (error) {
    console.error('로그인 오류:', error);
    res.status(500).json({ message: '서버 오류 발생', error: error.message });
  }
};
