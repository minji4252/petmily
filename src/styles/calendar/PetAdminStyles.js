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

  @media all and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    /* margin-top: 30px; */
  }
`;

export const AdminLeft = styled.div`
  width: 320px;
  height: 600px;
  padding: 35px;
  position: relative;
  border-radius: 32px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 12px 0px;
  background-color: rgb(255, 255, 255);

  padding-top: 5%;

  @media all and (max-width: 768px) {
    height: 495px;
    margin-left: 30px;
    order: 2;
  }
`;

export const AdminTitle = styled.div`
  width: fit-content;
`;

export const AdminText = styled.div`
  font-weight: 600;
  font-size: 1rem;
  color: ${colorSystem.p800};
`;
export const TitleLine = styled.div`
  width: 100%;
  border-bottom: 1px solid ${colorSystem.p800};
  margin-top: 10px;
`;

export const AdminItemStyle = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const AdminItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  margin-top: 30%;

  & Input {
    display: none;
  }

  .radio-label {
    display: flex;
    align-items: left;
    margin-bottom: 20px;
    cursor: pointer;
  }

  .radio-icon::before {
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
  .radio-icon::before {
    border-radius: 50px;
  }

  .radio-label input:checked + .radio-icon::before {
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
  font-size: 0.9rem;
  margin-left: 7px;
  margin-right: 20px;
  font-weight: 600;
  color: ${colorSystem.g800};
`;

export const AdminBtn = styled.div`
  display: flex;
  gap: 20px;
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);

  > button {
    width: 75px;
    height: 31px;
  }
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

  @media all and (max-width: 768px) {
    margin-bottom: 30px;
    order: 1;
  }
`;
