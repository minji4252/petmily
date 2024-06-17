import axios from "axios";

const userPk = sessionStorage.getItem("userPk");

export const getTodoList = async userPk => {
  try {
    const rqData = `/api/todolist?user_id=${userPk}`;
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
      return response.data.data;
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
    await axios.delete(rqData);
  } catch (error) {
    console.log("error");
  }
};

export const deleteAllTodoList = async () => {
  try {
    const rqData = `/api/todolist/all-delete?user_id=${userPk}`;
    await axios.delete(rqData);
  } catch (error) {
    console.log("error");
  }
};

export const toggleTodoList = async listId => {
  try {
    const rqData = `/api/todolist/is-completed?list_id=${listId}`;
    const response = await axios.patch(rqData);
    return response;
  } catch (error) {
    console.log("error");
  }
};

export const modifyTodoList = async data => {
  try {
    const rqData = `/api/todolist`;
    const response = await axios.patch(rqData, data);
    return response.data.data;
  } catch (error) {
    console.log("error");
  }
};
