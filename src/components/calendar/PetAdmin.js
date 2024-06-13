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
import axios from "axios";
import { useEffect, useState } from "react";
import ConfirmationModal from "./ConfirmationModal";
const PetAdmin = () => {
  const { isModalOpen, confirmAction, openModal, closeModal } = useModal();
  const [petData, setPetData] = useState([]);
  const [selectedPetId, setSelectedPetId] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleRegister = e => {
    openModal({
      onConfirm: () => {
        closeModal();
      },
    });
  };

  // 반려동물 목록을 불러오는 api함수
  const fetchPetData = async () => {
    try {
      const response = await axios.get("/api/pet?user_id=12");
      console.log("불러온데이터:", response.data.data);
      return response.data.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const handleRadioChange = event => {
    setSelectedPetId(event.target.value); // 라디오 버튼으로 선택된 petId를 상태에 저장
  };

  // 반려동물을 삭제하는 api함수
  const handleDelete = async () => {
    try {
      const response = await axios.delete(`/api/pet?pet_id=${selectedPetId}`);
      console.log("Delete response:", response);
      setPetData(petData.filter(pet => pet.id !== selectedPetId));
      closeDeleteModal();
    } catch (error) {
      console.log(error);
    }
  };

  const openDeleteModal = petId => {
    setSelectedPetId(petId);
    setIsDeleteModalOpen(true);
    console.log("아이디정보는", selectedPetId);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setSelectedPetId(null);
    alert("삭제됨");
  };

  useEffect(() => {
    const getPetData = async () => {
      const data = await fetchPetData();
      setPetData(data);
    };
    getPetData();
  }, []);

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
                {petData.map(item => (
                  <label className="radio_label" key={item.id}>
                    <input
                      type="radio"
                      name="itemcheck"
                      value={item.id}
                      onChange={handleRadioChange}
                    />
                    <span className="radio_icon"></span>
                    <RadioText>{item.petName}</RadioText>
                  </label>
                ))}
              </AdminItem>
            </AdminItemStyle>
            <AdminBtn>
              <ActionButton label="수정" />
              <DelectButton
                label="삭제"
                onClick={() => openDeleteModal(selectedPetId)}
              />
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
        <ConfirmationModal
          isOpen={isDeleteModalOpen}
          onClose={closeDeleteModal}
          onConfirm={handleDelete}
          message="정말 삭제하시겠습니까?"
        />
      </div>
    </AdminWrapStyle>
  );
};

export default PetAdmin;
