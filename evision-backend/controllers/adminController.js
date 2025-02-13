import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getApplicants = async (req, res) => {
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
        res.status(200).json({
          success: true,
          message: "지원자 목록 조회 성공",
          data: applicants
      });
    } catch (error) {
        console.error('지원자 목록 조회 실패:', error);

        res.status(500).json({
          success: false,
          message: "지원자 목록을 불러오는 중 오류가 발생했습니다.",
          error: error.message
        });

    }
};

export default getApplicants;
