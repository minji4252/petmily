import axios from "axios";
import { useEffect, useState } from "react";
import "react-calendar/dist/Calendar.css";
import { IoClose } from "react-icons/io5";
import { PiCaretLeftBold } from "react-icons/pi";
import useModal from "../../hooks/UseModal";
import defaultImage from "../../images/backDefault.png";
import "../../styles/calendar.css";
import {
  BoxStyle,
  CalAddition,
  CalLeft,
  CalRight,
  CalendarMain,
  ManageItem,
  PetManage,
  PetSelect,
  RadioText,
} from "../../styles/calendar/IndexStyles";
import "../../styles/common.css";
import "../../styles/reset.css";
import { SubmitButton } from "../common/Button";
import Calendar from "./Calendar";
import DetailModal from "./DetailModal";

import icon1 from "../../images/icon-1.png";
import icon2 from "../../images/icon-2.png";
import icon3 from "../../images/icon-3.png";
import icon4 from "../../images/icon-4.png";
import icon5 from "../../images/icon-5.png";
import icon6 from "../../images/icon-6.png";

const iconMap = {
  1: icon1,
  2: icon2,
  3: icon3,
  4: icon4,
  5: icon5,
  6: icon6,
};

const Index = () => {
  const { isModalOpen, confirmAction, openModal, closeModal } = useModal();
  const [isVisible, setIsVisible] = useState(true);
  const [petData, setPetData] = useState([]);
  const [selectedPetId, setSelectedPetId] = useState(null);
  const [selectedPetImage, setSelectedPetImage] = useState(defaultImage);
  const [selectedPetIcon, setSelectedPetIcon] = useState("");
  const userPk = sessionStorage.getItem("userPk");

  const fetchPetData = async () => {
    try {
      const response = await axios.get(`/api/pet?user_id=${userPk}`);
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
    setSelectedPetId(petId);
    if (petId === "all") {
      setSelectedPetId(null);
      setSelectedPetImage(defaultImage);
      setSelectedPetIcon("");
    } else {
      const pet = petData.find(p => p.petId === petId);
      if (pet) {
        setSelectedPetImage(`/pic/pet/${pet.petId}/${pet.petImage}`);
        setSelectedPetIcon(pet.petIcon);
      }
    }
  };

  const handleSchedule = () => {
    openModal({
      onConfirm: () => closeModal(),
    });
  };

  const ManageVisible = () => {
    setIsVisible(!isVisible);
  };

  return (
    <CalendarMain>
      <CalLeft>
        <PetManage
          style={{
            display: isVisible ? "block" : "none",
            width: isVisible ? "35%" : "0%",
          }}
        >
          <BoxStyle className="pet-manage">
            <button className="close-btn" type="button" onClick={ManageVisible}>
              <IoClose />
            </button>
            <ManageItem>
              <label className="radio-label">
                <input
                  type="radio"
                  name="itemcheck"
                  value="all"
                  checked={selectedPetId === null}
                  onChange={() => handleRadioChange("all")}
                />
                <span className="radio-icon"></span>
                <RadioText>전체</RadioText>
              </label>
              {petData.map(pet => (
                <label className="radio-label" key={pet.petId}>
                  <input
                    type="radio"
                    name="itemcheck"
                    value={pet.petId}
                    checked={selectedPetId === pet.petId}
                    onChange={() => handleRadioChange(pet.petId)}
                  />
                  <span className="radio-icon"></span>
                  <RadioText>{pet.petName}</RadioText>
                </label>
              ))}
            </ManageItem>
          </BoxStyle>
        </PetManage>
        <CalAddition
          style={{
            width: isVisible ? "65%" : "100%",
            marginLeft: isVisible ? "30px" : "196px",
            transition: "all 0.5s ease",
          }}
        >
          <PetSelect onClick={ManageVisible}>
            <PiCaretLeftBold />
            {selectedPetIcon && (
              <img src={iconMap[selectedPetIcon]} alt="아이콘" />
            )}
          </PetSelect>
          <BoxStyle
            className="pet-img"
            style={{
              background: `url(${selectedPetImage}) no-repeat center`,
            }}
          ></BoxStyle>
          <BoxStyle className="schedule-add">
            <SubmitButton label="일정 추가" onClick={handleSchedule} />
          </BoxStyle>
        </CalAddition>
      </CalLeft>
      <CalRight>
        <Calendar petData={petData} selectedPetId={selectedPetId} />
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
