import React from "react";
import ClickEvent from "./ClickEvent";
import PassingDataEvent from "./PassingDataEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariable";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import ReduxExamples from "./ReduxExamples";
import { Provider } from "react-redux";
import store from "../store";
import TodoList from "./ReduxExamples/todos/TodoList";

function Assignment4() {
  function sayHello() {
    alert("hello");
  }
  return (
    <Provider store={store}>
      <div className="container">
        <h1>Assignment 4</h1>
        <hr />
        <h1>To do List</h1>
        <TodoList />
        <hr />
        <h1>Managing Application State</h1>
        <ReduxExamples />
        <hr />
        <h1>Handling user events</h1>
        <ClickEvent />
        <PassingDataEvent />
        <PassingFunctions theFunction={sayHello} />
        <EventObject />
        <hr />
        <h1>Managing Component State</h1>
        <Counter />
        <BooleanStateVariables />
        <StringStateVariables />
        <DateStateVariable />
        <ObjectStateVariable />
        <ArrayStateVariable />
        <ParentStateComponent />
      </div>
    </Provider>
  );
}

export default Assignment4;
