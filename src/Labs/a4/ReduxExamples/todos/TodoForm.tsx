import { useDispatch, useSelector } from "react-redux";
import { LabState } from "../../../store";
import { addTodo, setTodo, updateTodo } from "./todoReducer";

function TodoForm() {
  const { todo } = useSelector((state: LabState) => state.todoReducer);
  const dispatch = useDispatch();
  return (
    <li className="list-group-item">
      <button
        className="btn btn-success me-1"
        onClick={() => dispatch(addTodo(todo))}
      >
        {" "}
        Add{" "}
      </button>
      <button
        className="btn btn-warning me-1"
        onClick={() => dispatch(updateTodo(todo))}
      >
        {" "}
        Update{" "}
      </button>
      <input
        className="form-control my-1 "
        value={todo.title}
        onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}
      />
    </li>
  );
}
export default TodoForm;
