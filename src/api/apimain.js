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

// 메인 상단 랜덤 사진 불러오기
export const getMainbanner = async () => {
  try {
    const response = await axios.get(`api/mainbanner`);
    console.log(response);
    if (response.data && response.data.data) {
      return response.data.data.map(
        item => `/pic/mainbanner/${item.imageUrl}/${item.imageUrl}`,
      );
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
    const response = await axios.get(`api/eventbanner`);

    if (response.data && response.data.data) {
      return response.data.data.map(
        item => `/pic/eventbanner/${item.imageUrl}/${item.imageUrl}`,
      );
    } else {
      throw new Error("No data found");
    }
  } catch (error) {
    console.error(error);
    return [];
  }
};

// 동물 친구들 사진 랜덤으로 불러오기 (6/15)
export const getMainpet = async () => {
  try {
    const response = await axios.get(`api/pet?user_id=${userPk}`);
    console.log(response);
    if (response.data && response.data.data) {
      return response.data.data.map(
        item => `/pic/pet/${item.petId}/${item.petImage}`,
      );
    } else {
      throw new Error("No data found");
    }
  } catch (error) {
    console.error(error);
    return [];
  }
};

// 메인 캘린더의 데이터 불러오기(6/15)
export const getMainpetInfo = async () => {
  try {
    const response = await axios.get(`api/pet?user_id=${userPk}`);
    console.log(response.data);
    return response.data.data; // 데이터를 반환합니다.
  } catch (error) {
    console.error(error);
  }
};
