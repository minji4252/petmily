import styled from "@emotion/styled";
import { CancelButton, SubmitButton } from "../common/Button";
import mypetImage from "../../images/mypet.png";
import "../../styles/reset.css";
import "../../styles/global.css";
import "../../styles/font.css";
import { colorSystem } from "../../styles/color.js";
import RegistModal from "../common/RegistModal";
import useModal from "../../hooks/UseModal";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import "../../styles/calendar.css";
import Calendar from "./Calendar";
import SimpleModal from "./SimpleModal";
import DetailModal from "./DetailModal";

const CalendarMain = styled.main`
  width: 100%;
  max-width: 1120px;
  display: flex;
  margin: 170px auto 190px auto;

  @media all and (max-width: 768px) {
    display: block;
  }
`;

const BoxStyle = styled.div`
  width: 100%;
  height: 210px;
  border-radius: 32px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 12px 0px;
  background-color: rgb(255, 255, 255);
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
    margin-left: 30px;
  }
`;

const CloseIcon = styled.svg`
  position: absolute;
  top: 18px;
  right: 27px;
  cursor: pointer;
  width: 18px;
`;

const ManageItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 30px;

  & Input {
    display: none;
  }

  .radio_label {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  .radio_icon::before {
    content: "";
    display: block;
    margin-right: 5px;
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

  button {
    background-color: transparent;
    border: 0;
  }

  svg {
    width: 18px;
  }
`;

const RadioText = styled.div`
  font-size: 15px;
  margin-left: 7px;
  margin-right: 20px;
  font-weight: 600;
  color: ${colorSystem.g800};
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
    position: relative;
  }

  button {
    width: 100%;
  }

  .closeIcon-btn {
    width: 0;
  }
`;

const PetSelect = styled.button`
  display: flex;
  background-color: transparent;
  border: none;
  width: fit-content !important;

  > svg {
    width: 18px;
    margin-top: 3px;
    cursor: pointer;
  }
`;

const PetIcon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 999px;
  background-color: ${colorSystem.primary};
  margin-bottom: 17px;
  cursor: pointer;

  & :hover {
    width: 30px;
    height: 30px;
    border-radius: 999px;
    margin-bottom: 17px;
    cursor: pointer;
    background-color: pink;
  }

  > svg {
    width: 20px;
    margin: 0 auto;
    display: flex;
  }
`;

const CalRight = styled.div`
  width: 57%;
  margin-top: 25px;

  @media all and (max-width: 768px) {
    width: 92%;
    margin: 30px 0 0 30px;
  }
`;

const Index = () => {
  const { isModalOpen, confirmAction, openModal, closeModal } = useModal();

  const handleRegister = e => {
    e.preventDefault();
    openModal({
      onConfirm: () => {
        closeModal();
      },
    });
  };

  const [isVisible, setIsVisible] = useState(false);

  const ManageVisible = () => {
    setIsVisible(!isVisible);
  };

  return (
    <CalendarMain>
      <CalLeft>
        <PetManage>
          <BoxStyle
            className="pet-manage"
            style={{ display: isVisible ? "block" : "none" }}
          >
            <button type="button" onClick={ManageVisible}>
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
            </button>
            <ManageItem>
              <label className="radio_label">
                <input type="radio" name="itemcheck" value="itemcheck" />
                <span className="radio_icon"></span>
                <RadioText>전체</RadioText>
              </label>
              <label className="radio_label">
                <input type="radio" name="itemcheck" value="itemcheck" />
                <span className="radio_icon"></span>
                <RadioText>루이</RadioText>
                <button type="button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                  >
                    <path
                      d="M17.9375 5.25H3.0625M16.4789 7.4375L16.0764 13.475C15.9215 15.7972 15.8445 16.9584 15.0876 17.6663C14.3307 18.375 13.167 18.375 10.8386 18.375H10.1614C7.83387 18.375 6.67012 18.375 5.91237 17.6663C5.1555 16.9584 5.0785 15.7972 4.92362 13.475L4.52112 7.4375"
                      stroke="#CBB1A2"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                    />
                    <path
                      opacity="0.5"
                      d="M8.3125 9.625L8.75 14M12.6875 9.625L12.25 14"
                      stroke="#CBB1A2"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                    />
                    <path
                      opacity="0.5"
                      d="M5.6875 5.25H5.78375C6.13589 5.241 6.47712 5.12594 6.76281 4.91987C7.0485 4.7138 7.26535 4.42631 7.385 4.095L7.41475 4.00488L7.49962 3.75025C7.57225 3.53237 7.609 3.42387 7.65713 3.33112C7.75181 3.14947 7.8877 2.99249 8.05392 2.87276C8.22014 2.75304 8.41208 2.67388 8.61438 2.64163C8.71675 2.625 8.83137 2.625 9.06062 2.625H11.9394C12.1686 2.625 12.2832 2.625 12.3856 2.64163C12.5879 2.67388 12.7799 2.75304 12.9461 2.87276C13.1123 2.99249 13.2482 3.14947 13.3429 3.33112C13.391 3.42387 13.4277 3.53237 13.5004 3.75025L13.5852 4.00488C13.6961 4.37349 13.9255 4.69526 14.2377 4.92035C14.55 5.14545 14.9277 5.26131 15.3125 5.25"
                      stroke="#CBB1A2"
                      strokeWidth="1.25"
                    />
                  </svg>
                </button>
              </label>
              <label className="radio_label">
                <input type="radio" name="itemcheck" value="itemcheck" />
                <span className="radio_icon"></span>
                <RadioText>코코</RadioText>
                <button type="button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                  >
                    <path
                      d="M17.9375 5.25H3.0625M16.4789 7.4375L16.0764 13.475C15.9215 15.7972 15.8445 16.9584 15.0876 17.6663C14.3307 18.375 13.167 18.375 10.8386 18.375H10.1614C7.83387 18.375 6.67012 18.375 5.91237 17.6663C5.1555 16.9584 5.0785 15.7972 4.92362 13.475L4.52112 7.4375"
                      stroke="#CBB1A2"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                    />
                    <path
                      opacity="0.5"
                      d="M8.3125 9.625L8.75 14M12.6875 9.625L12.25 14"
                      stroke="#CBB1A2"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                    />
                    <path
                      opacity="0.5"
                      d="M5.6875 5.25H5.78375C6.13589 5.241 6.47712 5.12594 6.76281 4.91987C7.0485 4.7138 7.26535 4.42631 7.385 4.095L7.41475 4.00488L7.49962 3.75025C7.57225 3.53237 7.609 3.42387 7.65713 3.33112C7.75181 3.14947 7.8877 2.99249 8.05392 2.87276C8.22014 2.75304 8.41208 2.67388 8.61438 2.64163C8.71675 2.625 8.83137 2.625 9.06062 2.625H11.9394C12.1686 2.625 12.2832 2.625 12.3856 2.64163C12.5879 2.67388 12.7799 2.75304 12.9461 2.87276C13.1123 2.99249 13.2482 3.14947 13.3429 3.33112C13.391 3.42387 13.4277 3.53237 13.5004 3.75025L13.5852 4.00488C13.6961 4.37349 13.9255 4.69526 14.2377 4.92035C14.55 5.14545 14.9277 5.26131 15.3125 5.25"
                      stroke="#CBB1A2"
                      strokeWidth="1.25"
                    />
                  </svg>
                </button>
              </label>
            </ManageItem>
            <ManageBtn>
              <SubmitButton label="등록" />
              <CancelButton label="수정" />
              <SubmitButton label="저장" />
            </ManageBtn>
          </BoxStyle>
        </PetManage>
        <CalAddition>
          <PetSelect onClick={ManageVisible}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M14.2041 20.2959L6.70414 12.7959C6.59926 12.6914 6.51605 12.5672 6.45927 12.4304C6.40248 12.2937 6.37325 12.1471 6.37325 11.999C6.37325 11.851 6.40248 11.7043 6.45927 11.5676C6.51605 11.4309 6.59926 11.3067 6.70414 11.2021L14.2041 3.70215C14.4155 3.4908 14.7021 3.37207 15.001 3.37207C15.2999 3.37207 15.5865 3.4908 15.7979 3.70215C16.0092 3.91349 16.128 4.20014 16.128 4.49902C16.128 4.79791 16.0092 5.08455 15.7979 5.2959L9.09383 12L15.7988 18.704C16.0102 18.9154 16.1289 19.202 16.1289 19.5009C16.1289 19.7998 16.0102 20.0864 15.7988 20.2978C15.5875 20.5091 15.3008 20.6278 15.002 20.6278C14.7031 20.6278 14.4164 20.5091 14.2051 20.2978L14.2041 20.2959Z"
                fill="#475569"
              />
            </svg>
            <PetIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
              >
                <path
                  d="M20.9357 16.6564C20.5169 15.1384 19.6117 13.7996 18.3588 12.8456C17.106 11.8915 15.5747 11.3749 14 11.3749C12.4252 11.3749 10.8939 11.8915 9.64109 12.8456C8.38823 13.7996 7.48298 15.1384 7.06422 16.6564L6.06628 20.274C5.8871 20.9235 5.86037 21.6057 5.98817 22.2672C6.11596 22.9288 6.39484 23.5519 6.80304 24.0879C7.21125 24.624 7.73775 25.0585 8.3415 25.3577C8.94525 25.6568 9.60994 25.8124 10.2837 25.8124H17.7162C18.39 25.8124 19.0547 25.6568 19.6584 25.3577C20.2622 25.0585 20.7887 24.624 21.1969 24.0879C21.6051 23.5519 21.884 22.9288 22.0118 22.2672C22.1395 21.6057 22.1128 20.9235 21.9336 20.274L20.9357 16.6564ZM19.8047 23.0275C19.5608 23.3503 19.2451 23.6119 18.8826 23.7916C18.5201 23.9712 18.1208 24.0639 17.7162 24.0624H10.2837C9.87945 24.0624 9.48063 23.9691 9.11837 23.7896C8.75611 23.6101 8.4402 23.3494 8.19528 23.0277C7.95035 22.7061 7.78302 22.3322 7.70635 21.9353C7.62967 21.5383 7.64571 21.1291 7.75323 20.7393L8.75116 17.1218C9.06808 15.973 9.75315 14.9599 10.7013 14.2379C11.6494 13.5159 12.8082 13.1249 14 13.1249C15.1917 13.1249 16.3505 13.5159 17.2986 14.2379C18.2468 14.9599 18.9318 15.973 19.2488 17.1218L20.2467 20.7393C20.3558 21.1289 20.3726 21.5385 20.2959 21.9357C20.2191 22.3329 20.051 22.7068 19.8047 23.0277V23.0275ZM7.9898 12.595C8.14205 11.6434 7.94015 10.6248 7.42105 9.72593C6.90196 8.82708 6.12058 8.14289 5.22059 7.79896C4.25678 7.43086 3.27372 7.48948 2.45155 7.96395C0.8171 8.90764 0.386983 11.2334 1.49293 13.1486C2.01186 14.0474 2.79329 14.7318 3.69328 15.0756C4.09196 15.2309 4.51573 15.312 4.9436 15.3146C5.47666 15.3165 6.00071 15.1771 6.46233 14.9105C7.28401 14.436 7.82651 13.6137 7.9898 12.595ZM6.26168 12.3184C6.18348 12.8067 5.94394 13.189 5.58722 13.395C5.23049 13.6009 4.77965 13.6171 4.31754 13.4407C3.79183 13.24 3.32687 12.8255 3.00826 12.2736C2.39576 11.2127 2.54134 9.93298 3.32655 9.47951C3.52394 9.36749 3.74748 9.30979 3.97443 9.31227C4.18731 9.31448 4.398 9.35556 4.59612 9.43351C5.12183 9.63438 5.58678 10.0489 5.90539 10.6007C6.224 11.1526 6.35049 11.7627 6.26168 12.3184ZM8.17935 8.9696C8.80071 9.46633 9.51028 9.725 10.2278 9.72494C10.4428 9.72488 10.6571 9.70176 10.8671 9.65598C12.7113 9.25507 13.8295 7.17082 13.3597 5.00984C13.1393 3.99561 12.6035 3.10579 11.851 2.50417C11.0452 1.85995 10.0907 1.6161 9.16329 1.81779C7.31912 2.21865 6.20092 4.3029 6.67063 6.46387C6.89108 7.47816 7.42691 8.36798 8.17935 8.9696ZM9.53494 3.52787C9.61998 3.50953 9.70674 3.50036 9.79373 3.50052C10.119 3.50052 10.4536 3.62778 10.7582 3.87136C11.1978 4.22273 11.5144 4.75916 11.6497 5.38188C11.91 6.57926 11.3814 7.75357 10.4954 7.94618C10.0928 8.03368 9.65837 7.91183 9.27217 7.60301C8.83265 7.25159 8.51606 6.71516 8.38076 6.09249C8.1204 4.89478 8.64901 3.72048 9.53494 3.52787ZM25.5484 7.96395C24.7265 7.48948 23.743 7.43086 22.7793 7.79896C21.8793 8.14278 21.0979 8.82708 20.579 9.72593C20.06 10.6248 19.8581 11.6437 20.0102 12.595C20.1733 13.6137 20.7157 14.436 21.5377 14.9105C21.9993 15.1771 22.5234 15.3166 23.0564 15.3146C23.4843 15.312 23.9081 15.2309 24.3067 15.0756C25.2067 14.7318 25.9882 14.0474 26.5071 13.1486C27.6129 11.2334 27.1828 8.90764 25.5484 7.96395ZM24.9917 12.2736C24.673 12.8255 24.2081 13.24 23.6824 13.4407C23.2205 13.6173 22.7695 13.601 22.4128 13.395C22.0561 13.1889 21.8167 12.8067 21.7384 12.3184C21.6494 11.7627 21.7759 11.1528 22.0945 10.6012C22.4132 10.0496 22.8781 9.63487 23.4038 9.43401C23.6019 9.35599 23.8126 9.31482 24.0255 9.31255C24.2524 9.31006 24.476 9.36776 24.6734 9.47978C25.4586 9.93287 25.6043 11.2124 24.9917 12.2736ZM17.1328 9.65598C17.3428 9.70176 17.5572 9.72488 17.7721 9.72494C18.4896 9.72494 19.1994 9.46633 19.8206 8.9696C20.573 8.36804 21.1088 7.47816 21.3293 6.46393C21.799 4.30295 20.6808 2.2187 18.8366 1.81784C17.9093 1.61626 16.9547 1.85995 16.1489 2.50422C15.3964 3.10579 14.8606 3.99566 14.6402 5.00984C14.1704 7.17082 15.2886 9.25507 17.1328 9.65598ZM16.3503 5.38161C16.4856 4.75888 16.8021 4.22223 17.2417 3.87108C17.5464 3.62751 17.8809 3.50025 18.2062 3.50025C18.2932 3.50009 18.3799 3.50926 18.465 3.52759C19.3509 3.7202 19.8795 4.89478 19.6193 6.09189C19.4839 6.71462 19.1673 7.25127 18.7279 7.60247C18.3417 7.91123 17.9075 8.03308 17.5047 7.94563C16.6186 7.7533 16.09 6.57883 16.3503 5.38161Z"
                  fill="white"
                />
              </svg>
            </PetIcon>
          </PetSelect>
          <BoxStyle className="pet-img"></BoxStyle>
          <BoxStyle className="schedule-add">
            <button type="button" className="closeIcon-btn">
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
            </button>
            <SubmitButton label="상세 추가" onClick={handleRegister} />
          </BoxStyle>
        </CalAddition>
      </CalLeft>
      <CalRight>
        <Calendar />
      </CalRight>
      {/* <RegistModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={confirmAction}
      /> */}
      <DetailModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={confirmAction}
      />
    </CalendarMain>
  );
};

export default Index;
