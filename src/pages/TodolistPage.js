import { useRef, useState } from "react";
import TodoLeft from "../components/todolist/TodoLeft";
import TodoRight from "../components/todolist/TodoRight";
import TodoTemplate from "../components/todolist/TodoTemple";
import "../styles/TodoList/left.css";

const initState = [
  {
    id: 1,
    text: "리액트의 기초 알아보기",
    checked: true,
  },
  {
    id: 2,
    text: "컴포넌트의 이해",
    checked: true,
  },
  {
    id: 3,
    text: "할 일 앱 만들어 보기",
    checked: true,
  },
];

const TodolistPage = () => {
  const [todos, setTodos] = useState(initState);

  // id는 고유한 값이어야 한다.
  const nextId = useRef(4);

  /* todos 배열에 새 객체 추가*/
  const onInsert = text => {
    const todo = {
      id: nextId.current,
      text,
      checked: true,
    };
    setTodos(todos.concat(todo));
    nextId.current += 1;
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

  return (
    <TodoTemplate>
      <TodoLeft
        todos={todos}
        onInsert={onInsert}
        onRemove={onRemove}
        onToggle={onToggle}
      ></TodoLeft>
      <TodoRight
        todos={todos}
        onRemove={onRemove}
        onToggle={onToggle}
        onInsert={onInsert}
      ></TodoRight>
    </TodoTemplate>
  );
};

export default TodolistPage;
