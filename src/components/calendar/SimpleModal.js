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
  onConfirm,
  clickDay,
  findEventDay,
}) => {
  const [detailModalMode, setDetailModalMode] = useState("add");
  const { isModalOpen, confirmAction, openModal, closeModal } = useModal();
  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const modalRef = useRef(null);

  const getData = async () => {
    try {
      const response = await axios.get(
        `/api/calendar/calendar_id?calendar_id=${findEventDay.calendarId}`,
      );
    } catch (error) {
      console.log(error);
    }
  };

  const openDetailModal = (mode, item = null) => {
    setDetailModalMode(mode);
    openModal({
      onConfirm: () => closeModal(),
      initialDateValue: clickDay,
      initialTimeValue: item?.startTime || "",
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

  const handleEditSchedule = () => {
    openDetailModal("edit", findEventDay);
  };

  const handleViewSchedule = () => {
    openDetailModal("view", findEventDay);
  };

  // 일정을 삭제하는 API 함수
  const handleDelete = async () => {
    if (!findEventDay?.calendarId) return;

    try {
      const response = await axios.delete(
        `/api/calendar?calendar_id=${findEventDay.calendarId}`,
      );
      if (response.status.toString().charAt(0) === "2") {
        setIsDeleteConfirmOpen(false);
        setIsAlertOpen(true); // 알림 모달을 열기
      } else {
        console.log("삭제 실패:", response.data);
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
    window.location.reload(); // 새로고침
  };

  useEffect(() => {
    if (findEventDay) {
      getData();
    }
  }, [findEventDay]);

  if (!isOpen) return null;
  const titleDate = moment(clickDay).format("DD dddd");

  return (
    <>
      <SimpleModalStyle ref={modalRef}>
        <ModalTitle>{titleDate}</ModalTitle>
        <button className="close-btn" type="button" onClick={onClose}>
          <IoClose />
        </button>
        <ModalLine />
        <ModalList>
          {findEventDay ? (
            <ModalItem key={findEventDay.pk}>
              <label className="radio_label">
                <input
                  type="radio"
                  name="findEventDay"
                  checked={findEventDay.pk === findEventDay.pk}
                  onChange={() => {}}
                />
                <span className="radio_icon"></span>
                <p>
                  {moment(findEventDay.startTime, "HH:mm:ss").isValid()
                    ? moment(findEventDay.startTime, "HH:mm:ss").format("HH:mm")
                    : "Invalid time"}
                </p>
                <p>{findEventDay.petName}</p>
                <p>
                  <RiArrowRightWideFill /> <span>{findEventDay.title}</span>
                </p>
              </label>
              <ActionButton label="더보기" onClick={handleViewSchedule} />
            </ModalItem>
          ) : (
            <ModalItem>
              <p>일정이 없습니다</p>
            </ModalItem>
          )}
        </ModalList>
        <ModalBtn>
          <SubmitButton label="추가" onClick={handleAddSchedule} />
          {findEventDay && (
            <>
              <ActionButton label="수정" onClick={handleEditSchedule} />
              <DelectButton
                label="삭제"
                onClick={() => setIsDeleteConfirmOpen(true)}
              />
            </>
          )}
          {!findEventDay && <CancelButton label="확인" onClick={onClose} />}
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
          initialTimeValue={findEventDay?.startTime}
          initialTitle={findEventDay?.title}
          initialPetId={findEventDay?.petId}
          initialContent={findEventDay?.content}
          initialCalendarId={findEventDay?.calendarId}
          readOnly={detailModalMode === "view"}
          detailModalMode={detailModalMode}
        />
      )}
      {isDeleteConfirmOpen && (
        <ConfirmModal
          isOpen={isDeleteConfirmOpen}
          onClose={() => setIsDeleteConfirmOpen(false)}
          onConfirm={confirmDelete}
          message={`'${findEventDay?.title || ""}' 일정을 삭제하시겠습니까?`}
        />
      )}
      {isAlertOpen && (
        <AlertModal
          isOpen={isAlertOpen}
          onClose={handleAlertClose}
          message="일정이 삭제되었습니다."
        />
      )}
    </>
  );
};

export default SimpleModal;
