
import "../index.css";
import React from "react";

function Display(props) {

  return (
    <div className="display">
        {props.result ? <span>({props.result})</span> : '' }&nbsp;
        {props.calc || "0"}
    </div>
  );
}

export default Display;