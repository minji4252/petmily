import axios from "axios";

const userPk = sessionStorage.getItem("userPk");

// 다가오는 일정 중 상위 3개를 불러옵니다.(6/12 최종)
export const getUpcoming = async () => {
  try {
    const response = await axios.get(`api/todolist/upcoming?user_id=${userPk}`);
    // console.log(response);

    // "data" 배열에서 "content" 필드만 추출하여 반환합니다.
    return response.data.data.map(item => item.content);
  } catch (error) {
    console.error(error);
    return [];
  }
};

// 동물 친구들 사진 불러오기 (보류)
// export const getMainpet = async () => {
//   try {
//     const response = await axios.get(`api/pet?user_id=1`);
//     console.log(response);
//     return response.data.data.map(pet => pet.petImage);
//   } catch (error) {
//     console.error(error);
//   }
// };

// 메인 상단 랜덤 사진 불러오기
export const getMainbanner = async () => {
  try {
    const response = await axios.get("/api/mainbanner");
    console.log(response);
    if (response.data && response.data.data) {
      return response.data.data.map(item => `/pic/main/${item.imageUrl}`);
    } else {
      throw new Error("No data found");
    }
  } catch (error) {
    console.error(error);
    return [];
  }
};

// 메인 하단 이벤트 슬라이더 불러오기 (6/14)
export const getEventbanner = async () => {
  try {
    const response = await axios.get("/api/eventbanner?page=1&size=4");

    if (response.data && response.data.data) {
      return response.data.data.map(item => `/pic/event/${item.imageUrl}`);
    } else {
      throw new Error("No data found");
    }
  } catch (error) {
    console.error(error);
    return [];
  }
};

// 동물 친구들 사진 랜덤으로 불러오기
export const getMainpet = async () => {
  try {
    const response = await axios.get(`api/pet?user_id=59`);
    console.log(response);
    if (response.data && response.data.data) {
      return response.data.data.map(item => `/pic/pet/${item.petImage}`);
    } else {
      throw new Error("No data found");
    }
  } catch (error) {
    console.error(error);
    return [];
  }
};
