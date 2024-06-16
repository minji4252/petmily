import styled from "@emotion/styled";
import moment from "moment";
import { useEffect, useState } from "react";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../../styles/calendar.css";
import SimpleModal from "./SimpleModal";
import useModal from "../../hooks/UseModal";
import axios from "axios";

export const StyledCalendarWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  position: relative;

  .react-calendar {
    border: 0;
    height: 100%;
    padding: 30px;
    width: 100%;
    border-radius: 32px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 12px 0px;
    background-color: rgb(255, 255, 255);
  }
`;

const ModalWrapper = styled.div`
  position: absolute;
  top: ${props => props.top || "50%"};
  left: ${props => props.left || "50%"};
  transform: translate(-50%, 0%);
`;
const TitleStyle = styled.div`
  width: 117%;
`;
const Title = styled.h2`
  background-color: ${props => props.backgroundColor || "#fff"};
  max-width: 100%;
  padding: 0 5px;
  font-size: 0.7rem;
  width: 100%;
`;

const Calendar = ({ petData }) => {
  const { isModalOpen, confirmAction, openModal, closeModal } = useModal();
  const [modalPosition, setModalPosition] = useState({});
  const [clickDay, setClickDay] = useState("");
  const [findEventDay, setFindEventDay] = useState(null);
  const [allData, setAllData] = useState([]);
  const [dayEvents, setDayEvents] = useState([]);

  const userPk = sessionStorage.getItem("userPk");

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `/api/calendar/user_id?user_id=${userPk}`,
        );
        setAllData(response.data.data);
        // console.log(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const onClickDay = (value, event) => {
    const checkDay = moment(value).format("YYYY-MM-DD");
    const findEvents = allData.filter(
      item => moment(item.startDate).format("YYYY-MM-DD") === checkDay,
    );

    console.log("findEvents[0]", findEvents[0]);
    console.log("findEvents", findEvents);
    console.log("checkDay", checkDay);
    setFindEventDay(findEvents[0]);
    setDayEvents(findEvents);
    setClickDay(checkDay);

    const target = event.target.closest(".react-calendar__tile");
    if (target) {
      const rect = target.getBoundingClientRect();
      const calendarRect = target
        .closest(".react-calendar")
        .getBoundingClientRect();
      const x = rect.left + rect.width / 2 - calendarRect.left;
      const y = rect.top + rect.height - calendarRect.top + 10;
      setModalPosition({ top: `${y}px`, left: `${x}px` });

      openModal({
        onConfirm: closeModal,
      });
    }
  };

  const getBackgroundColor = petId => {
    const pet = petData.find(pet => pet.petId === petId);
    if (pet) {
      switch (pet.petBackColor) {
        case "red":
          return "#FFD9D9";
        case "blue":
          return "#D2F0FF";
        case "green":
          return "#DBFFD2";
        case "violet":
          return "#E4DAFF";
        case "gray":
          return "#EAEAEA";
        case "orange":
          return "#FEE6C9";
        default:
          return "#FFD9D9";
      }
    }
    return "#FFD9D9";
  };

  const tileContent = ({ date }) => {
    const checkDay = moment(date).format("YYYY-MM-DD");
    const dayResult = allData.filter(
      item => moment(item.startDate).format("YYYY-MM-DD") === checkDay,
    );
    if (dayResult.length > 0) {
      return (
        <TitleStyle>
          {dayResult.slice(0, 2).map((item, index) => (
            <Title key={index} backgroundColor={getBackgroundColor(item.petId)}>
              {item.title}
            </Title>
          ))}
          {dayResult.length > 2 && (
            <Title
              style={{
                backgroundColor: "transparent",
                color: "#015DE7",
                textAlign: "right",
                fontSize: "0.6rem",
                paddingRight: "1px",
              }}
            >
              view more
            </Title>
          )}
        </TitleStyle>
      );
    }
  };

  return (
    <StyledCalendarWrapper>
      <ReactCalendar
        calendarType="gregory"
        showNeighboringMonth={false}
        next2Label={null}
        prev2Label={null}
        minDetail="year"
        formatDay={(locale, date) => moment(date).format("D")}
        formatMonthYear={(locale, date) => moment(date).format("M월 YYYY")}
        tileContent={tileContent}
        onClickDay={onClickDay}
      />
      {isModalOpen && (
        <ModalWrapper top={modalPosition.top} left={modalPosition.left}>
          <SimpleModal
            isOpen={isModalOpen}
            onClose={closeModal}
            onConfirm={confirmAction}
            clickDay={clickDay}
            findEventDay={findEventDay}
            petData={petData}
            dayEvents={dayEvents}
          />
        </ModalWrapper>
      )}
    </StyledCalendarWrapper>
  );
};

export default Calendar;
