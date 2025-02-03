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
                phone_number: true,    // 전화번호 (새로 추가됨)
                email: true,           // 이메일 (새로 추가됨)
                A1: true,              // 지원 동기 1
                A2: true,              // 지원 동기 2
                createdAt: true        // 지원 날짜
            },
            orderBy: { createdAt: 'asc' } // **지원서를 먼저 제출한 순서대로 정렬**
        });

        res.status(200).json(applicants);
    } catch (error) {
        console.error('지원자 목록 조회 실패:', error);

        // 클라이언트에서 alert 창을 띄운 후, 홈(`/`)으로 이동
        res.status(500).send(`
            <script>
                alert('데이터 조회에 실패하였습니다. 다시 시도해주세요.');
                window.location.href = '/main';
            </script>
        `);
    }
};

module.exports = { getApplicants };
