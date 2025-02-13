import styled from "styled-components";

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

function SubmitButton({ children, disabled, ...props }) {
    return (
        <StyledButton disabled={disabled} {...props}>
            {children}
        </StyledButton>
    );
}

export default SubmitButton;
