import styled from "styled-components";

const StyledInput = styled.input`
  appearance: none;
  width: 22px;
  height: 22px;
  border: 2px solid white;
  border-radius: 5px;
  margin-right: 1vw;

    &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='black' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: white;
  }
`;

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  user-select: none;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: clamp(14px, 2vw, 24px);
  line-height: 90%;
  text-align: center;
  letter-spacing: 0.2px;
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