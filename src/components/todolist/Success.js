import SuccessItem from "./SuccessItem";

const Success = ({ todos, onRemove, onToggle }) => {
  return (
    <div className="TodoList">
      {todos.map(todo => (
        <SuccessItem key={todo.id} todo={todo} onToggle={onToggle} />
      ))}
    </div>
  );
};

export default Success;
