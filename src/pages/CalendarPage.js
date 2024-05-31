import styled from "@emotion/styled";
import React from "react";
import "../styles/global.css";
import "../styles/color.js";
import { colorSystem } from "../styles/color.js";

const CalendarMainStyle = styled.main`
  width: 100%;
  max-width: 970px;
  display: flex;
  margin: 170px auto 190px auto;
`;

const CalLeftStyle = styled.div`
  margin-right: 70px;
`;

const AnimalIconStyle = styled.div`
  width: 33px;
  height: 33px;
  border-radius: 999px;
  background-color: ${colorSystem.primary};
  margin-bottom: 17px;
`;

const CalRightStyle = styled.div`
  > div {
    width: 670px;
    height: 470px;
  }
  margin-top: 25px;
`;

const BoxStyle = styled.div`
  width: 230px;
  height: 210px;
  margin-bottom: 25px;
  border-radius: 32px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 12px 0px;
  background-color: rgb(255, 255, 255);
`;

const CalendarPage = () => {
  return (
    <CalendarMainStyle className="calendar-page">
      <CalLeftStyle className="cal-left">
        <AnimalIconStyle className="animal-icon"></AnimalIconStyle>
        <BoxStyle className="calendar-img br12"></BoxStyle>
        <BoxStyle className="calendar-add br12"></BoxStyle>
      </CalLeftStyle>
      <CalRightStyle className="cal-right">
        <BoxStyle className="calendar br12"></BoxStyle>
      </CalRightStyle>
    </CalendarMainStyle>
  );
};

export default CalendarPage;
