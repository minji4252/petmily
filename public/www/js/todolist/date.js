// 현재 날짜 객체 생성
const today = new Date();

// 년, 월, 일을 가져옴
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 1을 더함
const day = String(today.getDate()).padStart(2, "0");

// 결과 출력
const formattedDate = `${year}-${month}-${day}`;
console.log(formattedDate);
