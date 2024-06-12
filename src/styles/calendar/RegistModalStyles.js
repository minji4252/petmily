import styled from "@emotion/styled";
import { colorSystem } from "../color.js";
import "../../styles/common.css";
import "../../styles/reset.css";

// 공통
export const WrapStyle = styled.div`
  max-width: 490px;
  width: 100%;
  height: 720px;
  padding: 80px 100px 0px 100px;
  border-radius: 13px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 12px 0px;
  background-color: rgb(255, 255, 255);

  position: fixed;
  left: 50%;
  transform: translate(-50%, -50%);
  top: 50%;
  z-index: 9999;

  form p {
    font-size: 12px;
    margin-top: 20px;
    margin-bottom: 5px;
  }

  .box-style {
    border-radius: 13px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 12px 0px;
    background-color: rgb(255, 255, 255);
  }
`;

// 제목
export const PetRegistTitle = styled.h1`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 40px;
  color: ${colorSystem.title};
`;

// 반려동물 이름 & 종류
export const InputStyle = styled.input`
  background-color: #fff;
  width: 200px;
  height: 27px;
  border-radius: 50px;
  border: 1px solid #cbd5e1;
  padding: 8px;

  &::placeholder {
    font-size: 10px;
    color: ${colorSystem.placeholder};
  }
`;

// 사진 등록
export const PetImgRegist = styled.div`
  height: 130px;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;

  > label {
    display: inline-block;
    text-align: center;
    color: ${colorSystem.white};
    vertical-align: middle;
    font-size: 0.7rem;
    background-color: ${colorSystem.signature1};
    cursor: pointer;
    height: 30px;
    margin-left: 10px;
    width: 20%;
    border-radius: 50px;
    line-height: 30px;
  }

  .one {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    overflow: hidden;
    border: 0;
  }

  .upload-name {
    display: inline-block;
    height: 30px;
    padding: 0 10px;
    vertical-align: middle;
    border: 1px solid ${colorSystem.signature1};
    width: 50%;
    color: ${colorSystem.g500};
  }
`;

// 아이콘 & 배경색 선택
export const SelectedStyle = styled.div`
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  & img {
    width: 30px;
  }

  & input {
    display: none;
  }

  & input:checked + img {
    border: 2px solid ${colorSystem.signature2};
    border-radius: 50%;
  }
`;

// 버튼
export const FormBtn = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 20px;
  justify-content: center;
`;
