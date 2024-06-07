import moment from "moment";
import "moment/locale/ko";
import { IoClose } from "react-icons/io5";
import {
  ModalBtn,
  ModalItem,
  ModalLine,
  ModalList,
  ModalTitle,
  SimpleModalStyle,
} from "../../styles/calendar/SimpleModalStyles";
import { ActionButton, DelectButton, SubmitButton } from "../common/Button";

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
