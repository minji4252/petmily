import styled from "@emotion/styled";
import { colorSystem } from "../color";

export const AdminWrapStyle = styled.div`
  margin: 200px auto;
`;

export const AdminStyle = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const PetAdminStyle = styled.div`
  width: 270px;
  height: 600px;
  padding: 24px;
  position: relative;
  border-radius: 32px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 12px 0px;
  background-color: rgb(255, 255, 255);

  @media all and (max-width: 768px) {
    height: 495px;
    margin-left: 30px;
  }
`;

export const AdminItem = styled.div`
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

export const AddPetBtn = styled.div`
  width: 200px;
  position: relative;

  > button {
    width: 100%;
    font-size: 0.9rem;
    height: 50px;
    text-align: left;
  }

  > svg {
    width: 18px;
    height: 18px;
    color: ${colorSystem.white};
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10%;
    pointer-events: none;
  }
`;
