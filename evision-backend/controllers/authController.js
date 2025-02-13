import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

// ✅ 회원가입 함수
export const register = async (req, res) => {
    try {
    const { studentId, password, role } = req.body;

    // 1️⃣ 학번 중복 확인
    const existingUser = await prisma.user.findUnique({
    where: { studentId },
    });

    if (existingUser) {
    return res.status(400).json({ message: '이미 등록된 학번입니다.' });
    }

    // 2️⃣ 비밀번호 해싱
    const hashedPassword = await bcrypt.hash(password, 10);

    // 3️⃣ 새로운 유저 생성
    const user = await prisma.user.create({
    data: {
        studentId,
        password: hashedPassword,
        role: role || 'user',
    },
    });

    res.status(201).json({ message: '회원가입 성공!', user });
    } catch (error) {
    console.error('회원가입 오류:', error);
    res.status(500).json({ message: '서버 오류 발생', error: error.message });
}
};

// ✅ 로그인 함수 (이게 없어서 오류 발생)
export const login = async (req, res) => {
try {
    const { studentId, password } = req.body;

    // 1️⃣ 학번 확인
    const user = await prisma.user.findUnique({ where: { studentId } });
    if (!user) {
        return res.status(400).json({ message: '학번 또는 비밀번호가 올바르지 않습니다.' });
    }

    // 2️⃣ 비밀번호 확인
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ message: '학번 또는 비밀번호가 올바르지 않습니다.' });
    }

    // 3️⃣ JWT 토큰 생성
    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.cookie('token', token, { httpOnly: true });
    res.json({ message: '로그인 성공', token });
    } catch (error) {
    console.error('로그인 오류:', error);
    res.status(500).json({ message: '서버 오류 발생', error: error.message });
    }
};

// ✅ Prisma 연결 해제 (서버 종료 시 실행)
process.on('SIGINT', async () => {
    await prisma.$disconnect();
    process.exit(0);
});
