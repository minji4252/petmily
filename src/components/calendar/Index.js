import { useEffect, useState } from "react";
import "react-calendar/dist/Calendar.css";
import { IoClose } from "react-icons/io5";
import { PiCaretLeftBold } from "react-icons/pi";
import useModal from "../../hooks/UseModal";
import "../../styles/calendar.css";
import {
  BoxStyle,
  CalAddition,
  CalLeft,
  CalRight,
  CalendarMain,
  ManageItem,
  PetIcon,
  PetManage,
  PetSelect,
  RadioText,
} from "../../styles/calendar/IndexStyles";
import "../../styles/reset.css";
import "../../styles/common.css";
import { SubmitButton } from "../common/Button";
import Calendar from "./Calendar";
import DetailModal from "./DetailModal";
import axios from "axios";

const Index = () => {
  const { isModalOpen, confirmAction, openModal, closeModal } = useModal();
  const [isVisible, setIsVisible] = useState(false);
  const [petData, setPetData] = useState([]);
  const [selectedPetImage, setSelectedPetImage] = useState("");
  const userPk = sessionStorage.getItem("userPk");

  const fetchPetData = async () => {
    try {
      const response = await axios.get(`/api/pet?user_id=${userPk}`);
      console.log("petData불러온 데이터:", response.data.data);
      setPetData(response.data.data);
    } catch (error) {
      console.log(error);
      setPetData([]);
    }
  };

  useEffect(() => {
    fetchPetData();
  }, []);

  const handleRadioChange = petId => {
    const pet = petData.find(p => p.petId === petId);
    if (pet) {
      setSelectedPetImage(`/pic/pet/${pet.petId}/${pet.petImage}`);
    }
  };

  const handleSchedule = () => {
    openModal({
      onConfirm: () => {
        closeModal();
      },
    });
  };

  const ManageVisible = () => {
    setIsVisible(!isVisible);
  };

  return (
    <CalendarMain>
      <CalLeft>
        <PetManage>
          <BoxStyle
            className="pet-manage"
            style={{ display: isVisible ? "block" : "none" }}
          >
            <button className="close-btn" type="button" onClick={ManageVisible}>
              <IoClose />
            </button>
            <ManageItem>
              <label className="radio_label">
                <input
                  type="radio"
                  name="itemcheck"
                  value="all"
                  onChange={() => setSelectedPetImage("")}
                />
                <span className="radio_icon"></span>
                <RadioText>전체</RadioText>
              </label>
              {petData.map(pet => (
                <label className="radio_label" key={pet.petId}>
                  <input
                    type="radio"
                    name="itemcheck"
                    value={pet.petId}
                    onChange={() => handleRadioChange(pet.petId)}
                  />
                  <span className="radio_icon"></span>
                  <RadioText>{pet.petName}</RadioText>
                </label>
              ))}
            </ManageItem>
          </BoxStyle>
        </PetManage>
        <CalAddition>
          <PetSelect onClick={ManageVisible}>
            <PiCaretLeftBold />
            <span>pick !</span>
          </PetSelect>
          <BoxStyle className="pet-img">
            {selectedPetImage && (
              <img src={selectedPetImage} alt="Selected pet" />
            )}
          </BoxStyle>
          <BoxStyle className="schedule-add">
            <SubmitButton label="일정 추가" onClick={handleSchedule} />
          </BoxStyle>
        </CalAddition>
      </CalLeft>
      <CalRight>
        <Calendar petData={petData} />
      </CalRight>
      <DetailModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={confirmAction}
        title="일정 추가하기"
        submitButtonLabel="등록하기"
        petData={petData}
      />
    </CalendarMain>
  );
};

export default Index;
