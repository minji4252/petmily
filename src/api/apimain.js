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

// 다가오는 일정 중 상위 3개를 불러옵니다.(6/12 최종)
export const getUpcoming = async () => {
  try {
    const response = await axios.get(`api/todolist/upcoming?user_id=1`);
    // console.log(response);

    // "data" 배열에서 "content" 필드만 추출하여 반환합니다.
    return response.data.data.map(item => item.content);
  } catch (error) {
    console.error(error);
  }
};

// 동물 친구들 사진 불러오기
export const getMainpet = async () => {
  try {
    const response = await axios.get(`api/pet?user_id=1`);
    console.log(response);
    return response.data.data.map(pet => pet.petImage);
  } catch (error) {
    console.error(error);
  }
};
