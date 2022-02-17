import React, { useState } from "react"
import "./Calculator.css"
let Pre_Calculator = function(props) {
    
    var operationButtons = document.querySelectorAll(".operation-button");
    var [result, setResult] = useState(0);
    var [valueInp1, setValue1] = useState("");
    var [valueInp2, setValue2] = useState("");

    var inp1 = document.getElementById("ddw1");
    var inp2 = document.getElementById("ddw2");

    let makeOperation = function (operationCode) {
        console.log("сколько раз") 
    var number1 = Number(inp1.value);
    var number2 = Number(inp2.value);
    var out = document.querySelector(".out").innerHTML
    if (operationCode === "+") {
        setResult(number1 + number2);
        console.log(result)
        
        
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
    console.log(event.currentTarget.innerHTML)
    makeOperation(opertion);
    }

    for (var i = 0; i < operationButtons.length; i++) {
    var button = operationButtons[i];
    button.addEventListener("click", onOperationButtonClick);
    }
    let changeValue = (e) => {
        console.log(e.target.id)
        e.target.id === "ddw1" ? setValue1(e.target.value) : setValue2(e.target.value)
    }



}
    


    
export default Pre_Calculator
