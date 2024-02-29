import { useDispatch, useSelector } from "react-redux";
import { LabState, TodoType } from "../../../store";
import { deleteTodo, setTodo } from "./todoReducer";

function TodoItem({ todo } : {todo : TodoType}) {
  const dispatch = useDispatch();
  return (
    <li key={todo.id} className="list-group-item">
      <button
        className="btn btn-danger me-1"
        onClick={() => dispatch(deleteTodo(todo.id))}
      >
        Delete
      </button>
      <button
        className="btn btn-primary me-1"
        onClick={() => dispatch(setTodo(todo))}
      >
        Edit
      </button>
      {todo.title}
    </li>
  );
}
export default TodoItem;
