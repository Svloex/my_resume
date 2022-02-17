import React, { useEffect, useState } from "react"
import "./Calculator.css"
let Calculator = function(props) {
    var operationButtons = document.querySelectorAll(".operation-button");
    var [result, setResult] = useState(0);
    var [valueInp1, setValue1] = useState("");
    var [valueInp2, setValue2] = useState('');
    var [opertion, setOpertion] = useState('');
    useEffect(() => {
        document.title = "Calculator"
 console.log("Я в калькуляторе")
    }, []);
console.log(result)
    var inp1 = document.getElementById("ddw1");
    var inp2 = document.getElementById("ddw2");

    let makeOperation = function (operationCode) {
        console.log("сколько раз") 
    var number1 = Number(inp1.value);
    var number2 = Number(inp2.value);
    if (operationCode === "+") {
        setResult(number1 + number2);
        console.log(result,number1 + number2)
        
        
    } else if (operationCode === "-") {
        
        setResult(number1 - number2);
         console.log(result)
       
    } else if (operationCode === "*") {
        
        setResult(number1 * number2);
         console.log(result)
       
    } else if (operationCode === "/") {
        
        setResult(number1 / number2);
         console.log(result)
        
    } else {
        alert("operation is unknown");
    }
    
    }

    var onOperationButtonClick = function(event) {
    var opertion = event.currentTarget.innerHTML;
    setOpertion(opertion)
    console.log(event.currentTarget.innerHTML)
    makeOperation(opertion);
    }

    for (var i = 0; i < operationButtons.length; i++) {
    var button = operationButtons[i];
    button.addEventListener("click", onOperationButtonClick);
    }
    let changeValue = (e) => {
        console.log(e.target.id)
        console.log(typeof e.target.value)
        e.target.id === "ddw1" ? setValue1(e.target.value) : setValue2(e.target.value)
    }
    return(
    <div>
    <div className="jsloex_calculate">
        <div className="operation_block">
            <button className="operation-button" onClick={onOperationButtonClick} id="butPlus">+</button>
            <button className="operation-button" onClick={onOperationButtonClick} id="butMinus">-</button>
            <button className="operation-button" onClick={onOperationButtonClick} id="butMultiply">*</button>
            <button className="operation-button" onClick={onOperationButtonClick} id="butDevide">/</button>
        </div>
        <div>
            <hr />
        </div>
        <div className="inputs_block">
            <div className="input_block">
                <label >number 1</label>
                <input id="ddw1" type="number" value={valueInp1} onChange={(e)=>{changeValue(e)}} />
            </div>
            <div className="input_block">
                <label >number 2</label>
                <input id="ddw2" type="number" value={valueInp2} onChange={(e)=>{changeValue(e)}} />
            </div>
            <div>
                <br />
                <div className="out">{`${valueInp1} ${opertion} ${valueInp2} = ${result}`}</div>
            <hr />

            </div>
        </div>
    </div>
    
    </div>
    )
    }
export default Calculator
