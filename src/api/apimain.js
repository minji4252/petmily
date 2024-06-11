import axios from "axios";

// 메인 하단 슬라이드 API(보류)
// export const getSlider = async ({ a, b }) => {
//   try {
//     const rqData = `/api/eventBanner?page=1&size=4`;
//     const response = await axios.get(rqData);
//   } catch (error) {
//     console.log(error);
//   }
// };

// 다가오는 일정 중 상위 3개를 불러옵니다.(6/11 오류 떠서 보류)
// export const getUpcoming = async () => {
//   try {
//     const response = await axios.get(`/api/todolist/upcoming?user_id=12`);
//     console.log(response);

//     // "data" 배열에서 "content" 필드만 추출하여 반환합니다.
//     return response.data.data.map(item => item.content);
//   } catch (error) {
//     console.error(error);
//   }
// };

// 다가오는 일정 중 상위 3개를 불러옵니다.
export const getUpcoming = async ({ 블라블라 }) => {
  try {
    const rqData = `/api/todolist/upcoming?user_id=1`;
    const response = await axios.get(rqData);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};
