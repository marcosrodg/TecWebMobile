import "../index.css";
import React from "react";

function Operators(props) {

  return (
    <div className="operators">
        <button onClick={() => props.whenClick("/")}>/</button>
        <button onClick={() => props.whenClick("*")}>*</button>
        <button onClick={() => props.whenClick("+")}>+</button>
        <button onClick={() => props.whenClick("-")}>-</button>
        <button onClick={() => props.delClick()}>DEL</button>
    </div>

  );
}

export default Operators;