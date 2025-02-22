import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getApplyPage = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "지원서 페이지에 접근할 수 있습니다."
  });
};

export const postApply = async (req, res) => {
  const { student_number, name, phone_number, email, A1, A2 } = req.body;

  try {
      const applicant = await prisma.applicant.create({
          data: { student_number, name, phone_number, email, A1, A2 }
      });
      res.status(201).json({
        success: true,
        message: "지원서 제출 완료!",
        applicant
    });

  } catch (error) {
      console.error('데이터 삽입 실패:', error);
      res.status(500).json({
          success: false,
          message: "지원서 제출 실패. 다시 시도해주세요.",
          error: error.message
      });
  }
}