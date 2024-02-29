import { configureStore } from "@reduxjs/toolkit";
import helloReducer from "../a4/ReduxExamples/HelloRedux/helloReducer";
import counterReducer from "../a4/ReduxExamples/CounterRedux/counterReducer";
import addReducer from "../a4/ReduxExamples/AddRedux/addReducer";
import todoReducer from "../a4/ReduxExamples/todos/todoReducer";

export interface TodoType {
  id: string;
  title: string;
}

export interface LabState {
  helloReducer: {
    message: string;
  };
  counterReducer: {
    count: number;
  };
  addReducer: {
    sum: number;
  };
  todoReducer: {
    todos: TodoType[];
    todo: TodoType;
  };
}

const store = configureStore({
  reducer: { helloReducer, counterReducer, addReducer, todoReducer },
});

export default store;
