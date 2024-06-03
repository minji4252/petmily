import styled from "@emotion/styled";
import { CancelButton, SubmitButton } from "../components/common/Button";
import mypetImage from "../images/mypet.png";
import "../styles/reset.css";
import "../styles/global.css";
import "../styles/font.css";
import { colorSystem } from "../styles/color.js";
import RegistModal from "../components/common/RegistModal";
import useModal from "../hooks/UseModal";

const CalendarMain = styled.main`
  width: 100%;
  max-width: 1120px;
  display: flex;
  margin: 170px auto 190px auto;

  @media all and (max-width: 768px) {
    display: block;
  }
`;

const CalLeft = styled.div`
  width: 43%;
  display: flex;

  @media all and (max-width: 768px) {
    width: 100%;
  }
`;

const PetManage = styled.div`
  width: 35%;
  height: 100%;

  .pet-manage {
    height: 100%;
    padding: 24px;
    position: relative;
  }

  @media all and (max-width: 768px) {
    height: 495px;
  }
`;

const ManageItem = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

const ItemCheck = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50px;
  border: 1px solid #cbb1a2;
`;

const ItemName = styled.div`
  font-size: 18px;
  margin-left: 7px;
  font-weight: 600;
`;

const CloseIcon = styled.svg`
  position: absolute;
  top: 32px;
  right: 37px;
  cursor: pointer;
`;

const ManageBtn = styled.div`
  position: absolute;
  left: 50%;
  bottom: 24px;
  margin-left: -26px;
  display: flex;
  flex-direction: column;
  gap: 5px;

  > button {
    display: block;
    width: 100%;
  }
`;

const CalAddition = styled.div`
  width: 65%;
  /* max-width: 250px; */
  margin: 0 30px;

  .pet-img {
    margin-bottom: 25px;
    background: url(${mypetImage}) no-repeat center;
    background-size: cover;
  }

  .schedule-add {
    padding: 24px;
    display: flex;
    align-items: center;
  }

  button {
    width: 100%;
  }
`;

const PetIcon = styled.div`
  width: 33px;
  height: 33px;
  border-radius: 999px;
  background-color: ${colorSystem.primary};
  margin-bottom: 17px;
`;

const CalRight = styled.div`
  width: 57%;
  margin-top: 25px;

  .calander {
    height: 470px;
    /* 임시 */
    background-color: pink;
    padding: 30px;
  }

  @media all and (max-width: 768px) {
    width: 92%;
    margin: 30px 0 0 30px;
  }
`;

const BoxStyle = styled.div`
  width: 100%;
  height: 210px;
  border-radius: 32px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 12px 0px;
  background-color: rgb(255, 255, 255);
`;

const CalendarPage = () => {
  const { isModalOpen, confirmAction, openModal, closeModal } = useModal();

  const handleRegister = e => {
    e.preventDefault();
    openModal({
      message: "성공적으로 구매하였습니다.",
      onConfirm: () => {
        closeModal();
      },
    });
  };

  return (
    <CalendarMain>
      <CalLeft>
        <PetManage>
          <BoxStyle className="pet-manage">
            <CloseIcon
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
            </CloseIcon>
            <ManageItem>
              <ItemCheck></ItemCheck>
              <ItemName>루이</ItemName>
            </ManageItem>
            <ManageBtn>
              <SubmitButton label="등록" onClick={handleRegister} />
              <CancelButton label="수정" />
              <SubmitButton label="저장" />
            </ManageBtn>
          </BoxStyle>
        </PetManage>
        <CalAddition>
          <PetIcon>
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="22"
              viewBox="0 0 24 22"
              fill="none"
            >
              <path
                d="M18.865 5.336L15.9266 1.10903C15.7088 0.796392 15.4193 0.539945 15.0822 0.360935C14.745 0.181925 14.3699 0.0855058 13.9878 0.0796677L8.4115 0H8.4C5.52105 0 3.31215 0.47955 1.8895 2.81994C0.565 4.99845 0 8.70943 0 15.2282V16.0249H1.82785L0.6512 22H2.2817L3.45835 16.0249H4C5.30658 16.0365 6.56533 15.5359 7.5044 14.6311C8.35335 13.8222 8.9657 12.7155 9.27535 11.4308L9.27815 11.4192L10.6503 4.87143H9.0158L7.71685 11.07C7.32125 12.6972 6.1383 14.4316 4 14.4316H1.603C1.64645 8.79178 2.1621 5.44808 3.25825 3.64485C4.17825 2.13116 5.523 1.59385 8.39445 1.59311L13.9649 1.67277C14.0922 1.6747 14.2173 1.70684 14.3296 1.76651C14.442 1.82618 14.5385 1.91167 14.6111 2.01589L17.935 6.7969L22.4 7.53801V8.38244L21.6554 12.337C21.4356 13.5042 21.06 14.0921 19.5195 14.2764L13.2042 15.3524L13.1624 22H14.7625L14.7958 16.6975L19.7308 15.856C20.8488 15.7191 21.6737 15.3603 22.2521 14.7594C22.7466 14.2456 23.0476 13.5893 23.2281 12.6307L24 8.53052V6.18824L18.865 5.336Z"
                fill="white"
              />
            </svg> */}
          </PetIcon>
          <BoxStyle className="pet-img"></BoxStyle>
          <BoxStyle className="schedule-add">
            <SubmitButton label="상세 추가" />
          </BoxStyle>
        </CalAddition>
      </CalLeft>
      <CalRight>
        <BoxStyle className="calander">
          <h1>달력자리</h1>
        </BoxStyle>
      </CalRight>
      <RegistModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={confirmAction}
      />
    </CalendarMain>
  );
};

export default CalendarPage;
