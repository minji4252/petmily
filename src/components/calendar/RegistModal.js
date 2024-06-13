import { useState } from "react";
import { IoClose } from "react-icons/io5";
import color1 from "../../images/c-1.png";
import color2 from "../../images/c-2.png";
import color3 from "../../images/c-3.png";
import color4 from "../../images/c-4.png";
import color5 from "../../images/c-5.png";
import color6 from "../../images/c-6.png";
import icon1 from "../../images/icon-1.png";
import icon2 from "../../images/icon-2.png";
import icon3 from "../../images/icon-3.png";
import icon4 from "../../images/icon-4.png";
import icon5 from "../../images/icon-5.png";
import icon6 from "../../images/icon-6.png";
import {
  FormBtn,
  InputStyle,
  PetImgRegist,
  PetRegistTitle,
  SelectedStyle,
  WrapStyle,
} from "../../styles/calendar/RegistModalStyles";
import { CancelButton, SubmitButton } from "../common/Button";
import { registerPet } from "../../api/pet/apipetadmin";

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
  const [image, setImage] = useState(null);
  const [selectedIcon, setSelectedIcon] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  // const handleSubmit = async event => {
  //   event.preventDefault();
  //   const formData = new FormData();
  //   formData.append("user_id", petName);
  //   formData.append("pet_name", petName);
  //   formData.append("pet_category", petKind);
  //   formData.append("pet_icon", selectedIcon);
  //   formData.append("pet_back_color", selectedColor);
  //   if (image) {
  //     formData.append("pet_image", image);
  //   }

  //   try {
  //     await registerPet(formData);
  //     alert("등록 성공");
  //     onConfirm();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleSubmit = async event => {
    // event.preventDefault();
    const formData = new FormData();
    formData.append("user_id", petName); // 사용자 ID는 필요에 따라 추가합니다
    formData.append("pet_name", petName);
    formData.append("pet_category", petKind);
    formData.append("pet_icon", selectedIcon);
    formData.append("pet_back_color", selectedColor);
    if (image) {
      formData.append("pet_image", image);
    }

    // FormData를 일반 객체로 변환하여 쉽게 검사할 수 있도록 합니다
    const data = {};
    formData.forEach((value, key) => {
      if (key === "pet_image") {
        data[key] = value.name; // 파일 이름을 표시합니다
      } else {
        data[key] = value;
      }
    });

    console.log(data);

    try {
      await registerPet(formData);
      alert("등록 성공");
      onConfirm();
    } catch (error) {
      console.log(error);
    }
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
            placeholder="반려동물 종류를 입력하세요"
            required
            autoComplete="off"
            value={petKind}
            onChange={e => setPetKind(e.target.value)}
          />
        </label>
        <p>사진 등록</p>
        <PetImgRegist className="box-style">
          <input
            className="upload-name"
            value="첨부파일"
            placeholder="첨부파일"
          />
          <label htmlFor="file">파일찾기</label>
          <input
            className="one"
            type="file"
            accept="image/*"
            onChange={e => setImage(e.target.files[0])}
            required
            id="file"
          />
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
          <CancelButton type="button" label="취소하기" onClick={onClose} />
          <SubmitButton type="submit" label="등록하기" />
        </FormBtn>
      </form>
    </WrapStyle>
  );
};

export default RegistModal;
