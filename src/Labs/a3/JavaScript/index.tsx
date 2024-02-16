import React from "react";
import VariablesAndConstants from "./variables/VariablesAndConstants";
import VariableTypes from "./variables/VariableTypes";
import BooleanVariables from "./variables/BooleanVariables";
import IfElse from "./conditionals/IfElse";
import TernaryOperator from "./conditionals/TernaryOperator";
import ES5Functions from "./functions/ES5Functions";
import ArrowFunctions from "./functions/ArrowFunctions";
import ImpliedReturn from "./functions/ImpliedReturn";
import FunctionParenthesisAndParameters from "./functions/FunctionParenthesisAndParameters";
import WorkingWithArrays from "./arrays/WorkingWithArrays";
import ArrayIndexAndLength from "./arrays/ArrayIndexAndLength";
import AddingAndRemovingDataToFromArrays from "./arrays/AddingAndRemovingDataToFromArrays";
import ForLoops from "./arrays/ForLoops";
import MapFunction from "./arrays/MapFunction";
import JsonStringify from "./json/JsonStringify";
import FindFunction from "./arrays/FindFunction";
import FindIndex from "./arrays/FindIndex";
import FilterFunction from "./arrays/FilterFunction";
import TemplateLiterals from "./string/TemplateLiterals";
import House from "./json/House";
import Spreading from "./json/Spreading";
import Destructing from "./json/Destructing";
import FunctionDestructing from "./functions/FunctionDestructing";
import PathParameters from "../routing/PathParameters";

function JavaScript() {
  console.log("Hello World !");
  return (
  <div className="px-4 ">
    <h1>JavaScript</h1>
    <h2>Variables Exercises</h2>
    <VariablesAndConstants/>
    <VariableTypes/>
    <BooleanVariables/>
    <hr/>
    <h2>Conditionals Exercises</h2>
    <IfElse/>
    <TernaryOperator/>
    <hr/>
    <h2>Working with functions</h2>
    <ES5Functions/>
    <ArrowFunctions/>
    <ImpliedReturn/>
    <FunctionParenthesisAndParameters/>
    <hr/>
    <h2>Working with arrays</h2>
    <WorkingWithArrays/>
    <ArrayIndexAndLength/>
    <AddingAndRemovingDataToFromArrays/>
    <ForLoops/>
    <MapFunction/>
    <JsonStringify/>
    <FindFunction/>
    <FindIndex/>
    <FilterFunction/>
    <hr/>
    <h2>Template Literals</h2>
    <TemplateLiterals/>
    <hr/>
    <h2>JavaScript Object Notation (JSON)</h2>
    <House/>
    <Spreading/>
    <Destructing/>
    <FunctionDestructing/>
    </div>);
}
export default JavaScript;
