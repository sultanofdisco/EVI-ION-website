import supabase from '../utils/supabaseClient.js';

export const getApplicants = async (req, res) => {
    try {
        console.log("📌 지원자 목록 요청 수신");

        const { data: applicants, error } = await supabase
            .from('applicants')
            .select('id, name, student_number, phone_number, email, A1, A2, createdAt')
            .order('createdAt', { ascending: true });

        if (error) {
            console.error("❌ 지원자 목록 조회 실패:", error);
            return res.status(500).json({
                success: false,
                message: "지원자 목록을 불러오는 중 오류가 발생했습니다.",
                error: error.message
            });
        }

        res.status(200).json({
            success: true,
            message: "지원자 목록 조회 성공",
            data: applicants || []
        });
    } catch (error) {
        console.error("🚨 서버 오류:", error);
        res.status(500).json({
            success: false,
            message: "지원자 목록을 불러오는 중 서버 오류가 발생했습니다.",
            error: error.message
        });
    }
};
