import styled from "@emotion/styled";
import moment from "moment";
import "moment/locale/ko";
import { IoClose } from "react-icons/io5";
import { colorSystem } from "../../styles/color";
import { ActionButton, DelectButton, SubmitButton } from "../common/Button";

const SimpleModalStyle = styled.div`
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

const ModalTitle = styled.span`
  font-size: 0.9rem;
  color: ${colorSystem.g500};
  font-weight: 600;
  margin-left: 10px;
`;

const ModalLine = styled.div`
  width: 100%;
  border-bottom: 1px solid ${colorSystem.signature2};
  margin-top: 10px;
`;

const ModalList = styled.div``;
const ModalItem = styled.div`
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
const ModalBtn = styled.div`
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

const SimpleModal = ({ isOpen, onClose, onConfirm, clickDay, clickInfo }) => {
  if (!isOpen) return null;
  const titleDate = moment(clickDay).format("DD dddd");
  return (
    <SimpleModalStyle>
      <ModalTitle>{titleDate}</ModalTitle>
      <button className="close-btn" type="button" onClick={onClose}>
        <IoClose />
      </button>
      <ModalLine />
      <ModalList>
        <ModalItem>
          {clickInfo ? (
            <>
              <p>10 : 20 {clickInfo.title}</p>
              <ActionButton label="상세정보" />
            </>
          ) : (
            <p>일정이 없습니다</p>
          )}
        </ModalItem>
      </ModalList>

      <ModalBtn>
        {clickInfo ? (
          <>
            <SubmitButton label="추가" />
            <ActionButton label="수정" />
            <DelectButton label="삭제" />
          </>
        ) : (
          <></>
        )}
      </ModalBtn>
    </SimpleModalStyle>
  );
};

export default SimpleModal;
