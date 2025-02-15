import supabase from '../utils/supabaseClient.js';

export const getApplicants = async (req, res) => {
    try {
        // 1️⃣ Supabase에서 지원자 목록 가져오기
        const { data: applicants, error } = await supabase
            .from('applicants')  // ✅ Supabase의 'applicants' 테이블 조회
            .select('id, name, student_number, phone_number, email, A1, A2, createdAt')
            .order('createdAt', { ascending: true });  // **지원서를 먼저 제출한 순서대로 정렬**

        if (error) throw error; // **에러 발생 시 예외 처리**

        // 2️⃣ 성공 응답 반환
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
