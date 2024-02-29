import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import { LabState } from "../../store";
function TodoList() {
  const { todos } = useSelector((state: LabState) => state.todoReducer);
  return (
    <div>
      <h2>Todo List</h2>
      <ul className="list-group">
        {todos.map((todo) => (
          <li className="list-group-item" key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
