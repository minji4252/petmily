import styled from "@emotion/styled";
import { IoClose } from "react-icons/io5";
import { ModalBtn, ModalLine } from "../../styles/calendar/SimpleModalStyles";
import { colorSystem } from "../../styles/color";
import { SubmitButton } from "./Button";

export const AlertModalStyle = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid ${colorSystem.signature2};
  width: 250px;
  height: 120px;
  font-size: 0.8rem;
  color: ${colorSystem.g800};
  background: ${colorSystem.white};
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  padding-top: 15px;
  z-index: 99999; // 모달이 가장 위에 표시되도록
  > p {
    margin-top: 20px;
  }
  .close-btn {
    width: 17px;
    top: 0;
    right: 10px;
  }
`;

export const AlertModal = ({ isOpen, onClose, message }) => {
  if (!isOpen) return null;

  return (
    <>
      <AlertModalStyle>
        <button className="close-btn" type="button" onClick={onClose}>
          <IoClose />
        </button>
        <ModalLine />
        <p>{message}</p>
        <ModalBtn>
          <SubmitButton label="확인" onClick={onClose} />
        </ModalBtn>
      </AlertModalStyle>
    </>
  );
};

export default AlertModal;
