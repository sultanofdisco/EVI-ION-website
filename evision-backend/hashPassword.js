import bcrypt from 'bcryptjs';

const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

// ✅ 관리자 비밀번호 해싱
const adminPassword = 'noisivenimda';

hashPassword(adminPassword).then((hashed) => {
    console.log('해싱된 비밀번호:', hashed);
});
