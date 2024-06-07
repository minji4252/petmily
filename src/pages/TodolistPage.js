import { useRef, useState } from "react";
import TodoLeft from "../components/todolist/TodoLeft";
import TodoRight from "../components/todolist/TodoRight";
import TodoTemplate from "../components/todolist/TodoTemple";
import "../styles/TodoList/left.css";
import Clear from "../components/todolist/Clear";
import useClearModal from "../components/todolist/useClearModal";
import useModifyModal from "../components/todolist/useModifyModal.js";

const initState = [
  {
    id: 1,
    text: "반갑습니다",
    checked: true,
  },
  {
    id: 2,
    text: "이건",
    checked: true,
  },
  {
    id: 3,
    text: "기본 리스트들입니다",
    checked: true,
  },
];
const TodolistPage = () => {
  const [todos, setTodos] = useState(initState);
  const [modifyValue, setModifyValue] = useState("");

  // id는 고유한 값이어야 한다.
  const nextId = useRef(4);

  /* todos 배열에 새 객체 추가*/

  const onInsert = text => {
    if (text == "") {
      alert("공백은 넣을 수 없습니다.");
    } else {
      const todo = {
        id: nextId.current,
        text,
        checked: true,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    }
  };

  const modifyInsert = (id, newText) => {
    // id에 해당하는 할 일을 찾아서 텍스트를 수정
    const modifiedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, text: newText };
      }
      return todo;
    });
  };

  // 삭제 기능
  const onRemove = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // 토글 기능
  const onToggle = id => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    );
  };

  const { clearModalOpen, openClearModal, clearNo, clearYes, clearModalRef } =
    useClearModal({ todos, setTodos });

  const { openModifyModal, modifyModalRef, modifyYes, modifyNo } =
    useModifyModal({
      modifyInsert,
      todos,
    });

  return (
    <TodoTemplate>
      <TodoLeft
        openClearModal={openClearModal}
        todos={todos}
        onRemove={onRemove}
        onToggle={onToggle}
      ></TodoLeft>
      <TodoRight
        modifyInsert={modifyInsert}
        modifyModalRef={modifyModalRef}
        onInsert={onInsert}
        todos={todos}
        onRemove={onRemove}
        onToggle={onToggle}
        openModifyModal={openModifyModal}
        modifyYes={modifyYes}
        modifyNo={modifyNo}
      ></TodoRight>
      <Clear
        clearModalRef={clearModalRef}
        clearNo={clearNo}
        clearYes={clearYes}
      ></Clear>
    </TodoTemplate>
  );
};

export default TodolistPage;
