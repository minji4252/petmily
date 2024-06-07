import styled from "@emotion/styled";
import { colorSystem } from "../../styles/color";

// 공통
const ButtonStyle = styled.button`
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 30px;
  height: 2.7em;
  transition:
    border 0.3s,
    background-color 0.3s,
    color 0.3s;
  border: 1px solid;
  background-color: ${props => props.bg};
  color: ${props => props.color};

  &:hover {
    border: 1px solid ${props => props.hoverBorder};
    background-color: ${props => props.hoverBg};
    color: ${props => props.hoverColor};
  }
`;

const SubmitButtonStyle = styled(ButtonStyle)`
  background-color: ${colorSystem.primary};
  color: ${colorSystem.white};

  &:hover {
    border: 1px solid ${colorSystem.p700};
    background-color: ${colorSystem.p700};
  }
`;

const ActionButtonStyle = styled(ButtonStyle)`
  background-color: ${colorSystem.p100};
  color: ${colorSystem.p700};

  &:hover {
    border: 1px solid #ebc9b7;
    background-color: #ebc9b7;
  }
`;

const CancelButtonStyle = styled(ButtonStyle)`
  background-color: ${colorSystem.white};
  color: ${colorSystem.primary};

  &:hover {
    border: 1px solid ${colorSystem.p100};
    background-color: ${colorSystem.white};
    color: ${colorSystem.p100};
  }
`;

const DelectButtonStyle = styled(ButtonStyle)`
  background-color: ${colorSystem.error};
  color: ${colorSystem.white};

  &:hover {
    border: 1px solid #ca2929;
    background-color: #ca2929;
    color: ${colorSystem.white};
  }
`;

const SubmitButton = ({ label = "버튼", onClick }) => {
  return <SubmitButtonStyle onClick={onClick}>{label}</SubmitButtonStyle>;
};

const ActionButton = ({ label = "버튼", onClick }) => {
  return <ActionButtonStyle onClick={onClick}>{label}</ActionButtonStyle>;
};

const CancelButton = ({ label = "버튼", onClick }) => {
  return <CancelButtonStyle onClick={onClick}>{label}</CancelButtonStyle>;
};

const DelectButton = ({ label = "버튼", onClick }) => {
  return <DelectButtonStyle onClick={onClick}>{label}</DelectButtonStyle>;
};

export { SubmitButton, ActionButton, CancelButton, DelectButton };
