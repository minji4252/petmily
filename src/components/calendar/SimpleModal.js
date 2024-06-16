import axios from "axios";
import moment from "moment";
import "moment/locale/ko";
import { useEffect, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import { RiArrowRightWideFill } from "react-icons/ri";
import useModal from "../../hooks/UseModal";
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
import ConfirmModal from "../common/ConfirmModal";
import DetailModal from "./DetailModal";
import AlertModal from "../common/AlertModal";

const SimpleModal = ({
  isOpen,
  onClose,
  clickDay,
  findEventDay,
  petData,
  dayEvents,
}) => {
  const [detailModalMode, setDetailModalMode] = useState("add");
  const { isModalOpen, confirmAction, openModal, closeModal } = useModal();
  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const modalRef = useRef(null);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    if (isOpen && dayEvents && dayEvents.length > 0) {
      const event = dayEvents.find(event =>
        moment(event.startDate).isSame(clickDay, "day"),
      );
      if (event) {
        setSelectedEvent(event);
      }
    }
  }, [isOpen, clickDay, dayEvents]);

  const openDetailModal = (mode, item = null) => {
    setDetailModalMode(mode);
    openModal({
      onConfirm: () => closeModal(),
      initialDateValue: clickDay,
      initialTimeValue:
        mode === "add" ? getCurrentTime() : item?.startTime || "",
      initialTitle: item?.title || "",
      initialPetId: item?.petId || "",
      initialContent: item?.content || "",
      initialCalendarId: item?.calendarId || "",
      readOnly: mode === "view",
    });
  };

  const handleAddSchedule = () => {
    openDetailModal("add");
  };

  const handleEditSchedule = e => {
    setSelectedEvent(e);
    openDetailModal("edit", e);
  };

  const handleViewSchedule = e => {
    setSelectedEvent(e);
    openDetailModal("view", e);
  };

  const handleDelete = async () => {
    if (!selectedEvent?.calendarId) return;

    try {
      const response = await axios.delete(
        `/api/calendar?calendar_id=${selectedEvent.calendarId}`,
      );
      if (response.status.toString().charAt(0) === "2") {
        setIsDeleteConfirmOpen(false);
        setIsAlertOpen(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const confirmDelete = () => {
    handleDelete();
  };

  const handleAlertClose = () => {
    setIsAlertOpen(false);
    window.location.reload();
  };

  function getCurrentTime() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  if (!isOpen) return null;
  const titleDate = moment(clickDay).format("DD dddd");

  useEffect(() => {
    console.log("Selected event:", selectedEvent);
  }, [selectedEvent]);

  return (
    <>
      <SimpleModalStyle ref={modalRef}>
        <ModalTitle>{titleDate}</ModalTitle>
        <button className="close-btn" type="button" onClick={onClose}>
          <IoClose />
        </button>
        <ModalLine />
        <ModalList>
          {dayEvents && dayEvents.length > 0 ? (
            dayEvents.map((item, index) => (
              <ModalItem key={index}>
                <label className="radio_label">
                  <input
                    type="radio"
                    name="allData"
                    checked={item.pk === selectedEvent?.pk}
                    onChange={() => setSelectedEvent(item)}
                  />
                  <span className="radio_icon"></span>
                  <p>
                    {moment(item.startTime, "HH:mm:ss").isValid()
                      ? moment(item.startTime, "HH:mm:ss").format("HH:mm")
                      : "Invalid time"}
                  </p>
                  <p>{item.petName}</p>
                  <p>
                    <RiArrowRightWideFill /> <span>{item.title}</span>
                  </p>
                </label>
                <ActionButton
                  label="더보기"
                  onClick={() => handleViewSchedule(item)}
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
          {dayEvents && dayEvents.length === 0 ? (
            <>
              <SubmitButton label="추가" onClick={handleAddSchedule} />
              <CancelButton label="확인" onClick={onClose} />
            </>
          ) : (
            <>
              <SubmitButton label="추가" onClick={handleAddSchedule} />
              <ActionButton
                label="수정"
                onClick={() => handleEditSchedule(selectedEvent)}
              />
              <DelectButton
                label="삭제"
                onClick={() => setIsDeleteConfirmOpen(true)}
              />
            </>
          )}
        </ModalBtn>
      </SimpleModalStyle>
      {isModalOpen && (
        <DetailModal
          isOpen={isModalOpen}
          onClose={closeModal}
          onConfirm={confirmAction}
          title={
            detailModalMode === "add"
              ? "일정 추가하기"
              : detailModalMode === "edit"
                ? "일정 수정하기"
                : "일정 상세보기"
          }
          submitButtonLabel={
            detailModalMode === "add"
              ? "등록하기"
              : detailModalMode === "edit"
                ? "수정하기"
                : "확인하기"
          }
          initialDateValue={clickDay}
          findEventDay={findEventDay}
          readOnly={detailModalMode === "view"}
          detailModalMode={detailModalMode}
          petData={petData}
        />
      )}
      {isDeleteConfirmOpen && (
        <ConfirmModal
          isOpen={isDeleteConfirmOpen}
          onClose={() => setIsDeleteConfirmOpen(false)}
          onConfirm={confirmDelete}
          message={`'${selectedEvent?.title || ""}' 일정을 삭제하시겠습니까?`}
        />
      )}
      {isAlertOpen && (
        <AlertModal
          isOpen={isAlertOpen}
          onClose={handleAlertClose}
          message="삭제 완료 되었습니다."
        />
      )}
    </>
  );
};

export default SimpleModal;
