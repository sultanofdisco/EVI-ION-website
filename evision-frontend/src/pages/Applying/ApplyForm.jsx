import './ApplyForm.css';
import { useState } from "react";
import axios from "axios";
import CautionCheckbox from './CautionCheckbox';
import SubmitButton from './SubmitButton';
import { useForm } from 'react-hook-form';
import ApplyHeader from "./ApplyHeader";

const ApplyForm = () => {
    // 체크박스 상태 (주의사항 확인)
    const [caution, setCaution] = useState(false);
    const [loading, setLoading] = useState(false); // 제출 중 상태

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting }
    } = useForm();

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
                    />
                    {errors.name && <p className="error-message">{errors.name.message}</p>}
                </section>

                <h3>학번</h3>
                <section className="inputField">
                    <input
                        {...register("studentID", { 
                            required: "학번을 입력해 주세요.", 
                            pattern: { value: /^[0-9]{7}$/, message: "학번 7자리를 입력해 주세요." }
                        })}
                        placeholder="학번 7자리 입력"
                    />
                    {errors.studentID && <p className="error-message">{errors.studentID.message}</p>}
                </section>

                <h3>전화번호</h3>
                <section className="inputField">
                    <input
                        {...register("phoneNumber", { 
                            required: "전화번호를 입력해 주세요.",
                            pattern: { value: /^[0-9]{11}$/, message: "전화번호 11자리를 입력해 주세요." }
                        })}
                        placeholder="휴대폰 번호 입력"
                    />
                    {errors.phoneNumber && <p className="error-message">{errors.phoneNumber.message}</p>}
                </section>

                <h3>이메일</h3>
                <section className="inputField">
                    <input
                        {...register("email", { 
                            required: "이메일을 입력해 주세요.", 
                            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "유효한 이메일 주소를 입력해 주세요." }
                        })}
                        placeholder="이메일 입력"
                    />
                    {errors.email && <p className="error-message">{errors.email.message}</p>}
                </section>

                <h3>자기소개 및 지원동기를 입력해주세요. (500자 이상)</h3>
                <section className="inputField">
                    <textarea
                        {...register("ans1", { 
                            required: "자기소개를 입력해 주세요.",
                        })}
                        placeholder="500자 이상 작성해주세요"
                    />
                    {errors.ans1 && <p className="error-message">{errors.ans1.message}</p>}
                </section>

                <h3>보안에 관한 경험을 작성해주세요. (300자 이상)</h3>
                <section className="inputField">
                    <textarea
                        {...register("ans2", { 
                            required: "보안 경험을 입력해 주세요.",
                        })}
                        placeholder="300자 이상 작성해주세요"
                    />
                    {errors.ans2 && <p className="error-message">{errors.ans2.message}</p>}
                </section>

                <section className='agreement'>
                    <CautionCheckbox checked={caution} onChange={setCaution}>
                        제출 시 내용 수정이 불가능 합니다. 작성한 내용을 다시 한 번 확인해주세요. 
                    </CautionCheckbox>
                </section>

                <section className='submit'>
                    <footer>
                        <SubmitButton type="submit" disabled={!caution || isSubmitting || loading}>
                            {loading ? '제출 중...' : '제출하기'}
                        </SubmitButton>
                    </footer>
                </section>
            </form>
        </>
    );
};

export default ApplyForm;
