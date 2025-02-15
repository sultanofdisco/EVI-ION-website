import jwt from 'jsonwebtoken';

// ✅ 로그인한 사용자 인증 (JWT 검증)
export const authenticateUser = (req, res, next) => {
  try {
    // ✅ 쿠키가 존재하는지 확인
    if (!req.cookies || !req.cookies.token) {
      return res.status(401).json({ message: '인증이 필요합니다. (토큰 없음)' });
    }

    const token = req.cookies.token; // JWT 가져오기
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // 토큰 검증

    req.user = decoded; // ✅ JWT에서 role 정보 포함
    next();
  } catch (error) {
    console.error('JWT 인증 오류:', error);

    if (error.name === 'TokenExpiredError') {
      return res.status(403).json({ message: '토큰이 만료되었습니다. 다시 로그인하세요.' });
    } else if (error.name === 'JsonWebTokenError') {
      return res.status(403).json({ message: '유효하지 않은 토큰입니다.' });
    } else {
      return res.status(403).json({ message: '인증 실패. 다시 로그인하세요.' });
    }
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
