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

const DetailModal = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  submitButtonLabel,
  initialDateValue,
  initialTimeValue,
  initialTitle,
  initialPetId,
  initialContent,
  initialCalendarId,
  userId,
  readOnly = false,
  eventId,
  detailModalMode,
  petData,
}) => {
  if (!isOpen) return null;

  const [dateValue, setDateValue] = useState(
    initialDateValue || getCurrentDate(),
  );
  const [timeValue, setTimeValue] = useState(
    formatTime(initialTimeValue || getCurrentTime()),
  );
  const [scheduleTitle, setScheduleTitle] = useState(initialTitle || "");
  const [selected, setSelected] = useState(initialPetId || "none");
  const [scheduleMemo, setScheduleMemo] = useState(initialContent || "");

  const handleSelect = e => setSelected(e.target.value);

  const handleSubmit = async event => {
    if (readOnly) {
      onClose();
      return;
    }

    if (detailModalMode === "edit") {
      event.preventDefault();
      await handleEdit();
    } else {
      await handleAdd();
    }
  };

  const handleAdd = async () => {
    try {
      const formattedTime = `${timeValue}:00`;
      const res = await axios.post("/api/calendar", {
        userId: 1, //임시
        petId: selected,
        title: scheduleTitle,
        content: scheduleMemo,
        startDate: dateValue,
        startTime: formattedTime,
      });
      if (res.status.toString().charAt(0) === "2") {
        // setScheduleId(res.data.data.calendarId); //수정할때 쓰임
        alert("일정 등록 성공");
        onConfirm();
      } else {
        console.log("API 오류");
      }
    } catch (error) {
      console.log(error);
      alert("일정 등록 실패");
    }
  };

  const handleEdit = async () => {
    try {
      const formattedTime = `${timeValue}:00`;
      const res = await axios.patch("/api/calendar", {
        calendarId: initialCalendarId,
        userId: 1, //임시
        petId: selected,
        title: scheduleTitle,
        content: scheduleMemo,
        startDate: dateValue,
        startTime: formattedTime,
      });
      if (res.data.code === "NP") {
        alert(res.data.message);
      }
      if (res.status.toString().charAt(0) === "2") {
        alert("일정 수정 성공");
        onConfirm();
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
                required
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
                required
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
                required
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
                {petData.map(item => (
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
    </DetailWrapStyle>,
    document.body,
  );
};

export default DetailModal;
