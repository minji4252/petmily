import styled from "@emotion/styled";
import { colorSystem } from "../../styles/color";
import useModal from "../../hooks/UseModal";
import { ActionButton, DelectButton, SubmitButton } from "../common/Button";
import RegistModal from "./RegistModal";
import { TfiPlus } from "react-icons/tfi";
import {
  AdminWrapStyle,
  AdminStyle,
  AdminLeft,
  AdminTitle,
  TitleLine,
  AdminItem,
  RadioText,
  AddPetBtn,
  AdminText,
  AdminItemStyle,
  AdminBtn,
} from "../../styles/calendar/PetAdminStyles";

const PetAdmin = () => {
  const { isModalOpen, confirmAction, openModal, closeModal } = useModal();

  const handleRegister = e => {
    // e.preventDefault();
    openModal({
      onConfirm: () => {
        closeModal();
      },
    });
  };

  return (
    <AdminWrapStyle>
      <div className="inner">
        <AdminStyle>
          <AdminLeft>
            <AdminTitle>
              <AdminText>내 반려동물 리스트</AdminText>
              <TitleLine />
            </AdminTitle>
            <AdminItemStyle>
              <AdminItem>
                <label className="radio_label">
                  <input type="radio" name="itemcheck" value="itemcheck" />
                  <span className="radio_icon"></span>
                  <RadioText>데이지</RadioText>
                </label>
                <label className="radio_label">
                  <input type="radio" name="itemcheck" value="itemcheck" />
                  <span className="radio_icon"></span>
                  <RadioText>루이</RadioText>
                </label>
                <label className="radio_label">
                  <input type="radio" name="itemcheck" value="itemcheck" />
                  <span className="radio_icon"></span>
                  <RadioText>코코</RadioText>
                </label>
              </AdminItem>
            </AdminItemStyle>
            <AdminBtn>
              <ActionButton label="수정" />
              <DelectButton label="삭제" />
            </AdminBtn>
          </AdminLeft>
          <AddPetBtn>
            <SubmitButton label="반려동물 추가하기" onClick={handleRegister} />
            <TfiPlus />
          </AddPetBtn>
        </AdminStyle>
        <RegistModal
          isOpen={isModalOpen}
          onClose={closeModal}
          onConfirm={confirmAction}
        />
      </div>
    </AdminWrapStyle>
  );
};

export default PetAdmin;
