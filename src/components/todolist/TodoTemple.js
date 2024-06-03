import "../../styles/font.css";
import "../../styles/global.css";
import "../../styles/TodoList/left.css";

const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">일정관리</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default TodoTemplate;
