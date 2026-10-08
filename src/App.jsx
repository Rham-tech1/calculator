import { useState } from 'react';
import './App.css';

function CalcDisplay({ equation, displayValue }) {
  const isLongText = displayValue.length > 10;

  return (
    <div className="display-container">
      <div className="equation-text">{equation}</div>
      <div className={`main-display ${isLongText ? 'small-text' : ''}`}>
        {displayValue}
      </div>
    </div>
  );
}

function CalcButton({ buttonLabel, onClick, className = "" }) {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {buttonLabel}
    </button>
  );
}

function App() {
  const [displayValue, setDisplayValue] = useState("0");
  const [equation, setEquation] = useState("");
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);
  const [isCalculated, setIsCalculated] = useState(false);

  const buttonClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerText;

    if (value === "Layug") {
      setDisplayValue("Abrham Beaver Yutuc Layug");
      setEquation("");
      setIsCalculated(true);
      return;
    }

    if (value === "C") {
      setDisplayValue("0");
      setEquation("");
      setFirstOperand(null);
      setOperator(null);
      setIsCalculated(false);
      return;
    }

    if (["+", "-", "*", "/"].includes(value)) {
      setFirstOperand(displayValue);
      setOperator(value);
      setEquation(`${displayValue} ${value}`);
      setDisplayValue("0");
      setIsCalculated(false);
      return;
    }

    if (value === "=") {
      if (firstOperand !== null && operator !== null) {
        const num1 = Number(firstOperand);
        const num2 = Number(displayValue);
        let calcResult = 0;

        setEquation(`${firstOperand} ${operator} ${displayValue} =`);

        if (operator === "+") calcResult = num1 + num2;
        else if (operator === "-") calcResult = num1 - num2;
        else if (operator === "*") calcResult = num1 * num2;
        else if (operator === "/") calcResult = num2 !== 0 ? num1 / num2 : "Error";

        setDisplayValue(String(calcResult));
        setFirstOperand(null);
        setOperator(null);
        setIsCalculated(true);
      }
      return;
    }

    if (displayValue === "0" || isCalculated) {
      setDisplayValue(value);
      setIsCalculated(false);
    } else {
      setDisplayValue(displayValue + value);
    }
  };

  return (
    <div className="App">
      <div className="phone-container">
        
        <div className="Header">Calculator of Abrham Beaver Layug - WMD 3A</div>

        <CalcDisplay equation={equation} displayValue={displayValue} />

        <div className="keypad-sheet">
          <div className="drag-handle"></div>

          <div className="keypad">
            <CalcButton buttonLabel="1" className="btn-number" onClick={buttonClickHandler} />
            <CalcButton buttonLabel="2" className="btn-number" onClick={buttonClickHandler} />
            <CalcButton buttonLabel="3" className="btn-number" onClick={buttonClickHandler} />
            <CalcButton buttonLabel="/" className="btn-operator" onClick={buttonClickHandler} />

            <CalcButton buttonLabel="4" className="btn-number" onClick={buttonClickHandler} />
            <CalcButton buttonLabel="5" className="btn-number" onClick={buttonClickHandler} />
            <CalcButton buttonLabel="6" className="btn-number" onClick={buttonClickHandler} />
            <CalcButton buttonLabel="*" className="btn-operator" onClick={buttonClickHandler} />

            <CalcButton buttonLabel="7" className="btn-number" onClick={buttonClickHandler} />
            <CalcButton buttonLabel="8" className="btn-number" onClick={buttonClickHandler} />
            <CalcButton buttonLabel="9" className="btn-number" onClick={buttonClickHandler} />
            <CalcButton buttonLabel="-" className="btn-operator" onClick={buttonClickHandler} />

            <CalcButton buttonLabel="C" className="btn-function" onClick={buttonClickHandler} />
            <CalcButton buttonLabel="0" className="btn-number" onClick={buttonClickHandler} />
            <CalcButton buttonLabel="=" className="btn-operator" onClick={buttonClickHandler} />
            <CalcButton buttonLabel="+" className="btn-operator" onClick={buttonClickHandler} />

            <CalcButton buttonLabel="Layug" className="btn-fullname" onClick={buttonClickHandler} />
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;