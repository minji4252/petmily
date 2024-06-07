import styled from "@emotion/styled";
import { colorSystem } from "../color";

export const SimpleModalStyle = styled.div`
  width: 220px;
  height: 150px;
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

export const ModalList = styled.div``;
export const ModalItem = styled.div`
  display: flex;

  > button {
    border-radius: 0;
    background-color: ${colorSystem.white};
    width: 100%;
    max-width: 60px;
    height: 24px;
    font-size: 0.7rem;
    padding: 0;
    position: absolute;
    right: 10px;
    top: 50px;
  }

  > p {
    margin-top: 18px;
    margin-left: 10px;
    font-size: 0.9rem;
  }
`;
export const ModalBtn = styled.div`
  width: 100%;
  display: flex;
  gap: 3px;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 15px;
  > button {
    max-width: 50px;
    width: 100%;
    height: 23px;
    line-height: 10px;
    font-size: 0.6rem;
    padding: 0;
  }
`;
