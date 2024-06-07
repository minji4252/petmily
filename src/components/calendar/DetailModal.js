import { useState } from "react";
import { IoClose } from "react-icons/io5";
import {
  FormBtn,
  FormItem,
  FormLeft,
  FormRight,
  InputStyle,
  Label,
  PetImgRegist,
  ScheduleTitle,
  WrapStyle,
} from "../../styles/calendar/DetailModalStyles.js";
import { CancelButton, SubmitButton } from "../common/Button";
import axios from "axios";

const DetailModal = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  submitButtonLabel,
}) => {
  if (!isOpen) return null;

  const [dateValue, setDateValue] = useState(getCurrentDate());
  const [timeValue, setTimeValue] = useState(getCurrentTime());
  const [scheduleTitle, setScheduleTitle] = useState("");
  const [selected, setSelected] = useState("none");
  const [scheduleMemo, setScheduleMemo] = useState("");

  //백엔드 데이터
  const selectList = [
    { value: "none", name: "선택하세요" },
    { value: "1", name: "루이" },
    { value: "2", name: "데이지" },
    { value: "3", name: "코코" },
  ];

  const handleSelect = e => {
    setSelected(e.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/todos", {
        startDate: dateValue,
        startTime: timeValue,
        title: scheduleTitle,
        petId: selected,
        content: scheduleMemo,
      });

      const status = res.status.toString().charAt(0);
      if (status === "2") {
        alert("일정 등록 성공");
        onConfirm();
      } else {
        console.log("API 오류");
      }
    } catch (error) {
      console.error(error);
      alert("일정 등록 실패");
    }

    alert(
      `정보: ${dateValue}, ${timeValue}, ${scheduleTitle}, ${selected}, ${scheduleMemo} `,
    );
  };

  // 오늘 날짜를 반환하는 함수
  function getCurrentDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  // 현재 시간을 반환하는 함수
  function getCurrentTime() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  return (
    <WrapStyle className="box-style">
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
                onChange={e => setTimeValue(e.target.value)}
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
              />
            </label>

            <Label htmlFor="mypet">
              <p>반려동물</p>
              <select
                name="mypet"
                id="mypet"
                value={selected}
                onChange={handleSelect}
              >
                {selectList.map(item => {
                  return (
                    <option value={item.value} key={item.value}>
                      {item.name}
                    </option>
                  );
                })}
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
                required
                value={scheduleMemo}
                onChange={e => setScheduleMemo(e.target.value)}
              />
            </label>
          </FormRight>
        </FormItem>
        <FormBtn>
          <CancelButton type="button" label="취소하기" onClick={onClose} />
          <SubmitButton type="submit" label={submitButtonLabel} />
        </FormBtn>
      </form>
    </WrapStyle>
  );
};

export default DetailModal;
