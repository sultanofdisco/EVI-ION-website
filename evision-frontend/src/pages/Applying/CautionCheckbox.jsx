import styled from "styled-components";

const StyledInput = styled.input`
  appearance: none;
  width: clamp(16px, 2vw, 6px);
  height: clamp(16px, 2vw, 6px);
  margin-right: 20px; 
  border: 2px solid white;
  border-radius: 5px;

    &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='black' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: white;
  }

  @media (max-width: 480px) {
    padding: 0px 5px;
  }
`;

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  user-select: none;
  padding : 70px 10px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: clamp(18px, 2vw, 10px);
  line-height: 90%;
  text-align: left;
  letter-spacing: 0.2px;
  line-height: 1.5;

  @media (max-width: 768px) {
    padding: 15px 10px;
    font-size: clamp(12px, 3.5vw, 16px);
  }

  @media (max-width: 480px) {
    padding: 12px 10px;
    font-size: 13px;
    text-align: left;
    line-height: 1.5;
  }
`;

function CautionCheckbox({ children, disabled, checked, onChange }) {
  return (
    <StyledLabel>
      <StyledInput
        type="checkbox"
        disabled={disabled}
        checked={checked}
        onChange={({ target: { checked } }) => onChange(checked)}
      />
      {children}
    </StyledLabel>
  );
}

export default CautionCheckbox