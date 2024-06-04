import styled from "@emotion/styled";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../../styles/calendar.css";
import "../../styles/font.css";
import "../../styles/global.css";
import "../../styles/reset.css";

// 달력
const scWrap = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const Calendar = () => {
  return (
    <scWrap>
      <ReactCalendar></ReactCalendar>
    </scWrap>
  );
};

export default Calendar;
