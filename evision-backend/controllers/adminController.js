const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// 🔹 지원자 목록 조회 API (GET /admin/applicants) - 오래된 순서대로 정렬
const getApplicants = async (req, res) => {
    try {
        const applicants = await prisma.applicant.findMany({
            select: {
                id: true,              // 지원자 ID
                name: true,            // 이름
                student_number: true,  // 학번
                A1: true,              // 지원 동기 1
                A2: true,              // 지원 동기 2
                createdAt: true        // 지원 날짜
            },
            orderBy: { createdAt: 'asc' } // **지원서를 먼저 제출한 순서대로 정렬**
        });

        res.status(200).json(applicants);
    } catch (error) {
        res.status(500).json({ message: "서버 오류 발생", error: error.message });
    }
};

module.exports = { getApplicants };
