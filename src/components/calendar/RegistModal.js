import React, { useState } from "react";
import styled from "@emotion/styled";
import "../../styles/reset.css";
import "../../styles/global.css";
import "../../styles/font.css";
import { colorSystem } from "../../styles/color.js";
import { IoClose } from "react-icons/io5";
import icon1 from "../../images/icon-1.png";
import icon2 from "../../images/icon-2.png";
import icon3 from "../../images/icon-3.png";
import icon4 from "../../images/icon-4.png";
import icon5 from "../../images/icon-5.png";
import icon6 from "../../images/icon-6.png";
import color1 from "../../images/c-1.png";
import color2 from "../../images/c-2.png";
import color3 from "../../images/c-3.png";
import color4 from "../../images/c-4.png";
import color5 from "../../images/c-5.png";
import color6 from "../../images/c-6.png";
import { CancelButton, SubmitButton } from "../common/Button";

// 공통
const WrapStyle = styled.div`
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
const PetRegistTitle = styled.h1`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 40px;
  color: ${colorSystem.title};
`;

// 반려동물 이름 & 종류
const InputStyle = styled.input`
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
const PetImgRegist = styled.div`
  height: 130px;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// 아이콘 & 배경색 선택
const SelectedStyle = styled.div`
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
const FormBtn = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 20px;
  justify-content: center;
`;

const icons = [
  { id: 1, src: icon1 },
  { id: 2, src: icon2 },
  { id: 3, src: icon3 },
  { id: 4, src: icon4 },
  { id: 5, src: icon5 },
  { id: 6, src: icon6 },
];

const colors = [
  { value: "red", src: color1 },
  { value: "orange", src: color2 },
  { value: "green", src: color3 },
  { value: "blue", src: color4 },
  { value: "violet", src: color5 },
  { value: "gray", src: color6 },
];

const RegistModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  const [petName, setPetName] = useState("");
  const [petKind, setPetKind] = useState("");
  const [selectedIcon, setSelectedIcon] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    alert(`정보: ${petName}, ${petKind}, ${selectedIcon}, ${selectedColor}`);
    onConfirm();
  };

  return (
    <WrapStyle className="box-style">
      <PetRegistTitle>반려동물 등록</PetRegistTitle>
      <button className="close-btn" type="button" onClick={onClose}>
        <IoClose />
      </button>
      <form onSubmit={handleSubmit}>
        <label htmlFor="pet-name">
          <p>반려동물 이름</p>
          <InputStyle
            id="pet-name"
            type="text"
            name="petname"
            placeholder="이름을 입력하세요"
            required
            autoComplete="off"
            value={petName}
            onChange={e => setPetName(e.target.value)}
          />
        </label>
        <label htmlFor="pet-kind">
          <p>반려동물 종류</p>
          <InputStyle
            id="pet-kind"
            type="text"
            name="petkind"
            placeholder="반려동물 종류를 입력하세요"
            required
            autoComplete="off"
            value={petKind}
            onChange={e => setPetKind(e.target.value)}
          />
        </label>
        <p>사진 등록</p>
        <PetImgRegist className="box-style">
          <SubmitButton type="button" label="사진 첨부"></SubmitButton>
        </PetImgRegist>
        <p>아이콘 선택</p>
        <SelectedStyle className="box-style">
          {icons.map(icon => (
            <label key={icon.id}>
              <input
                type="radio"
                name="icon"
                value={icon.id}
                onChange={e => setSelectedIcon(e.target.value)}
                required
              />
              <img src={icon.src} alt={`Icon ${icon.id}`} />
            </label>
          ))}
        </SelectedStyle>
        <p>배경색 선택</p>
        <SelectedStyle className="box-style">
          {colors.map(color => (
            <label key={color.value}>
              <input
                type="radio"
                name="color"
                value={color.value}
                onChange={e => setSelectedColor(e.target.value)}
                required
              />
              <img src={color.src} alt={`Color ${color.value}`} />
            </label>
          ))}
        </SelectedStyle>
        <FormBtn>
          <CancelButton
            type="button"
            label="취소하기"
            onClick={onClose}
          ></CancelButton>
          <SubmitButton type="submit" label="등록하기"></SubmitButton>
        </FormBtn>
      </form>
    </WrapStyle>
  );
};

export default RegistModal;
