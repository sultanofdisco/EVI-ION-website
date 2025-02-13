import React from 'react';
import './FAQ.css';

function FAQ() {
  return (
    <div className="faq-section" id="faq">
      <h2>자주 묻는 질문</h2>

      <div className="faq-item">
        <h3>Q1. 지원서를 잘못 작성했어요. 수정 가능한가요?</h3>
        <p>이미 제출한 지원서는 수정이 절대 불가합니다. 지원서 수정이 필요할 시 운영진에게 문의하신 후, 지원서를 재작성해 주세요.</p>
      </div>

      <div className="faq-item">
        <h3>Q2. 어떤 기술을 배우게 되나요?</h3>
        <p>
          우리 동아리에서는 CTF 문제 풀이, 웹 해킹, 리버스 엔지니어링, 포렌식 등 다양한 보안 기술을 배울 수 있습니다.<br />
          <strong>Metasploit, Wireshark, IDA</strong> 같은 보안 도구를 활용하며, 실전 경험을 쌓을 수 있도록 가상 환경에서 실습합니다.
        </p>
      </div>

      <div className="faq-item">
        <h3>Q3. 동아리 가입 시 필수로 알아야 할 언어가 있나요?</h3>
        <p>
          필수로 알아야 할 프로그래밍 언어는 없지만, 한 가지 이상의 언어를 어느 정도 다룰 수 있다면 더 쉽게 적응할 수 있습니다.<br />
          높은 수준의 실력을 요구하는 것은 아니며, 동아리 활동을 통해 배우고 성장하려는 열정이 있다면 누구나 지원 가능합니다.
        </p>
      </div>

      <p className="faq-note">* 기타 문의사항이 있다면 기재된 연락처로 연락부탁드립니다.</p>

      <div className="call">
        <h4>연락처</h4>
        <p>인스타그램 @evision_security</p>
        <p>회장 오수진 (010-9064-4550)</p>
        <p>부회장 명승희 (010-2672-8743)</p>
      </div>
    </div>
  );
}

export default FAQ;
