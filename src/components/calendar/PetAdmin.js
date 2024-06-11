import styled from "@emotion/styled";
import { colorSystem } from "../../styles/color";
import useModal from "../../hooks/UseModal";
import { SubmitButton } from "../common/Button";
import RegistModal from "./RegistModal";
import { TfiPlus } from "react-icons/tfi";
import {
  AdminWrapStyle,
  AdminStyle,
  PetAdminStyle,
  AdminItem,
  RadioText,
  AddPetBtn,
} from "../../styles/calendar/PetAdminStyles";

const PetAdmin = () => {
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
    <AdminWrapStyle>
      <div className="inner">
        <AdminStyle>
          <PetAdminStyle>
            <AdminItem>
              <label className="radio_label">
                <input type="radio" name="itemcheck" value="itemcheck" />
                <span className="radio_icon"></span>
                <RadioText>전체</RadioText>
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
          </PetAdminStyle>
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
