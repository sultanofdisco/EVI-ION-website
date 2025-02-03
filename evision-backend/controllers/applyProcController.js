import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const postApply = async (req, res) => {
    const { student_number, name, phone_number, email, A1, A2 } = req.body;

    try {
        const applicant = await prisma.applicant.create({
            data: { student_number, name, phone_number, email, A1, A2 }
        });
        res.status(201).send(`
            <script>
                alert('지원서 제출 완료');
                window.location.href = '/';
            </script>
        `);
    } catch (error) {
        console.error('데이터 삽입 실패:', error);
        res.status(500).send(`
            <script>
                alert('데이터 삽입에 실패하였습니다. 다시 시도해주세요.');
                window.history.back();
            </script>
        `);
    }
}
