import "./RecruitingHeader.css";
import logo from '../assets/logo.png'
import styled from "styled-components";

const HeaderContainer = styled.div`
    display: flex; /* 가로로 배치 */
    align-items: center; /* 세로 중앙 정렬 */
    justify-content: flex-start; /* 왼쪽 정렬 */
    margin-top: 3%;
    margin-left: 7%;
    margin-bottom: 20%;
`

const ImageWrap = styled.div`
    position: absolute;
    text-align: center;
    top: 3%;
    left: 7%;
    transform: rotate(-41.51deg);
    width: 5%;
    height: auto;
`;

const RecruitButton = styled.button`
    position: absolute;
    box-sizing: border-box;
    top: 3%;
    right: 7%;

    border: 2px solid #FFFFFF;
    background-color: transparent;
    color: white;
    outline: none;
    border-radius: 43px;
    padding: 1vw 2vw;
    font-size: clamp(14px, 1.5vw, 20px);
    cursor: pointer;

    display: inline-flex;
    justify-content: center;
    align-items: center;
    min-width: 120px; 
    min-height: 40px;

        
    &:hover {
        background-color: rgba(255, 255, 255, 0.2); /* 버튼에 호버 효과 */
    }
`


const RecruitingHeader = () => {
return(
    
    <HeaderContainer>
        <ImageWrap>
            <img src={logo} alt="Logo" />
        </ImageWrap>
        <RecruitButton>
            <span >Recruiting</span>
        </RecruitButton>
    </HeaderContainer>
)
}

export default RecruitingHeader