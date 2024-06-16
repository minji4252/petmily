import React from "react";
import { ModalBtn, ModalLine } from "../../styles/calendar/SimpleModalStyles";
import { SubmitButton, CancelButton } from "./Button";
import { colorSystem } from "../../styles/color";
import styled from "@emotion/styled";
import { IoClose } from "react-icons/io5";

export const ConfirmModalStyle = styled.div`
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
  z-index: 99999;
  > p {
    margin-top: 20px;
  }
  .close-btn {
    width: 17px;
    top: 0;
    right: 10px;
  }
`;

const ConfirmModal = ({ isOpen, onClose, onConfirm, message }) => {
  if (!isOpen) return null;

  return (
    <>
      <ConfirmModalStyle>
        <button className="close-btn" type="button" onClick={onClose}>
          <IoClose />
        </button>
        <ModalLine />
        <p>{message}</p>
        <ModalBtn>
          <SubmitButton label="예" onClick={onConfirm} />
          <CancelButton label="아니오" onClick={onClose} />
        </ModalBtn>
      </ConfirmModalStyle>
    </>
  );
};

export default ConfirmModal;
