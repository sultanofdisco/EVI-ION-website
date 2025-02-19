import jwt from 'jsonwebtoken';

// ✅ 로그인한 사용자 인증 (JWT 검증)
export const authenticateUser = (req, res, next) => {
  try {
  //  if (!req.cookies || !req.cookies.token) {
  //    return res.status(401).json({ message: '인증이 필요합니다. (토큰 없음)' });
  //  }

    const token = req.cookies.token;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.error('JWT 인증 오류:', error);
    return res.status(403).json({ message: '유효하지 않은 토큰입니다. 다시 로그인하세요.' });
  }
};

// ✅ 관리자 권한 확인 (role이 'admin'인지 체크)
export const authorizeAdmin = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ message: '인증되지 않은 사용자입니다.' });
  }

  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: '관리자 권한이 필요합니다.' });
  }

  next();
};
