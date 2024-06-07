import styled from "@emotion/styled";
import { colorSystem } from "../color.js";
import mypetImage from "../../images/mypet.png";

export const CalendarMain = styled.main`
  width: 100%;
  max-width: 1120px;
  display: flex;
  margin: 170px auto 190px auto;

  @media all and (max-width: 768px) {
    display: block;
  }
`;

export const BoxStyle = styled.div`
  width: 100%;
  height: 210px;
  border-radius: 32px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 12px 0px;
  background-color: rgb(255, 255, 255);
`;

export const CalLeft = styled.div`
  width: 43%;
  display: flex;

  @media all and (max-width: 768px) {
    width: 100%;
  }
`;

export const PetManage = styled.div`
  width: 35%;
  height: 100%;

  .pet-manage {
    height: 100%;
    padding: 24px;
    position: relative;
  }

  @media all and (max-width: 768px) {
    height: 495px;
    margin-left: 30px;
  }
`;

export const ManageItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;

  & Input {
    display: none;
  }

  .radio_label {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }

  .radio_icon::before {
    content: "";
    display: block;
    margin-right: 5px;
    display: inline-block;
    width: 15px;
    height: 15px;
    background-color: transparent;
    border: 1px solid #9da3a5;
    box-sizing: border-box;
    position: relative;
    cursor: pointer;
  }
  .radio_icon::before {
    border-radius: 50px;
  }

  .radio_label input:checked + .radio_icon::before {
    transition: all 0.15s ease;
    background: url(https://intranet.adef.co.kr/asset/images/ic_check.png)
      ${colorSystem.signature2} no-repeat center;
    border: none;
  }

  button {
    background-color: transparent;
    border: 0;
  }

  svg {
    width: 18px;
  }
`;

export const RadioText = styled.div`
  font-size: 15px;
  margin-left: 7px;
  margin-right: 20px;
  font-weight: 600;
  color: ${colorSystem.g800};
`;

export const CalAddition = styled.div`
  width: 65%;
  /* max-width: 250px; */
  margin: 0 30px;

  .pet-img {
    margin-bottom: 25px;
    background: url(${mypetImage}) no-repeat center;
    background-size: cover;
  }

  .schedule-add {
    padding: 24px;
    display: flex;
    align-items: center;
    position: relative;
  }

  button {
    width: 100%;
  }
`;

export const PetSelect = styled.button`
  display: flex;
  background-color: transparent;
  border: none;
  width: fit-content !important;

  > svg {
    width: 35px;
    height: 18px;
    margin-top: 6px;
    cursor: pointer;
    color: #777;
  }
`;

export const PetIcon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 999px;
  background-color: ${colorSystem.primary};
  margin-bottom: 17px;
  cursor: pointer;

  & :hover {
    width: 30px;
    height: 30px;
    border-radius: 999px;
    margin-bottom: 17px;
    cursor: pointer;
    background-color: pink;
  }
`;

export const CalRight = styled.div`
  width: 57%;
  margin-top: 25px;

  @media all and (max-width: 768px) {
    width: 92%;
    margin: 30px 0 0 30px;
  }
`;
