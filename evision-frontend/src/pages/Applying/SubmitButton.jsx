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
    width: clamp(100px, 20vw, 250px); 
    min-height: 40px;
    white-space: nowrap;

    font-family:'Pretendard';
    letter-spacing: 0.5vw;
    font-size: clamp(19px, 2vw, 2px);
    font-weight: 700;

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