import './style/ApplyForm.css';
import { useState } from "react";
import CautionCheckbox from './CautionCheckbox';


const ApplyForm = () => {
    //초기값 세팅
    const [name, setName] = useState("");
    const [studentID, setStudentID] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [ans1, setAns1] = useState("");
    const [ans2, setAns2] = useState("");
    const [ans3, setAns3] = useState("");
    const [caution, setCaution] = useState(false);

    //조건 맞는지 유효성검사
    const [isName, setIsName] = useState(false);
    const [isStudentID, setIsStudentID] = useState(false);
    const [isPhoneNumber, setIsPhoneNumber] = useState(false);
    const [isEmail, setIsEmail] = useState(false);
    const [isAns1, setIsAns1] = useState(false);
    const [isAns2, setIsAns2] = useState(false);
    const [isAns3, setIsAns3] = useState(false);

    const onChangeName = (e) => {
        const currentName = e.target.value;
        setName(currentName);
    };

    const onChangeStudentID = (e) => {
        const currentStudentID = e.target.value;
        setStudentID(currentStudentID);
    };

    const onChangePhoneNumber = (e) => {
        const currentPhoneNumber = e.target.value;
        setPhoneNumber(currentPhoneNumber);
    };

    const onChangeEmail = (e) => {
        const currentEmail = e.target.value;
        setEmail(currentEmail);

    };

    const onChangeAns1 = (e) => {
        const currentAns1 = e.target.value;
        setAns1(currentAns1);
    };

    const onChangeAns2 = (e) => {
        const currentAns2 = e.target.value;
        setAns2(currentAns2);
    };

    const onChangeAns3 = (e) => {
        const currentAns3 = e.target.value;
        setAns3(currentAns3);
    };

    return (
        <>
        <div className='ApplyHeader'>
        <h1>지원서 작성</h1>
        </div>
            <div className="Form">
                <h3>성명</h3>
                <section className="inputField">
                    <input 
                        id="name"
                        name="name"
                        autoComplete="off"
                        value={name}
                        onChange={onChangeName}
                        placeholder="이름을 입력해주세요!"
                    />
                </section> 
        
                <h3>학번</h3>
                <section className="inputField">
                    <input 
                        id="studentID"
                        name="studentID"
                        autoComplete="off"
                        value={studentID}
                        onChange={onChangeStudentID}
                        placeholder="학번을 입력해주세요!"
                    />
                </section> 

                <h3>전화번호</h3>
                <section className="inputField">
                    <input 
                        id="phoneNumber"
                        name="phoneNumber"
                        autoComplete="off"
                        value={phoneNumber}
                        onChange={onChangePhoneNumber}
                        placeholder="신청 결과 전달을 위해 전화번호를 입력해주세요!"
                    />
                </section> 

                <h3>이메일</h3>
                
                <section className="inputField">
                    <input 
                        id="email"
                        name="email"
                        autoComplete="off"
                        value={email}
                        onChange={onChangeEmail}
                        placeholder="학교 메일 주소를 입력해주세요!"
                    />
                </section> 

                <h3>질문1 내용입력</h3>
                <section className="inputField">
                    <textarea 
                        id="ans1"
                        name="ans1"
                        value={ans1}
                        autoComplete="off"
                        onChange={onChangeAns1}
                        placeholder="질문 1 내용은... "
                    />
                </section> 

                <h3>질문2 내용입력</h3>
                <section className="inputField">
                    <textarea 
                        id="ans2"
                        name="ans2"
                        value={ans2}
                        autoComplete="off"
                        onChange={onChangeAns2}
                        placeholder="질문 2 내용은..."
                    />
                </section> 

                <h3>질문3 내용입력</h3>
                <section className="inputField">
                    <textarea 
                        id="ans3"
                        name="ans3"
                        value={ans3}
                        autoComplete="off"
                        onChange={onChangeAns3}
                        placeholder="질문 3 내용은..."
                    />
                </section> 

                <section className='agreement'>
                    <CautionCheckbox checked={caution} onChange={setCaution}>
                    제출 시 내용 수정이 불가능 합니다. 작성한 내용을 다시 한 번 확인해주세요. 
                    </CautionCheckbox>
                </section>

                <section className='submit'>
                    <fotter>
                        <button disabled={!caution}>Submit</button>
                    </fotter>
                </section>
            </div>
        </>
    )
}

export default ApplyForm       

// 참고한 링크
// https://velog.io/@dev__note/react-%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85-%ED%8F%BC-%EB%A7%8C%EB%93%A4%EA%B8%B0-%EA%B8%B0%EB%B3%B8-%EA%B5%AC%EC%A1%B0%EC%99%80-%EC%9C%A0%ED%9A%A8%EC%84%B1-%EA%B2%80%EC%82%AC-%EC%84%B8%ED%8C%85