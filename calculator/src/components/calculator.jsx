import "../index.css";
import Digits from './digits'
import Display from './display'
import Operators from './operators'
import {useState} from 'react';

function Calculator() {

    const [calc,setCalc] = useState("");
    const [result,setResult] = useState("");


    const ops = ['+', '-', '*', '/', '.'];

    const updateCalc = value => {
        if (
            (ops.includes(value)) && (calc === '') ||
            (ops.includes(value)) && (ops.includes(calc.slice(-1)))
        ){
            return;
        }
        setCalc(calc + value);

        if(!ops.includes(value)) {
            setResult(eval(calc + value).toString());
        }
    }

    const calculate = () => {
        setCalc(eval(calc).toString());
        setResult("");
    }

    const clear = () =>{
        if(calc == ""){
            return;
        }
        const value = calc.slice(0, -1);
           
        setCalc(value);
        setResult(value);
        
    };

    return (
        <div className="calculator">
        
          <Display result={result} calc={calc}/>
          <Operators delClick={clear} whenClick={updateCalc}/>
          <Digits valueClick={calculate} whenClick={updateCalc}/>    
        </div>  
    );
  }
  
  export default Calculator;