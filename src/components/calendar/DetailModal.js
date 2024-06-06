import styled from "@emotion/styled";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { colorSystem } from "../../styles/color.js";
import "../../styles/common.css";
import "../../styles/font.css";
import "../../styles/reset.css";
import { CancelButton, SubmitButton } from "../common/Button";
import axios from "axios";

// 공통
const WrapStyle = styled.div`
  max-width: 600px;
  width: 100%;
  height: 720px;
  padding: 80px 50px 0px 50px;
  border-radius: 13px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 12px 0px;
  background-color: rgb(255, 255, 255);

  position: fixed;
  left: 50%;
  transform: translate(-50%, -50%);
  top: 50%;
  z-index: 9999;

  form {
    height: 85%;
  }

  form p {
    font-size: 12px;
    margin-top: 20px;
    margin-bottom: 6px;
  }

  .box-style {
    border-radius: 13px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 12px 0px;
    background-color: rgb(255, 255, 255);
  }
`;

// 제목
const ScheduleTitle = styled.h1`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 40px;
  color: ${colorSystem.title};
`;

// 폼 전체
const FormItem = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

const FormLeft = styled.div`
  input[type="date" i] {
    font-family: "Pretendard-Regular";
  }

  input[type="time" i] {
    font-family: "Pretendard-Regular";
  }

  input {
    font-family: "Pretendard-Regular";
  }
`;

// 날짜, 시간
const InputStyle = styled.input`
  background-color: ${colorSystem.white};
  width: 200px;
  height: 32px;
  border-radius: 50px;
  border: 1px solid #cbd5e1;
  padding: 8px;

  &::placeholder {
    font-size: 0.8rem;
    color: ${colorSystem.placeholder};
    font-family: "Pretendard-Regular";
  }
`;

// 선택박스
const Label = styled.label`
  > select {
    background-color: ${colorSystem.white};
    width: 200px;
    height: 32px;
    border-radius: 50px;
    border: 1px solid #cbd5e1;
    padding: 8px;
    font-size: 0.8rem;
    font-family: "Pretendard-Regular";
  }
`;

// 폼 오른쪽
const FormRight = styled.div``;

// 일정 상세메모
const PetImgRegist = styled.textarea`
  width: 270px;
  height: 80%;
  border-radius: 7px;
  border: 0px;
  vertical-align: top;
  padding: 15px;
  resize: none;
  margin-top: 5px;
  font-family: "Pretendard-Regular";

  &::placeholder {
    font-size: 0.8rem;
    color: ${colorSystem.placeholder};
    font-family: "Pretendard-Regular";
  }
`;

// 버튼
const FormBtn = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 20px;
  justify-content: center;
`;

const DetailModal = ({ isOpen, onClose, onConfirm }) => {
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
    // try {
    //   const res = await axios.post("url주소", {
    //     date: dateValue,
    //     time: timeValue,
    //     title: scheduleTitle,
    //     pet: selected,
    //     memo: scheduleMemo,
    //   });

    //   const status = res.status.toString().charAt(0);
    //   if (status === "2") {
    //     // console.log(res.data);
    //     alert("일정 등록 성공");
    //     onConfirm();
    //   } else {
    //     console.log("API 오류");
    //   }
    // } catch (error) {
    //   console.error(error);
    //   alert("일정 등록 실패");
    // }

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
      <ScheduleTitle>일정 추가하기</ScheduleTitle>
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
          <SubmitButton type="submit" label="등록하기" />
        </FormBtn>
      </form>
    </WrapStyle>
  );
};

export default DetailModal;
