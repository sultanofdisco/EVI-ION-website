import './ApplyForm.css';
import { useState } from "react";
import axios from "axios";
import CautionCheckbox from './CautionCheckbox';
import SubmitButton from './SubmitButton';
import { useForm } from 'react-hook-form';
import ApplyHeader from "./ApplyHeader";

const ApplyForm = () => {
    const [caution, setCaution] = useState(false);
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors, isValid }
    } = useForm({
        mode: "onChange" // 입력값이 변경될 때마다 유효성 검사
    });

    const onSubmit = async (data) => {
        if (!caution) {
            alert("제출 전 주의사항을 체크해주세요.");
            return;
        }

        setLoading(true);

        try {
            const response = await axios.post('http://54.180.97.182:3001/apply', {
                student_number: data.studentID,
                name: data.name,
                phone_number: data.phoneNumber,
                email: data.email,
                A1: data.ans1,
                A2: data.ans2
            });

            alert(response.data.message);
            reset(); // 성공 시 폼 초기화
            setCaution(false); // 체크박스도 초기화
        } catch (error) {
            console.error("지원서 제출 실패:", error);
            alert(error.response?.data?.message || "지원서 제출에 실패했습니다.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <form className="Form" onSubmit={handleSubmit(onSubmit)}>
                <h1>지원서 작성</h1>

                {/* 이름 입력 */}
                <h3>성명</h3>
                <section className="inputField">
                    <input
                        {...register("name", {
                            required: "이름을 입력해 주세요.",
                            pattern: {
                                value: /^[A-Za-z가-힣\s]+$/,
                                message: "이름은 영어, 한글, 띄어쓰기만 입력 가능합니다."
                            }
                        })}
                        placeholder="이름을 입력해주세요."
                        disabled={loading}
                    />
                    {errors.name && <p className="error-message">{errors.name.message}</p>}
                </section>

                {/* 학번 입력 */}
                <h3>학번</h3>
                <section className="inputField">
                    <input
                        {...register("studentID", {
                            required: "학번을 입력해 주세요.",
                            pattern: { value: /^[0-9]{7}$/, message: "학번 7자리를 입력해 주세요." }
                        })}
                        placeholder="학번 7자리 입력"
                        disabled={loading}
                    />
                    {errors.studentID && <p className="error-message">{errors.studentID.message}</p>}
                </section>

                {/* 전화번호 입력 */}
                <h3>전화번호</h3>
                <section className="inputField">
                    <input
                        {...register("phoneNumber", {
                            required: "전화번호를 입력해 주세요.",
                            pattern: { value: /^[0-9]{11}$/, message: "전화번호 11자리를 입력해 주세요." }
                        })}
                        placeholder="휴대폰 번호 입력"
                        disabled={loading}
                    />
                    {errors.phoneNumber && <p className="error-message">{errors.phoneNumber.message}</p>}
                </section>

                {/* 이메일 입력 */}
                <h3>이메일</h3>
                <section className="inputField">
                    <input
                        {...register("email", {
                            required: "이메일을 입력해 주세요.",
                            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "유효한 이메일 주소를 입력해 주세요." }
                        })}
                        placeholder="이메일 입력"
                        disabled={loading}
                    />
                    {errors.email && <p className="error-message">{errors.email.message}</p>}
                </section>

                {/* 자기소개 입력 */}
                <h3>자기소개 및 지원동기를 입력해주세요. (500자 이상)</h3>
                <section className="inputField">
                    <textarea
                        {...register("ans1", {
                            required: "자기소개를 입력해 주세요.",
                            minLength: {message: "최소 500자 이상 입력해 주세요." }
                        })}
                        placeholder="500자 이상 작성해주세요"
                        disabled={loading}
                    />
                    {errors.ans1 && <p className="error-message">{errors.ans1.message}</p>}
                </section>

                {/* 보안 경험 입력 */}
                <h3>보안에 관한 경험을 작성해주세요. (300자 이상)</h3>
                <section className="inputField">
                    <textarea
                        {...register("ans2", {
                            required: "보안 경험을 입력해 주세요.",
                            minLength: { message: "최소 300자 이상 입력해 주세요." }
                        })}
                        placeholder="300자 이상 작성해주세요"
                        disabled={loading}
                    />
                    {errors.ans2 && <p className="error-message">{errors.ans2.message}</p>}
                </section>

                {/* 체크박스 */}
                <section className='agreement'>
                    <CautionCheckbox checked={caution} onChange={setCaution} disabled={loading}>
                        제출 시 내용 수정이 불가능 합니다. 작성한 내용을 다시 한 번 확인해주세요.
                    </CautionCheckbox>
                </section>

                {/* 제출 버튼 - 모든 조건 충족 시에만 활성화 */}
                <section className='submit'>
                    <footer>
                        <SubmitButton 
                            type="submit" 
                            disabled={!caution || !isValid || loading}
                        >
                            {loading ? '제출 중...' : '제출하기'}
                        </SubmitButton>
                    </footer>
                </section>
            </form>
        </>
    );
};

export default ApplyForm;
