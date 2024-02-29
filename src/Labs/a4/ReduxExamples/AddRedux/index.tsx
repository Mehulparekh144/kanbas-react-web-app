import React, { useState } from "react";
import { add } from "./addReducer";
import { useDispatch, useSelector } from "react-redux";
import { LabState } from "../../../store";

function AddRedux() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const { sum } = useSelector((state: LabState) => state.addReducer);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Passing Data to Reducers</h2>
      <h3>
        {a} + {b} ={sum}
      </h3>
      <input
        type="number"
        value={a}
        onChange={(e) => setA(parseInt(e.target.value))}
        className="form-control"
      />
      <input
        type="number"
        value={b}
        onChange={(e) => setB(parseInt(e.target.value))}
        className="form-control"
      />
      <button
        className="btn btn-primary"
        onClick={() => dispatch(add({ a, b }))}
      >
        Add Redux
      </button>
    </div>
  );
}

export default AddRedux;
