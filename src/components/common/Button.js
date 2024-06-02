import styled from "@emotion/styled";
import { colorSystem } from "../../styles/color";

const CancelButtonStyle = styled.button`
  border: 1px solid ${colorSystem.primary};
  background-color: ${colorSystem.white};
  color: ${colorSystem.primary};
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 30px;

  &:hover {
    border: 1px solid ${colorSystem.p100};
    background-color: ${colorSystem.p100};
    color: ${colorSystem.primary};
  }

  /* &:active {
    border: 1px solid ${colorSystem.primary};
    background-color: ${colorSystem.primary};
    color: ${colorSystem.white};
  } */
`;

const SubmitButtonStyle = styled.button`
  border: 1px solid ${colorSystem.primary};
  background-color: ${colorSystem.primary};
  color: ${colorSystem.white};
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 30px;

  &:hover {
    border: 1px solid ${colorSystem.p100};
    background-color: ${colorSystem.p100};
    color: ${colorSystem.primary};
  }

  /* &:active {
    border: 1px solid ${colorSystem.primary};
    background-color: ${colorSystem.white};
    color: ${colorSystem.primary};
  } */
`;

const CancelButton = ({ label = "버튼", onClick }) => {
  return <CancelButtonStyle onClick={onClick}>{label}</CancelButtonStyle>;
};

const SubmitButton = ({ label = "버튼", onClick }) => {
  return <SubmitButtonStyle onClick={onClick}>{label}</SubmitButtonStyle>;
};

export { CancelButton, SubmitButton };
