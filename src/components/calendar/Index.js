import { useState } from "react";
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
  ClickTxt,
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

const Index = () => {
  const { isModalOpen, confirmAction, openModal, closeModal } = useModal();

  const handleSchedule = e => {
    // e.preventDefault();
    openModal({
      onConfirm: () => {
        closeModal();
      },
    });
  };

  const [isVisible, setIsVisible] = useState(false);

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
            </ManageItem>
          </BoxStyle>
        </PetManage>
        <CalAddition>
          <PetSelect onClick={ManageVisible}>
            <PiCaretLeftBold />
            <ClickTxt>click!</ClickTxt>
          </PetSelect>
          <BoxStyle className="pet-img"></BoxStyle>
          <BoxStyle className="schedule-add">
            <SubmitButton label="일정 추가" onClick={handleSchedule} />
          </BoxStyle>
        </CalAddition>
      </CalLeft>
      <CalRight>
        <Calendar />
      </CalRight>

      <DetailModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={confirmAction}
        title="일정 추가하기"
        submitButtonLabel="등록하기"
      />
    </CalendarMain>
  );
};

export default Index;
