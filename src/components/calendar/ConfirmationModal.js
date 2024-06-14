import React from "react";
import { ModalBtn, ModalLine } from "../../styles/calendar/SimpleModalStyles";
import { SubmitButton, CancelButton } from "../common/Button";
import { colorSystem } from "../../styles/color";
import styled from "@emotion/styled";

const ConfirmationModalStyle = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid ${colorSystem.signature2};
  width: 250px;
  height: 120px;
  font-size: 0.9rem;
  background: ${colorSystem.white};
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  padding-top: 15px;
  z-index: 1000; // 모달이 가장 위에 표시되도록
  > p {
    margin-top: 20px;
  }
`;

const ConfirmationModal = ({ isOpen, onClose, onConfirm, message }) => {
  if (!isOpen) return null;

  return (
    <>
      <ConfirmationModalStyle>
        <ModalLine />
        <p>{message}</p>
        <ModalBtn>
          <SubmitButton label="예" onClick={onConfirm} />
          <CancelButton label="아니오" onClick={onClose} />
        </ModalBtn>
      </ConfirmationModalStyle>
    </>
  );
};

export default ConfirmationModal;
