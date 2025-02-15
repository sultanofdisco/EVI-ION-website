import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import supabase from '../utils/supabaseClient.js';

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("로그인 요청 이메일:", email);

    // Supabase에서 이메일로 관리자 정보 조회
    const { data: user, error } = await supabase
      .from('admins')
      .select('id, email, password, role')
      .eq('email', email)
      .single();  // single()을 사용해 하나의 유저만 조회

    console.log("Supabase에서 찾은 유저:", user);
    console.log("Supabase 오류:", error);

    // 사용자가 존재하지 않거나 에러가 발생한 경우
    if (!user || error) {
      return res.status(400).json({ message: '이메일 또는 비밀번호가 올바르지 않습니다.' });
    }

    // 비밀번호 비교 (bcrypt로 해싱된 값과 사용자가 입력한 값 비교)
    const isMatch = await bcrypt.compare(password, user.password);
    console.log("비밀번호 일치 여부:", isMatch);

    if (!isMatch) {
      return res.status(400).json({ message: '이메일 또는 비밀번호가 올바르지 않습니다.' });
    }

    // JWT 토큰 생성
    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // 클라이언트에 JWT 쿠키 설정
    res.cookie('token', token, { httpOnly: true, secure: true, sameSite: 'strict' });

    // 성공 메시지와 함께 로그인 성공 응답
    res.status(200).json({ message: '로그인 성공', token, role: user.role });

  } catch (error) {
    console.error('로그인 오류:', error);
    res.status(500).json({ message: '서버 오류 발생', error: error.message });
  }
};
