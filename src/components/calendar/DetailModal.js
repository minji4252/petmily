import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { IoClose } from "react-icons/io5";
import {
  DetailWrapStyle,
  FormBtn,
  FormItem,
  FormLeft,
  FormRight,
  InputStyle,
  Label,
  PetImgRegist,
  ScheduleTitle,
} from "../../styles/calendar/DetailModalStyles.js";
import { CancelButton, SubmitButton } from "../common/Button";
import AlertModal from "../common/AlertModal";

const DetailModal = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  submitButtonLabel,
  initialDateValue,
  readOnly = false,
  detailModalMode,
  petData,
  findEventDay, // findEventDay 객체를 받아옴
}) => {
  if (!isOpen) return null;

  const [dateValue, setDateValue] = useState(
    initialDateValue || getCurrentDate(),
  );
  const [timeValue, setTimeValue] = useState(getCurrentTime());
  const [scheduleTitle, setScheduleTitle] = useState("");
  const [selected, setSelected] = useState("");
  const [scheduleMemo, setScheduleMemo] = useState("");
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    if (isOpen && findEventDay?.calendarId) {
      if (detailModalMode === "edit" || detailModalMode === "view") {
        fetchCalendarData(findEventDay.calendarId);
      } else {
        setDateValue(initialDateValue || getCurrentDate());
        setTimeValue(getCurrentTime());
        setScheduleTitle("");
        setScheduleMemo("");
        setSelected("");
      }
    }
  }, [isOpen, findEventDay, detailModalMode, initialDateValue]);

  const fetchCalendarData = async id => {
    try {
      const res = await axios.get(
        `/api/calendar/calendar_id?calendar_id=${id}`,
      );
      if (res.data.code === "SU") {
        const data = res.data.data;
        setDateValue(data.startDate.split("T")[0]);
        setTimeValue(formatTime(data.startTime));
        setScheduleTitle(data.title);
        setScheduleMemo(data.content);
        setSelected(data.petId);
      } else {
        console.log("API 오류");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelect = e => {
    setSelected(e.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    if (readOnly) {
      onClose();
      return;
    }

    if (!scheduleTitle) {
      setAlertMessage("일정 제목을 입력하세요");
      setIsAlertOpen(true);
      return;
    }
    if (!selected) {
      setAlertMessage("반려동물을 선택하세요");
      setIsAlertOpen(true);
      return;
    }

    if (detailModalMode === "edit") {
      await handleEdit();
    } else {
      await handleAdd();
    }
  };

  const handleAdd = async () => {
    const userPk = sessionStorage.getItem("userPk");
    try {
      const formattedTime = `${timeValue}:00`;
      const res = await axios.post("/api/calendar", {
        userId: userPk,
        petId: selected,
        title: scheduleTitle,
        content: scheduleMemo,
        startDate: dateValue,
        startTime: formattedTime,
      });
      if (res.data.code === "SU") {
        setAlertMessage("일정 등록이 완료되었습니다");
        setIsAlertOpen(true);
      } else {
        console.log("API 오류");
      }
    } catch (error) {
      console.log(error);
      alert("일정 등록 실패");
    }
  };

  const handleEdit = async () => {
    const userPk = sessionStorage.getItem("userPk");
    try {
      const formattedTime = `${timeValue}:00`;
      const res = await axios.patch("/api/calendar", {
        calendarId: findEventDay.calendarId,
        userId: userPk,
        petId: selected,
        title: scheduleTitle,
        content: scheduleMemo,
        startDate: dateValue,
        startTime: formattedTime,
      });
      if (res.data.code === "SU") {
        setAlertMessage("일정 수정이 완료되었습니다");
        setIsAlertOpen(true);
      } else {
        console.log("API 오류");
      }
    } catch (error) {
      console.log(error);
      alert("일정 수정 실패");
    }
  };

  function getCurrentDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  function getCurrentTime() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  function formatTime(time) {
    return moment(time, "HH:mm:ss").format("HH:mm");
  }

  const handleCloseAlertModal = () => {
    if (alertMessage.includes("완료")) {
      window.location.reload();
    } else {
      setIsAlertOpen(false);
    }
  };

  return ReactDOM.createPortal(
    <DetailWrapStyle className="box-style">
      <button className="close-btn" type="button" onClick={onClose}>
        <IoClose />
      </button>
      <ScheduleTitle>{title}</ScheduleTitle>
      <form onSubmit={handleSubmit}>
        <FormItem>
          <FormLeft>
            <label htmlFor="setdate">
              <p>날짜 설정</p>
              <InputStyle
                id="setdate"
                type="date"
                name="setdate"
                value={dateValue}
                onChange={e => setDateValue(e.target.value)}
                readOnly={readOnly}
                disabled={readOnly}
              />
            </label>

            <label htmlFor="settime">
              <p>시간 설정</p>
              <InputStyle
                id="settime"
                type="time"
                name="settime"
                value={timeValue}
                onChange={e => setTimeValue(formatTime(e.target.value))}
                readOnly={readOnly}
                disabled={readOnly}
              />
            </label>

            <label htmlFor="scheduletitle">
              <p>일정 제목</p>
              <InputStyle
                id="scheduletitle"
                type="text"
                name="scheduletitle"
                placeholder="일정을 입력하세요"
                autoComplete="off"
                value={scheduleTitle}
                onChange={e => setScheduleTitle(e.target.value)}
                readOnly={readOnly}
                disabled={readOnly}
              />
            </label>

            <Label htmlFor="mypet">
              <p>반려동물</p>
              <select
                name="mypet"
                id="mypet"
                value={selected}
                onChange={handleSelect}
                disabled={readOnly}
              >
                <option value="" disabled>
                  반려동물을 선택해주세요
                </option>
                {petData?.map(item => (
                  <option value={item.petId} key={item.petId}>
                    {item.petName}
                  </option>
                ))}
              </select>
            </Label>
          </FormLeft>
          <FormRight>
            <label htmlFor="schedulememo">
              <p>일정 상세메모</p>
              <PetImgRegist
                className="box-style"
                id="schedulememo"
                name="schedulememo"
                placeholder="일정 내용을 작성해 주세요"
                value={scheduleMemo}
                onChange={e => setScheduleMemo(e.target.value)}
                readOnly={readOnly}
                disabled={readOnly}
              />
            </label>
          </FormRight>
        </FormItem>
        {!readOnly && (
          <FormBtn>
            <SubmitButton type="submit" label={submitButtonLabel} />
            <CancelButton type="button" label="취소하기" onClick={onClose} />
          </FormBtn>
        )}
        {readOnly && (
          <FormBtn>
            <SubmitButton
              type="button"
              label={submitButtonLabel}
              onClick={onClose}
            />
          </FormBtn>
        )}
      </form>
      <AlertModal
        isOpen={isAlertOpen}
        onClose={handleCloseAlertModal}
        message={alertMessage}
      />
    </DetailWrapStyle>,
    document.body,
  );
};

export default DetailModal;
