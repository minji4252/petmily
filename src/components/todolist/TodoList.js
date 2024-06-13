import { useEffect } from "react";
import "../../styles/TodoList/left.css";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todos, onRemove, onToggle, openModifyModal }) => {
  return (
    <div className="TodoList">
      {todos.map(todo => (
        <TodoListItem
          key={todo.listId}
          todo={todo}
          onRemove={onRemove}
          onToggle={onToggle}
          openModifyModal={openModifyModal}
        />
      ))}
    </div>
  );
};

export default TodoList;
