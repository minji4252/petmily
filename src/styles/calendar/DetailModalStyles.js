import styled from "@emotion/styled";
import { colorSystem } from "../../styles/color.js";

// 공통
export const DetailWrapStyle = styled.div`
  /* max-width: 600px; */
  width: 600px;
  height: 720px;
  padding: 80px 50px 0px 50px;
  border-radius: 13px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 12px 0px;
  background-color: rgb(255, 255, 255);

  position: fixed;
  left: 50%;
  transform: translate(-50%, -50%);
  top: 50%;
  z-index: 9999;

  form {
    height: 85%;
  }

  form p {
    font-size: 12px;
    margin-top: 20px;
    margin-bottom: 6px;
  }

  .box-style {
    border-radius: 13px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 12px 0px;
    background-color: rgb(255, 255, 255);
  }
`;

// 제목
export const ScheduleTitle = styled.h1`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 40px;
  color: ${colorSystem.title};
`;

// 폼 전체
export const FormItem = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

export const FormLeft = styled.div``;

// 날짜, 시간
export const InputStyle = styled.input`
  background-color: ${colorSystem.white};
  width: 200px;
  height: 32px;
  border-radius: 50px;
  border: 1px solid #cbd5e1;
  padding: 8px;

  &::placeholder {
    font-size: 0.8rem;
    color: ${colorSystem.placeholder};
  }
`;

// 선택박스
export const Label = styled.label`
  > select {
    background-color: ${colorSystem.white};
    width: 200px;
    height: 32px;
    border-radius: 50px;
    border: 1px solid #cbd5e1;
    padding: 8px;
    font-size: 0.8rem;
  }
`;

// 폼 오른쪽
export const FormRight = styled.div``;

// 일정 상세메모
export const PetImgRegist = styled.textarea`
  width: 270px;
  height: 80%;
  border-radius: 7px;
  border: 0px;
  vertical-align: top;
  padding: 15px;
  resize: none;
  margin-top: 5px;

  &::placeholder {
    font-size: 0.8rem;
    color: ${colorSystem.placeholder};
  }
`;

// 버튼
export const FormBtn = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 20px;
  justify-content: center;
`;
