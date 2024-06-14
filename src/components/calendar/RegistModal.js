import axios from "axios";
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
  ImgPreview,
  InputStyle,
  PetImgRegist,
  PetRegistTitle,
  SelectedStyle,
  WrapStyle,
} from "../../styles/calendar/RegistModalStyles";
import { CancelButton, SubmitButton } from "../common/Button";
import AlertModal from "../common/AlertModal"; // AlertModal import 추가

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
  const [userId, setUserId] = useState(1);
  const [petName, setPetName] = useState("");
  const [petCategory, setPetCategory] = useState("");
  const [petIcon, setPetIcon] = useState("");
  const [petBackColor, setPetBackColor] = useState("");

  // 이미지 미리보기를 할 변수
  const [previewImg, setPreviewPreImg] = useState("");
  // 이미지 파일
  const [petImg, setPetImg] = useState(null);
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleFile = e => {
    const tempFile = e.target.files[0];
    const tempUrl = URL.createObjectURL(tempFile);
    setPreviewPreImg(tempUrl);
    setPetImg(tempFile);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!petName) {
      alert("반려동물 이름을 입력하세요");
      return;
    }
    if (!petCategory) {
      alert("반려동물 종류를 입력하세요");
      return;
    }

    const formData = new FormData();

    const userPk = sessionStorage.getItem("userPk");

    const infoData = JSON.stringify({
      userId: userPk,
      petName: petName,
      petCategory: petCategory,
      petIcon: petIcon,
      petBackColor: petBackColor,
    });

    const dto = new Blob([infoData], { type: "application/json" });

    // formData에 데이터 추가
    formData.append("p", dto);
    formData.append("petImage", petImg);

    // 서버에 formData에전송
    postPetImage(formData);
  };

  const postPetImage = async data => {
    try {
      const header = { headers: { "Content-Type": "multipart/form-data" } };
      const response = await axios.post("/api/pet", data, header);
      console.log(response);
      setAlertMessage(response.data.message);
      setIsAlertModalOpen(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAlertClose = () => {
    setIsAlertModalOpen(false);
    window.location.reload();
  };

  return (
    <>
      <WrapStyle className="box-style">
        <PetRegistTitle>반려동물 등록</PetRegistTitle>
        <button className="close-btn" type="button" onClick={onClose}>
          <IoClose />
        </button>
        <form
          onSubmit={e => {
            handleSubmit(e);
          }}
        >
          <label htmlFor="petname">
            <p>반려동물 이름</p>
            <InputStyle
              id="petname"
              type="text"
              placeholder="이름을 입력하세요"
              autoComplete="off"
              value={petName}
              onChange={e => setPetName(e.target.value)}
            />
          </label>
          <label htmlFor="petkind">
            <p>반려동물 종류</p>
            <InputStyle
              id="petkind"
              type="text"
              placeholder="반려동물 종류를 입력하세요"
              autoComplete="off"
              value={petCategory}
              onChange={e => setPetCategory(e.target.value)}
            />
          </label>

          <p>사진 등록</p>
          <PetImgRegist className="box-style">
            {/* <input
            className="uploadname"
            value="첨부파일"
            placeholder="첨부파일"
          /> */}
            {/* <label htmlFor="file">파일찾기</label> */}
            <ImgPreview>
              {previewImg && <img src={previewImg} alt="미리보기 이미지" />}
            </ImgPreview>
            <input
              className="one"
              id="file"
              type="file"
              accept="image/png, image/gif, image/jpeg"
              onChange={e => {
                handleFile(e);
              }}
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
                  onChange={e => setPetIcon(e.target.value)}
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
                  onChange={e => setPetBackColor(e.target.value)}
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
      <AlertModal
        isOpen={isAlertModalOpen}
        onClose={handleAlertClose}
        message={alertMessage}
      />
    </>
  );
};

export default RegistModal;
