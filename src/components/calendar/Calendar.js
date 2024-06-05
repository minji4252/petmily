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

const Calendar = () => {
  // 모달창
  const { isModalOpen, confirmAction, openModal, closeModal } = useModal();

  const handleRegister = e => {
    e.preventDefault();
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

  // 외부 데이터의 내용을 날짜에 출력하기
  // axios.get("todos") 리턴결과
  const todoApi = [
    {
      pk: 0,
      title: "동물병원",
      text: "내용 1",
      day: "2024-06-04",
    },
    {
      pk: 1,
      title: "유치원",
      text: "내용 2",
      day: "2024-05-31",
    },
    {
      pk: 2,
      title: "산책가기",
      text: "내용 3",
      day: "2024-06-17",
    },
    {
      pk: 3,
      title: "애견호텔",
      text: "내용 4",
      day: "2024-06-04",
    },
  ];
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    setAllData(todoApi);

    return () => {};
  }, []);

  // 내용 출력하기
  const tileContent = ({ date }) => {
    // console.log("내용 : ", date);
    const checkDay = moment(date).format("YYYY-MM-DD");
    // console.log("변환 : ", day);
    // 아래 구문은 api 데이터의 날짜와 현재 체크 날짜를 비교한다.
    const dayResult = allData.find((item, index, arr) => checkDay === item.day);
    console.log(dayResult);

    if (dayResult) {
      return (
        <div>
          <h2 style={{ backgroundColor: "yellow" }}>{dayResult.title}</h2>
        </div>
      );
    }
  };

  //날짜 css 꾸미기
  const tileClassName = ({ date }) => {
    const checkDay = moment(date).format("YYYY-MM-DD");
    const dayResult = allData.find(item => checkDay === item.day);
    if (dayResult) {
      return "sun";
    }
  };

  // 날짜 클릭시 좌표 추출하기
  const onClickDay = (value, event) => {
    const rect = event.target.getBoundingClientRect();
    const x = rect.left;
    const y = rect.top;
    alert(`클릭한 좌표: X = ${x}, Y = ${y}`);
  };

  return (
    <StyledCalendarWrapper>
      <button onClick={handleRegister}>여기누르면 모달나옴</button>
      <ReactCalendar
        calendarType="gregory"
        showNeighboringMonth={false}
        next2Label={null}
        prev2Label={null}
        minDetail="year"
        formatDay={(locale, date) => moment(date).format("D")}
        formatMonthYear={(locale, date) => moment(date).format("M월 YYYY")}
        tileClassName={tileClassName}
        tileContent={tileContent}
        onClickDay={onClickDay}
      ></ReactCalendar>
      <SimpleModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={confirmAction}
      />
    </StyledCalendarWrapper>
  );
};

export default Calendar;
