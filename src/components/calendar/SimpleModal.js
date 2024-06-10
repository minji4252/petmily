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
import {
  ActionButton,
  CancelButton,
  DelectButton,
  SubmitButton,
} from "../common/Button";
import useModal from "../../hooks/UseModal";
import DetailModal from "./DetailModal";
import { useState } from "react";
import { RiArrowRightWideFill } from "react-icons/ri";

const SimpleModal = ({ isOpen, onClose, onConfirm, clickDay, clickInfo }) => {
  const [detailmodalMode, setDetailModalMode] = useState("add");
  const { isModalOpen, confirmAction, openModal, closeModal } = useModal();

  const handleSchedule = (e, mode) => {
    e.preventDefault();
    setDetailModalMode(mode);

    openModal({
      onConfirm: () => {
        closeModal();
      },
      initialDateValue: clickDay,
      initialTimeValue: clickInfo ? clickInfo.startTime : "",
      initialTitle: clickInfo ? clickInfo.title : "",
      initialPetId: clickInfo ? clickInfo.petId : "none",
      initialContent: clickInfo ? clickInfo.content : "",
      readOnly: mode === "view",
    });
  };

  if (!isOpen) return null;
  const titleDate = moment(clickDay).format("DD dddd");

  return (
    <>
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
                <p>
                  {clickInfo.startTime} {clickInfo.petId}
                  <RiArrowRightWideFill /> {clickInfo.title}
                </p>
                <ActionButton
                  label="더보기"
                  onClick={e => handleSchedule(e, "view")}
                />
              </>
            ) : (
              <p>일정이 없습니다</p>
            )}
          </ModalItem>
        </ModalList>
        <ModalBtn>
          {clickInfo ? (
            <>
              <SubmitButton
                label="추가"
                onClick={e => handleSchedule(e, "add")}
              />
              <ActionButton
                label="수정"
                onClick={e => handleSchedule(e, "edit")}
              />
              <DelectButton label="삭제" />
            </>
          ) : (
            <>
              <SubmitButton
                label="추가"
                onClick={e => handleSchedule(e, "add")}
              />
              <CancelButton label="확인" onClick={onClose} />
            </>
          )}
        </ModalBtn>
      </SimpleModalStyle>
      <DetailModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={confirmAction}
        title={
          detailmodalMode === "add"
            ? "일정 추가하기"
            : detailmodalMode === "edit"
              ? "일정 수정하기"
              : "일정 상세보기"
        }
        submitButtonLabel={
          detailmodalMode === "add"
            ? "등록하기"
            : detailmodalMode === "edit"
              ? "수정하기"
              : "확인하기"
        }
        initialDateValue={clickDay}
        initialTimeValue={clickInfo ? clickInfo.startTime : ""}
        initialTitle={clickInfo ? clickInfo.title : ""}
        initialPetId={clickInfo ? clickInfo.petId : "none"}
        initialContent={clickInfo ? clickInfo.content : ""}
        readOnly={detailmodalMode === "view"}
      />
    </>
  );
};

export default SimpleModal;
