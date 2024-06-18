import axios from "axios";
import { useEffect, useState } from "react";
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
import AlertModal from "../common/AlertModal";
import { CancelButton, SubmitButton } from "../common/Button";

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

const registerPetData = async data => {
  try {
    const header = { headers: { "Content-Type": "multipart/form-data" } };
    const response = await axios.post("/api/pet", data, header);
    return response.data.message;
  } catch (error) {
    console.log(error);
  }
};

const updatePetData = async data => {
  try {
    const header = { headers: { "Content-Type": "multipart/form-data" } };
    const response = await axios.patch("/api/pet", data, header);
    return response.data.message;
  } catch (error) {
    console.log(error);
  }
};

const RegistModal = ({ isOpen, onClose, isEdit, modifyPetData }) => {
  if (!isOpen) return null;

  const [petName, setPetName] = useState("");
  const [petCategory, setPetCategory] = useState("");
  const [petIcon, setPetIcon] = useState("");
  const [petBackColor, setPetBackColor] = useState("");
  const [previewImg, setPreviewPreImg] = useState("");
  const [petImg, setPetImg] = useState(null);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    if (modifyPetData) {
      setPetName(modifyPetData.petName);
      setPetCategory(modifyPetData.petCategory);
      setPetIcon(modifyPetData.petIcon);
      setPetBackColor(modifyPetData.petBackColor);
      setPreviewPreImg(
        `http://112.222.157.156:5112/pic/pet/${modifyPetData.petId}/${modifyPetData.petImage}`,
      );
      setPetImg(
        `http://112.222.157.156:5112/pic/pet/${modifyPetData.petId}/${modifyPetData.petImage}`,
      );
    }
  }, [modifyPetData]);

  const handleFile = e => {
    const tempFile = e.target.files[0];
    const tempUrl = URL.createObjectURL(tempFile);

    setPreviewPreImg(tempUrl);
    setPetImg(tempFile);
  };

  const handleRegisterSubmit = async e => {
    e.preventDefault();

    if (!petName) {
      setAlertMessage("반려동물 이름을 입력하세요");
      setIsAlertOpen(true);
      return;
    }
    if (!petCategory) {
      setAlertMessage("반려동물 종류를 입력하세요 ");
      setIsAlertOpen(true);
      return;
    }
    if (!petImg) {
      setAlertMessage("이미지를 등록해주세요");
      setIsAlertOpen(true);
      return;
    }
    if (!petIcon) {
      setAlertMessage("아이콘을 선택해주세요");
      setIsAlertOpen(true);
      return;
    }
    if (!petBackColor) {
      setAlertMessage("배경색을 선택해주세요");
      setIsAlertOpen(true);
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

    const dto = new Blob([infoData], {
      type: "application/json",
    });
    formData.append("p", dto);
    formData.append("petImage", petImg);

    try {
      const message = await registerPetData(formData);
      setAlertMessage(message);
      setIsAlertOpen(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateSubmit = async e => {
    e.preventDefault();

    if (!petName) {
      setAlertMessage("반려동물 이름을 입력하세요");
      setIsAlertOpen(true);
      return;
    }
    if (!petCategory) {
      setAlertMessage("반려동물 종류를 입력하세요 ");
      setIsAlertOpen(true);
      return;
    }
    if (!petIcon) {
      setAlertMessage("아이콘을 선택해주세요");
      setIsAlertOpen(true);
      return;
    }
    if (!petBackColor) {
      setAlertMessage("배경색을 선택해주세요");
      setIsAlertOpen(true);
      return;
    }

    const formData = new FormData();

    const editInfoData = JSON.stringify({
      petId: modifyPetData.petId,
      petName: petName,
      petCategory: petCategory,
      petIcon: petIcon,
      petBackColor: petBackColor,
    });

    const dto = new Blob([editInfoData], {
      type: "application/json",
    });
    formData.append("p", dto);
    if (petImg) {
      formData.append("petImage", petImg);
    }

    //임시
    console.log("업데이트 전송 데이터:", {
      petId: modifyPetData.petId,
      petName: petName,
      petCategory: petCategory,
      petIcon: petIcon,
      petBackColor: petBackColor,
      petImage: petImg,
    });

    try {
      await updatePetData(formData);
      setAlertMessage("반려동물 수정이 완료되었습니다");
      setIsAlertOpen(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAlertClose = () => {
    if (alertMessage.includes("완료")) {
      window.location.reload();
    } else {
      setIsAlertOpen(false);
    }
  };

  return (
    <>
      {isOpen && (
        <WrapStyle className="box-style">
          <PetRegistTitle>
            {isEdit ? "반려동물 수정" : "반려동물 등록"}
          </PetRegistTitle>
          <button className="close-btn" type="button" onClick={onClose}>
            <IoClose />
          </button>
          <form onSubmit={isEdit ? handleUpdateSubmit : handleRegisterSubmit}>
            <label htmlFor="petname">
              <p>반려동물 이름</p>
              <InputStyle
                id="petname"
                type="text"
                placeholder="이름을 입력하세요"
                value={petName}
                onChange={e => setPetName(e.target.value)}
                autoComplete="off"
              />
            </label>
            <label htmlFor="petkind">
              <p>반려동물 종류</p>
              <InputStyle
                id="petkind"
                type="text"
                placeholder="종류를 입력하세요"
                value={petCategory}
                onChange={e => setPetCategory(e.target.value)}
                autoComplete="off"
              />
            </label>

            <p>사진 등록</p>
            <PetImgRegist className="box-style">
              <label htmlFor="file">파일첨부</label>
              <ImgPreview>
                {previewImg && <img src={previewImg} alt="미리보기 이미지" />}
              </ImgPreview>
              <input
                className="img-input"
                id="file"
                type="file"
                accept="image/png, image/gif, image/jpeg"
                onChange={handleFile}
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
                    checked={petIcon == icon.id}
                    onChange={() => setPetIcon(icon.id)}
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
                    checked={petBackColor == color.value}
                    onChange={() => setPetBackColor(color.value)}
                  />
                  <img src={color.src} alt={`Color ${color.value}`} />
                </label>
              ))}
            </SelectedStyle>

            <FormBtn>
              <SubmitButton
                type="submit"
                label={isEdit ? "수정하기" : "등록하기"}
              />
              <CancelButton type="button" label="취소하기" onClick={onClose} />
            </FormBtn>
          </form>
        </WrapStyle>
      )}
      <AlertModal
        isOpen={isAlertOpen}
        onClose={handleAlertClose}
        message={alertMessage}
      />
    </>
  );
};

export default RegistModal;
