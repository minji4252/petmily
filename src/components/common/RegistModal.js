import React, { useRef } from "react";
import styled from "@emotion/styled";
import { CancelButton, SubmitButton } from "./Button";
import "../../styles/reset.css";
import "../../styles/global.css";
import "../../styles/font.css";
import { colorSystem } from "../../styles/color.js";
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

// 닫기 버튼
const CloseBtn = styled.svg`
  position: absolute;
  top: 32px;
  right: 37px;
  cursor: pointer;
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
  background-color: fff;
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

  & Input {
    display: none;
  }

  & Input:checked + img {
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

const RegistModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  const petNameRef = useRef();
  const petKindRef = useRef();
  const iconRefs = useRef([]);
  const colorRefs = useRef([]);

  const handleSubmit = event => {
    event.preventDefault();
    const petName = petNameRef.current.value;
    const petKind = petKindRef.current.value;
    const selectedIcon = iconRefs.current.find(icon => icon.checked);
    const selectedColor = colorRefs.current.find(color => color.checked);

    alert(`반려동물 이름: ${petName}`);
    alert(`반려동물 종류: ${petKind}`);
    if (selectedIcon) {
      alert(`선택된 아이콘: ${selectedIcon.value}`);
    } else {
      alert("아이콘을 선택해주세요.");
    }
    if (selectedColor) {
      alert(`선택된 배경색: ${selectedColor.value}`);
    } else {
      alert("배경색을 선택해주세요.");
    }
  };

  return (
    <WrapStyle className="box-style">
      <CloseBtn
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M19.5459 17.954C19.7572 18.1653 19.876 18.452 19.876 18.7509C19.876 19.0497 19.7572 19.3364 19.5459 19.5477C19.3346 19.7591 19.0479 19.8778 18.749 19.8778C18.4501 19.8778 18.1635 19.7591 17.9521 19.5477L12 13.5937L6.0459 19.5459C5.83455 19.7572 5.54791 19.8759 5.24902 19.8759C4.95014 19.8759 4.66349 19.7572 4.45215 19.5459C4.2408 19.3345 4.12207 19.0479 4.12207 18.749C4.12207 18.4501 4.2408 18.1635 4.45215 17.9521L10.4062 11.9999L4.45402 6.04586C4.24268 5.83451 4.12395 5.54787 4.12395 5.24898C4.12395 4.9501 4.24268 4.66345 4.45402 4.45211C4.66537 4.24076 4.95201 4.12203 5.2509 4.12203C5.54978 4.12203 5.83643 4.24076 6.04777 4.45211L12 10.4062L17.954 4.45117C18.1654 4.23983 18.452 4.12109 18.7509 4.12109C19.0498 4.12109 19.3364 4.23983 19.5478 4.45117C19.7591 4.66251 19.8778 4.94916 19.8778 5.24804C19.8778 5.54693 19.7591 5.83358 19.5478 6.04492L13.5937 11.9999L19.5459 17.954Z"
          fill="#475569"
        />
      </CloseBtn>
      <PetRegistTitle>반려동물 등록</PetRegistTitle>
      <form onSubmit={handleSubmit}>
        <label htmlFor="pet-name">
          <p>반려동물 이름</p>
          <InputStyle
            id="pet-name"
            type="text"
            name="petname"
            placeholder="이름을 입력하세요."
            required
            autoComplete="off"
            ref={petNameRef}
          />
        </label>
        <label htmlFor="pet-kind">
          <p>반려동물 종류</p>
          <InputStyle
            id="pet-kind"
            type="text"
            name="petkind"
            placeholder="반려동물 종류를 입력하세요."
            required
            autoComplete="off"
            ref={petKindRef}
          />
        </label>
        <p>사진 등록</p>
        <PetImgRegist className="box-style">
          <SubmitButton type="button" label="사진 첨부"></SubmitButton>
        </PetImgRegist>
        <p>아이콘 선택</p>
        <SelectedStyle className="box-style">
          <label>
            <input
              type="radio"
              name="icon"
              value="icon-1"
              ref={el => (iconRefs.current[0] = el)}
              required
            />
            <img src={icon1} alt="Icon" />
          </label>
          <label>
            <input
              type="radio"
              name="icon"
              value="icon-2"
              ref={el => (iconRefs.current[1] = el)}
              required
            />
            <img src={icon2} alt="Icon" />
          </label>
          <label>
            <input
              type="radio"
              name="icon"
              value="icon-3"
              ref={el => (iconRefs.current[2] = el)}
              required
            />
            <img src={icon3} alt="Icon" />
          </label>
          <label>
            <input
              type="radio"
              name="icon"
              value="icon-4"
              ref={el => (iconRefs.current[3] = el)}
              required
            />
            <img src={icon4} alt="Icon" />
          </label>
          <label>
            <input
              type="radio"
              name="icon"
              value="icon-5"
              ref={el => (iconRefs.current[4] = el)}
              required
            />
            <img src={icon5} alt="Icon" />
          </label>
          <label>
            <input
              type="radio"
              name="icon"
              value="icon-6"
              ref={el => (iconRefs.current[5] = el)}
              required
            />
            <img src={icon6} alt="Icon" />
          </label>
        </SelectedStyle>
        <p>배경색 선택</p>
        <SelectedStyle className="box-style">
          <label>
            <input
              type="radio"
              name="color"
              value="color-1"
              ref={el => (colorRefs.current[0] = el)}
              required
            />
            <img src={color1} alt="color" />
          </label>
          <label>
            <input
              type="radio"
              name="color"
              value="color-2"
              ref={el => (colorRefs.current[1] = el)}
              required
            />
            <img src={color2} alt="color" />
          </label>
          <label>
            <input
              type="radio"
              name="color"
              value="color-3"
              ref={el => (colorRefs.current[2] = el)}
              required
            />
            <img src={color3} alt="color" />
          </label>
          <label>
            <input
              type="radio"
              name="color"
              value="color-4"
              ref={el => (colorRefs.current[3] = el)}
              required
            />
            <img src={color4} alt="color" />
          </label>
          <label>
            <input
              type="radio"
              name="color"
              value="color-5"
              ref={el => (colorRefs.current[4] = el)}
              required
            />
            <img src={color5} alt="color" />
          </label>
          <label>
            <input
              type="radio"
              name="color"
              value="color-6"
              ref={el => (colorRefs.current[5] = el)}
              required
            />
            <img src={color6} alt="color" />
          </label>
        </SelectedStyle>
        <FormBtn>
          <CancelButton
            type="button"
            label="취소하기"
            onClick={onClose}
          ></CancelButton>
          <SubmitButton
            type="submit"
            label="등록하기"
            onClick={onConfirm}
          ></SubmitButton>
        </FormBtn>
      </form>
    </WrapStyle>
  );
};

export default RegistModal;
