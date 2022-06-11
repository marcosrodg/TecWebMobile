import "../index.css";
import React from "react";

function Digits(props) {
    const createDigits = () => {
        const digits = []
    
        for (let i = 1; i <10; i++){
          digits.push(
            <button  
                onClick={() => props.whenClick(i.toString()
                )} key={i}>{i}</button>
          )
        }
        return digits;
      }

  return (
    <div className="digits">
        {createDigits()}
        <button onClick={() => props.whenClick('0')}>0</button>
        <button onClick={() => props.whenClick('.')}>.</button>
        <button onClick={() => props.valueClick()}>=</button>
    </div>
  );
}

export default Digits;