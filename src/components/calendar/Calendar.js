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
    margin-right: 30px;
  }
`;

const ModalWrapper = styled.div`
  position: absolute;
  top: ${props => props.top || "50%"};
  left: ${props => props.left || "50%"};
  transform: translate(-50%, 0%);
`;

const Title = styled.h2`
  background-color: #ffd9d9;
  /* white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; */
  max-width: 100%;
  padding: 0 5px;
  font-size: 0.7rem;
`;

const Calendar = () => {
  const { isModalOpen, confirmAction, openModal, closeModal } = useModal();
  const [modalPosition, setModalPosition] = useState({});
  const [clickDay, setClickDay] = useState("");
  const [clickInfo, setClickInfo] = useState([]);
  const [allData, setAllData] = useState([]);

  // 달력 전체 데이터를 불러오는 API 함수
  const getData = async () => {
    try {
      const response = await axios.get(`/api/calendar/user_id?user_id=12`);

      setAllData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  // 컴포넌트가 마운트될 때 데이터 불러오기
  useEffect(() => {
    getData();
    return () => {};
  }, []);

  // 날짜 클릭시 모달창 띄우기
  const onClickDay = (value, event) => {
    const checkDay = moment(value).format("YYYY-MM-DD");
    setClickDay(checkDay);

    // 필터링하여 해당 날짜의 일정만 가져오기
    // const dayEvents = allData.filter(item => checkDay === item.startDate); //날짜형식이 안맞아서
    const dayEvents = allData.filter(
      item => moment(item.startDate).format("YYYY-MM-DD") === checkDay,
    );
    setClickInfo(dayEvents);

    const target = event.target.closest(".react-calendar__tile");
    if (target) {
      const rect = target.getBoundingClientRect();
      const calendarRect = target
        .closest(".react-calendar")
        .getBoundingClientRect();
      const x = rect.left + rect.width / 2 - calendarRect.left;
      const y = rect.top + rect.height - calendarRect.top + 10;
      setModalPosition({ top: `${y}px`, left: `${x}px` });

      event.preventDefault();
      openModal({
        onConfirm: () => {
          closeModal();
        },
      });
    }
  };

  // 내용 출력하기
  const tileContent = ({ date }) => {
    const checkDay = moment(date).format("YYYY-MM-DD");
    const dayResult = allData.filter(
      item => moment(item.startDate).format("YYYY-MM-DD") === checkDay,
    );
    if (dayResult.length > 0) {
      return (
        <div>
          {dayResult.slice(0, 2).map(event => (
            <Title key={event.pk} style={{ backgroundColor: "#ffd9d9" }}>
              {event.title}
            </Title>
          ))}
          {dayResult.length > 2 && (
            <Title
              style={{
                backgroundColor: "transparent",
                color: "#015DE7",
                textAlign: "right",
                fontSize: "0.6rem",
                padding: "0",
              }}
            >
              view more
            </Title>
          )}
        </div>
      );
    }
  };

  // 일정 삭제
  // const scheduleDelete = _pk => {
  //   alert(`삭제해요. 스케쥴 번호 ${_pk}`);
  // };

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
      <ModalWrapper top={modalPosition.top} left={modalPosition.left}>
        <SimpleModal
          isOpen={isModalOpen}
          onClose={closeModal}
          onConfirm={confirmAction}
          clickDay={clickDay}
          clickInfo={clickInfo}
        />
      </ModalWrapper>
    </StyledCalendarWrapper>
  );
};

export default Calendar;
