import "../../styles/common.css";
import "../../styles/TodoList/left.css";

const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <div className="inner">
        <div className="todo-main">{children}</div>
      </div>
    </div>
  );
};

export default TodoTemplate;
