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

function Assignment4() {
  function sayHello() {
    alert("hello");
  }
  return (
    <div className="container">
      <h1>Assignment 4</h1>
      <h1>Handling user events</h1>
      <ClickEvent />
      <PassingDataEvent />
      <PassingFunctions theFunction={sayHello} />
      <EventObject />
      <h1>Managing Component State</h1>
      <Counter />
      <BooleanStateVariables />
      <StringStateVariables />
      <DateStateVariable />
      <ObjectStateVariable />
      <ArrayStateVariable />
      <ParentStateComponent/>
    </div>
  );
}

export default Assignment4;
