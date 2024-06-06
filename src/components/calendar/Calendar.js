import styled from "@emotion/styled";
import moment from "moment";
import { useEffect, useState } from "react";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../../styles/calendar.css";
import "../../styles/font.css";
import "../../styles/global.css";
import "../../styles/reset.css";
import SimpleModal from "./SimpleModal";
import useModal from "../../hooks/UseModal";

export const StyledCalendarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;

  .react-calendar {
    border: 0;
    height: 470px;
    padding: 30px;
    width: 100%;
    border-radius: 32px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 12px 0px;
    background-color: rgb(255, 255, 255);
    margin-right: 30px;
  }
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: ${props => props.top || "50%"};
  left: ${props => props.left || "50%"};
  transform: translate(-50%, 0%);
`;

const Calendar = () => {
  const { isModalOpen, confirmAction, openModal, closeModal } = useModal();
  const [modalPosition, setModalPosition] = useState({});
  const [clickDay, setClickDay] = useState("");
  const [clickInfo, setClickInfo] = useState(null);

  // 날짜 클릭시 모달창 띄우기
  const onClickDay = (value, event) => {
    const checkDay = moment(value).format("YYYY-MM-DD");
    setClickDay(checkDay);

    const dayResult = allData.find(item => checkDay === item.day);

    if (dayResult) {
      setClickInfo(dayResult);
    } else {
      setClickInfo(null);
    }

    const target = event.target.closest(".react-calendar__tile");
    if (target) {
      const rect = target.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height + 10;
      setModalPosition({ top: `${y}px`, left: `${x}px` });

      event.preventDefault();
      openModal({
        onConfirm: () => {
          closeModal();
        },
      });
    }
  };

  // 외부 데이터의 내용을 날짜에 출력하기
  // axios.get("todos") 리턴결과
  const todoApi = [
    { pk: 0, title: "동물병원", text: "내용 1", day: "2024-06-04" },
    { pk: 1, title: "유치원", text: "내용 2", day: "2024-05-31" },
    { pk: 2, title: "산책가기", text: "내용 3", day: "2024-06-17" },
    { pk: 3, title: "애견호텔", text: "내용 4", day: "2024-06-04" },
  ];
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    setAllData(todoApi);

    return () => {};
  }, []);

  // 내용 출력하기
  const tileContent = ({ date }) => {
    const checkDay = moment(date).format("YYYY-MM-DD");
    const dayResult = allData.find(item => checkDay === item.day);
    if (dayResult) {
      return (
        <div>
          <h2 style={{ backgroundColor: "#ffd9d9" }}>{dayResult.title}</h2>
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
