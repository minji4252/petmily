import axios from "axios";

// 동물 등록
export const registerPet = async ({
  user_id,
  pet_name,
  pet_category,
  pet_image,
  pet_icon,
  pet_back_color,
}) => {
  try {
    const response = await axios.post("(임시)api/pet", {
      user_id,
      pet_name,
      pet_category,
      pet_image,
      pet_icon,
      pet_back_color,
    });
    console.log(response.data);
  } catch (error) {
    console.log(error);
    return error;
  }
};
