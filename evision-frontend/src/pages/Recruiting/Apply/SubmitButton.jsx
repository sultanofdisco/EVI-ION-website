import styled from "styled-components";

const StyledButton = styled.button`

    margin: 0 auto;    
    border: 2px solid #FFFFFF;
    background-color: transparent;
    color: white;
    outline: none;
    border-radius: 43px;
    padding: 1vw 2vw;

    cursor: pointer;
    display : block;
    justify-content: center;
    align-items: center;
    width: clamp(100px, 20vw, 300px); 
    min-height: 40px;

    font-family:'Pretendard';
    letter-spacing: 0.5vw;
    font-size: clamp(18px, 2vw, 24px);
    font-weight: 200;

    &:disabled{
        border: 2px solid rgba(255, 255, 255, 0.2);
        color: rgba(255, 255, 255, 0.2);
    }
        
    &:hover {
        background-color: rgba(255, 255, 255, 0.2); /* 버튼에 호버 효과 */
    }
`;

function SubmitButton({children, ...props}){
    return (
        <StyledButton 
            {...props}
        >{children}</StyledButton>
    );
}

export default SubmitButton