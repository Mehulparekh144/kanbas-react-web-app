import React from "react";
import todos from "./todos.json";
import TodoItem from "./TodoItem";
function TodoList() {
  return (
    <div>
      <h2>Todo List</h2>
      <ul className="list-group">
        {todos.map((todo) => {
          return <TodoItem todo={todo} />;
        })}
      </ul>
    </div>
  );
}

export default TodoList;
