import styled from "@emotion/styled";
import React, { useState } from "react";
import { SubmitButton } from "../components/common/Button";
import useModal from "../hooks/UseModal";
import RegistModal from "../components/calendar/RegistModal";

const WrapStyle = styled.div`
  max-width: 600px;
  width: 100%;
  height: 720px;
  padding: 80px 50px 0px 50px;
  border-radius: 13px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 12px 0px;
  background-color: rgb(255, 255, 255);
  margin: 400px auto;
`;

const PetAdminPage = () => {
  const { isModalOpen, confirmAction, openModal, closeModal } = useModal();

  const handleRegister = e => {
    e.preventDefault();
    openModal({
      onConfirm: () => {
        closeModal();
      },
    });
  };

  return (
    <WrapStyle>
      동물 관리 페이지입니다.
      <SubmitButton label="동물 추가하기" onClick={handleRegister} />
      <RegistModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={confirmAction}
      />
    </WrapStyle>
  );
};

export default PetAdminPage;
