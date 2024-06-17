import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  deleteTodoList,
  getTodoList,
  modifyTodoList,
  postTodoInsert,
  toggleTodoList,
} from "../api/todolist";
import AlertModal from "../components/common/AlertModal";
import Clear from "../components/todolist/Clear";
import MobileMenu from "../components/todolist/MobileMenu";
import TodoLeft from "../components/todolist/TodoLeft";
import TodoRight from "../components/todolist/TodoRight";
import TodoTemplate from "../components/todolist/TodoTemple";
import useClearModal from "../components/todolist/useClearModal";
import useModifyModal from "../components/todolist/useModifyModal.js";
import "../styles/TodoList/left.css";

const TodolistPage = () => {
  const [todos, setTodos] = useState([]);
  const [todoInsert, setTodoInsert] = useState("");
  const mobileMenu = useRef(null);
  const todoListRight = useRef(null);
  const todoListLeft = useRef(null);
  const [checked, setChecked] = useState(false);
  const [modifyInsert, setModifyInsert] = useState("");
  const [modifyId, setModifyId] = useState("");
  const [checkedDate, setCheckedDate] = useState("");
  const [realDate, setRealDate] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  const logedid = sessionStorage.getItem("userPk");

  useEffect(() => {
    const fetchTodoList = async () => {
      if (!logedid) {
        navigate("/login");
      } else {
        const result = await getTodoList(logedid);
        if (result) {
          setTodos(result);
        }
      }
    };

    setIsOpen(false);

    fetchTodoList();
  }, [logedid, navigate, todoInsert]);

  const onInsert = async () => {
    setChecked(false);
    if (todoInsert === "") {
      setMessage("공백은 넣을 수 없습니다.");
      setIsOpen(true);
      return;
    } else {
      const requestData = {
        userId: sessionStorage.getItem("userPk"),
        content: todoInsert,
      };
      const result = await postTodoInsert(requestData);
      if (result) {
        const todo = {
          listId: result.listId,
          content: todoInsert,
          isCompleted: checked,
        };
        setTodos(todos.concat(todo));
      }
    }
  };

  const onModifyInsert = listId => {
    setModifyId(listId);
    const numericListId = Number(listId);
    const foundItem = todos.find(item => item.listId === numericListId);
    if (foundItem) {
      setModifyInsert(foundItem.content);
    }
  };

  const modifyYes = async e => {
    e.preventDefault();
    const data = {
      listId: modifyId,
      content: modifyInsert,
    };

    const updatedTodos = todos.map(item => {
      if (item.listId === modifyId) {
        return {
          ...item,
          content: modifyInsert,
        };
      }
      return item;
    });

    setTodos(updatedTodos);
    await modifyTodoList(data);
    if (modifyModalRef.current) {
      modifyModalRef.current.classList.remove("open");
    }
  };

  const onRemove = async listId => {
    setTodos(todos.filter(todo => todo.listId !== listId));
    await deleteTodoList(listId);
  };

  const onToggle = async listId => {
    setTodos(
      todos.map(todo =>
        todo.listId === listId
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo,
      ),
    );

    const result = await toggleTodoList(listId);
    if (result) {
      setCheckedDate(result.headers.date);
      const formatDate = dateString => {
        const date = new Date(dateString);
        const options = { month: "long", day: "numeric" };
        return date.toLocaleDateString("ko-KR", options);
      };
      setRealDate(formatDate(result.headers.date));
    }
  };

  const openMobileMenu = () => {
    mobileMenu.current.style.display = "flex";
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        if (mobileMenu.current) {
          mobileMenu.current.style.display = "none";
          todoListRight.current.style.display = "flex";
          todoListLeft.current.style.display = "flex";
        }
      } else {
        if (mobileMenu.current) {
          todoListRight.current.style.display === "flex"
            ? (todoListLeft.current.style.display = "none")
            : "";
          todoListLeft.current.style.display = "none";
        }
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeMobileMenu = () => {
    mobileMenu.current.style.display = "none";
  };

  const clickTodoList = () => {
    todoListRight.current.style.display = "flex";
    todoListLeft.current.style.display = "none";
    mobileMenu.current.style.display = "none";
  };

  const clickSuccessList = () => {
    todoListRight.current.style.display = "none";
    todoListLeft.current.style.display = "flex";
    mobileMenu.current.style.display = "none";
  };

  const { clearModalOpen, openClearModal, clearNo, clearYes, clearModalRef } =
    useClearModal({ todos, setTodos });

  const { openModifyModal, modifyModalRef, modifyNo } = useModifyModal({
    todos,
  });

  const handleAlertClose = () => {
    setIsOpen(false);
  };

  return (
    <TodoTemplate>
      <AlertModal
        isOpen={isOpen}
        onClose={handleAlertClose}
        message={message}
      ></AlertModal>
      {logedid ? (
        <>
          <TodoLeft
            realDate={realDate}
            openMobileMenu={openMobileMenu}
            todoListLeft={todoListLeft}
            openClearModal={openClearModal}
            todos={todos}
            onRemove={onRemove}
            onToggle={onToggle}
          />
          <TodoRight
            onModifyInsert={onModifyInsert}
            setModifyInsert={setModifyInsert}
            todoInsert={todoInsert}
            setTodoInsert={setTodoInsert}
            todoListRight={todoListRight}
            openMobileMenu={openMobileMenu}
            modifyInsert={modifyInsert}
            modifyModalRef={modifyModalRef}
            onInsert={onInsert}
            todos={todos}
            onRemove={onRemove}
            onToggle={onToggle}
            openModifyModal={openModifyModal}
            modifyYes={modifyYes}
            modifyNo={modifyNo}
          />
          <Clear
            clearModalRef={clearModalRef}
            clearNo={clearNo}
            clearYes={clearYes}
          />
          <MobileMenu
            mobileMenu={mobileMenu}
            closeMobileMenu={closeMobileMenu}
            clickTodoList={clickTodoList}
            clickSuccessList={clickSuccessList}
          />
        </>
      ) : (
        navigate("/login")
      )}
    </TodoTemplate>
  );
};

export default TodolistPage;
