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
import { useState, useEffect } from "react";
import { RiArrowRightWideFill } from "react-icons/ri";
import ConfirmationModal from "./ConfirmationModal"; // 확인 모달 컴포넌트 추가

const SimpleModal = ({ isOpen, onClose, onConfirm, clickDay, clickInfo }) => {
  const [detailmodalMode, setDetailModalMode] = useState("add");
  const { isModalOpen, confirmAction, openModal, closeModal } = useModal();
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false); // 삭제 확인 모달 상태 추가

  useEffect(() => {
    // 라디오버튼 - 첫 번째 일정 기본 선택
    if (clickInfo && clickInfo.length > 0) {
      setSelectedEvent(clickInfo[0]);
    }
  }, [clickInfo]);

  const handleSchedule = (e, mode, event = null) => {
    e.preventDefault();
    setDetailModalMode(mode);
    setSelectedEvent(event);

    if (event || mode === "add") {
      openModal({
        onConfirm: () => {
          closeModal();
        },
        initialDateValue: clickDay,
        initialTimeValue: event ? event.startTime : "",
        initialTitle: event ? event.title : "",
        initialPetId: event ? event.petId : "",
        initialContent: event ? event.content : "",
        readOnly: mode === "view",
      });
    }
  };

  const handleDelete = e => {
    e.preventDefault();
    setIsDeleteConfirmOpen(true);
  };

  const confirmDelete = () => {
    // 여기에 삭제 로직 추가
    setIsDeleteConfirmOpen(false);
    setSelectedEvent(null);
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
          {clickInfo && clickInfo.length > 0 ? (
            clickInfo.map((event, index) => (
              <ModalItem key={event.pk}>
                <label className="radio_label">
                  <input
                    type="radio"
                    name="selectedEvent"
                    checked={selectedEvent && selectedEvent.pk === event.pk}
                    onChange={() => setSelectedEvent(event)}
                  />
                  <span className="radio_icon"></span>

                  <p>
                    {event.startTime} {event.petId}
                    <RiArrowRightWideFill /> {event.title}
                  </p>
                </label>
                <ActionButton
                  label="더보기"
                  onClick={e => handleSchedule(e, "view", event)}
                />
              </ModalItem>
            ))
          ) : (
            <ModalItem>
              <p>일정이 없습니다</p>
            </ModalItem>
          )}
        </ModalList>
        <ModalBtn>
          <SubmitButton label="추가" onClick={e => handleSchedule(e, "add")} />
          {clickInfo && clickInfo.length > 0 && (
            <>
              <ActionButton
                label="수정"
                onClick={e =>
                  handleSchedule(
                    e,
                    "edit",
                    selectedEvent ||
                      (clickInfo.length === 1 ? clickInfo[0] : null),
                  )
                }
              />
              <DelectButton label="삭제" onClick={handleDelete} />
            </>
          )}
          {!clickInfo || clickInfo.length === 0 ? (
            <CancelButton label="확인" onClick={onClose} />
          ) : null}
        </ModalBtn>
      </SimpleModalStyle>
      {isModalOpen && (
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
          initialTimeValue={selectedEvent ? selectedEvent.startTime : ""}
          initialTitle={selectedEvent ? selectedEvent.title : ""}
          initialPetId={selectedEvent ? selectedEvent.petId : ""}
          initialContent={selectedEvent ? selectedEvent.content : ""}
          readOnly={detailmodalMode === "view"}
        />
      )}
      {isDeleteConfirmOpen && (
        <ConfirmationModal
          isOpen={isDeleteConfirmOpen}
          onClose={() => setIsDeleteConfirmOpen(false)}
          onConfirm={confirmDelete}
          message={`'${selectedEvent ? selectedEvent.title : ""}' 일정을 삭제하시겠습니까?`}
        />
      )}
    </>
  );
};

export default SimpleModal;
