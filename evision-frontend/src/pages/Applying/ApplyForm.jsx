import './ApplyForm.css';
import { useState } from "react";
import CautionCheckbox from './CautionCheckbox';
import SubmitButton from './SubmitButton';
import { useForm } from 'react-hook-form';
import ApplyHeader from "./ApplyHeader";

const ApplyForm = () => {
    //초기값 세팅
    const [caution, setCaution] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
      } = useForm();

    const onSubmit = (data) => {
        console.log(data); // 서버로 데이터를 전송하는 로직으로 변경 가능
      };

    return (
        <>
        <ApplyHeader />
        <div className='ApplyHeader'>
        <h1>지원서 작성</h1>
        </div>
        <div className="Form" onSubmit={handleSubmit(onSubmit)}>
            <h3>성명</h3>
                <section className="inputField">
                    <input
                        {...register("name", {
                            required: "이름을 입력해 주세요.",
                            pattern: { 
                                value: /^[A-Za-z가-힣\s]+$/,
                                message: "이름은 영어, 한글, 띄어쓰기만 입력 가능합니다." }
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
                        {...register("ans1", { required: "질문1의 답변을 입력해 주세요." })}
                        placeholder="500자 이상 작성해주세요"
                    />
                {errors.ans1 && <p className="error-message">{errors.ans1.message}</p>}
                </section>

            <h3>보안에 관한 경험을 작성해주세요. (300자 이상)</h3>
                <section className="inputField">
                    <textarea
                        {...register("ans2", { required: "질문2의 답변을 입력해 주세요." })}
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
                    <fotter>
                        <SubmitButton disabled={!caution} onClick={handleSubmit(onSubmit)}>
                            <span>제출하기</span>
                        </SubmitButton>
                    </fotter>
                </section>
            </div>
        </>
    )
}

export default ApplyForm       


// 참고한 링크
// https://velog.io/@dev__note/react-%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85-%ED%8F%BC-%EB%A7%8C%EB%93%A4%EA%B8%B0-%EA%B8%B0%EB%B3%B8-%EA%B5%AC%EC%A1%B0%EC%99%80-%EC%9C%A0%ED%9A%A8%EC%84%B1-%EA%B2%80%EC%82%AC-%EC%84%B8%ED%8C%85