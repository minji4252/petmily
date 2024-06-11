import styled from "@emotion/styled";
import { colorSystem } from "../color";

export const SimpleModalStyle = styled.div`
  width: 220px;
  min-height: 135px;
  height: 100%;
  border-radius: 20px;
  background-color: ${colorSystem.white};
  border: 3px solid ${colorSystem.signature2};
  padding-top: 10px;
  position: relative;

  .close-btn {
    width: 19px;
  }
`;

export const ModalTitle = styled.span`
  font-size: 0.9rem;
  color: ${colorSystem.g500};
  font-weight: 600;
  margin-left: 10px;
`;

export const ModalLine = styled.div`
  width: 100%;
  border-bottom: 1px solid ${colorSystem.signature2};
  margin-top: 10px;
`;

export const ModalList = styled.div`
  width: 150px;
  margin-bottom: 53px;
  margin-top: 15px;
`;
export const ModalItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 8px;
  margin-left: 10px;

  > input {
    margin-right: 10px;
  }

  > button {
    border-radius: 0;
    background-color: ${colorSystem.white};
    width: 100%;
    max-width: 43px;
    height: 22px;
    font-size: 0.7rem;
    padding: 0;
    position: absolute;
    right: 10px;
    margin-top: 0px;
  }

  p {
    margin-left: 5px;
    font-size: 0.8rem;
    display: flex;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }

  p > span {
    overflow: hidden;
    text-overflow: ellipsis;
    display: inline-block;
    white-space: nowrap;
    max-width: 60px;
    width: 60px;
    /* 임시 */
  }

  p > svg {
    color: ${colorSystem.signature2};
  }

  & Input {
    display: none;
  }

  .radio_label {
    display: flex;
    align-items: center;
    margin-top: 3px;
  }

  .radio_icon::before {
    content: "";
    display: block;
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
`;

export const ModalBtn = styled.div`
  width: 100%;
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 15px;
  > button {
    max-width: 45px;
    width: 100%;
    height: 23px;
    font-size: 0.65rem;
    padding: 0;
  }
`;
