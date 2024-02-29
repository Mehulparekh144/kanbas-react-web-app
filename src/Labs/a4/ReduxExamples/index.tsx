import React from "react";
import HelloRedux from "./HelloRedux";
import CounterRedux from "./CounterRedux";
import AddRedux from "./AddRedux";

const ReduxExamples = () => {
  return (
    <div>
      <h2>
        <b>Redux Examples</b>
      </h2>
      <HelloRedux />
      <CounterRedux />
      <AddRedux />
    </div>
  );
};

export default ReduxExamples;
