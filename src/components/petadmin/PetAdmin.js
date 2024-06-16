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
import { useEffect, useRef, useState } from "react";
import ConfirmModal from "../common/ConfirmModal";
import AlertModal from "../common/AlertModal"; // Import the custom AlertModal component

const PetAdmin = () => {
  const { isModalOpen, confirmAction, openModal, closeModal } = useModal();
  const [petData, setPetData] = useState([]);
  const [selectedPetId, setSelectedPetId] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [isAlertModalOpen, setIsAlertOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [modifyPetData, setModifyPetData] = useState(null);
  const registModalRef = useRef(null);

  const handleRegister = () => {
    if (registModalRef.current) {
      registModalRef.current.resetForm(); // 초기화
    }
    openModal({
      onConfirm: () => closeModal(),
    });
  };

  const fetchPetData = async () => {
    try {
      const userPk = sessionStorage.getItem("userPk");
      const response = await axios.get(`/api/pet?user_id=${userPk}`);
      console.log("불러온 데이터:", response.data.data);
      return response.data.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const handleRadioChange = event => {
    setSelectedPetId(event.target.value);
  };

  useEffect(() => {
    const getPetData = async () => {
      const data = await fetchPetData();
      setPetData(data);
    };
    getPetData();
  }, []);

  const handleEdit = () => {
    if (!selectedPetId) {
      setAlertMessage("수정할 반려동물을 선택하세요");
      setIsAlertOpen(true);
      return;
    }

    const selectedPet = petData.find(pet => pet.petId == selectedPetId);
    setModifyPetData(selectedPet);
    setIsEditMode(true);

    openModal({
      onConfirm: () => closeModal(),
      petData: selectedPet,
    });
  };

  const handleDelete = () => {
    if (!selectedPetId) {
      setAlertMessage("삭제할 반려동물을 선택하세요.");
      setIsAlertOpen(true);
    } else {
      setIsDeleteModalOpen(true);
    }
  };

  const confirmDelete = async () => {
    try {
      const response = await axios.delete(`/api/pet?pet_id=${selectedPetId}`);
      if (response.data.code === "SU") {
        setPetData(prevData =>
          prevData.filter(pet => pet.petId !== selectedPetId),
        );
        setAlertMessage(response.data.message);
        setIsAlertOpen(true);
      } else {
        setAlertMessage(response.data.message);
        setIsAlertOpen(true);
      }
    } catch (error) {
      console.log(error);
    }
    closeDeleteModal();
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setSelectedPetId(null);
  };

  const handleCloseAlertModal = () => {
    if (alertMessage.includes("완료")) {
      window.location.reload();
    } else {
      setIsAlertOpen(false);
    }
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
                {petData.map((item, index) => (
                  <label className="radio_label" key={index}>
                    <input
                      type="radio"
                      name="itemcheck"
                      value={item.petId}
                      onChange={handleRadioChange}
                    />
                    <span className="radio_icon"></span>
                    <RadioText>{item.petName}</RadioText>
                  </label>
                ))}
              </AdminItem>
            </AdminItemStyle>
            <AdminBtn>
              <ActionButton label="수정" onClick={handleEdit} />
              <DelectButton label="삭제" onClick={handleDelete} />
            </AdminBtn>
          </AdminLeft>
          <AddPetBtn>
            <SubmitButton label="반려동물 추가하기" onClick={handleRegister} />
            <TfiPlus />
          </AddPetBtn>
        </AdminStyle>
        <RegistModal
          modifyPetData={modifyPetData}
          isEdit={isEditMode}
          isOpen={isModalOpen}
          onClose={closeModal}
          onConfirm={confirmAction}
          ref={registModalRef}
          petData={petData}
        />
        <ConfirmModal
          isOpen={isDeleteModalOpen}
          onClose={closeDeleteModal}
          onConfirm={confirmDelete}
          message="정말 삭제하시겠습니까?"
        />
        <AlertModal
          isOpen={isAlertModalOpen}
          onClose={handleCloseAlertModal}
          message={alertMessage}
        />
      </div>
    </AdminWrapStyle>
  );
};

export default PetAdmin;
