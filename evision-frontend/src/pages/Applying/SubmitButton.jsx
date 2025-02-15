import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // API 요청을 위해 axios 사용

const StyledButton = styled.button`
    margin: 0 auto;
    border: 2px solid ${({ disabled }) => (disabled ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0.8)")};
    background: ${({ disabled }) =>
        disabled
            ? "rgba(255, 255, 255, 0.1)"
            : "linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05))"};
    color: ${({ disabled }) => (disabled ? "rgba(255, 255, 255, 0.3)" : "white")};
    outline: none;
    border-radius: 43px;
    padding: 1vw 2vw;
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    display: flex;
    justify-content: center;
    align-items: center;
    width: clamp(100px, 20vw, 250px);
    min-height: 40px;
    white-space: nowrap;

    font-family: "Pretendard", sans-serif;
    letter-spacing: 0.5vw;
    font-size: clamp(14px, 2vw, 18px);
    font-weight: 700;

    box-shadow: ${({ disabled }) => (disabled ? "none" : "0 4px 15px rgba(255, 255, 255, 0.2)")};
    transition: all 0.3s ease-in-out;

    &:hover {
        background: ${({ disabled }) => (disabled ? "rgba(255, 255, 255, 0.1)" : "white")};
        color: ${({ disabled }) => (disabled ? "rgba(255, 255, 255, 0.3)" : "black")};
        transform: ${({ disabled }) => (disabled ? "none" : "scale(1.1)")};
        border-color: ${({ disabled }) => (disabled ? "rgba(255, 255, 255, 0.2)" : "white")};
        box-shadow: ${({ disabled }) => (disabled ? "none" : "0 6px 20px rgba(255, 255, 255, 0.4)")};
    }
`;

function SubmitButton({ children, disabled }) {
    const navigate = useNavigate(); // 페이지 이동을 위한 useNavigate 사용

    const handleSubmit = () => {
        if (disabled) return; // 비활성화 상태에서는 실행 안 됨
        navigate("/"); // 메인 화면으로 이동
    };

    return (
        <StyledButton disabled={disabled} onClick={handleSubmit}>
            {children}
        </StyledButton>
    );
}

export default SubmitButton;
