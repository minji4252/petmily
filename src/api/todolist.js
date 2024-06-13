import axios from "axios";

export const getTodoList = async () => {
  try {
    const rqData = "/api/todolist?user_id=12";
    const response = await axios.get(rqData);
    return response.data.data;
  } catch (error) {
    console.log("error");
  }
};

export const postTodoInsert = async data => {
  try {
    const rqData = "/api/todolist";
    const response = await axios.post(rqData, data);
    if (response.data.code === "SU") {
      console.log("등록완료");
      return "회원가입 성공";
    } else {
      return response.data;
    }
  } catch (error) {
    console.log("error");
  }
};

export const deleteTodoList = async listId => {
  try {
    const rqData = `/api/todolist?list_id=${listId}`;
    console.log(rqData);
    const response = await axios.delete(rqData);
    if (response.data.code === "SU") {
      console.log("등록완료");
      return "회원가입 성공";
    } else {
      return response.data;
    }
  } catch (error) {
    console.log("error");
  }
};
