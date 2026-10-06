import { useState } from 'react';
import './App.css';
import alienBg from './assets/ben10.jpg';

function CalcDisplay({ displayValue }) {
  return (
    <div className="display">
      {displayValue}
    </div>
  );
}

function CalcButton({ buttonLabel, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {buttonLabel}
    </button>
  );
}

function App() {
  const [displayValue, setDisplayValue] = useState("0");

  const buttonClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
  };

  return (
    <div className="App">
      <div className="Header">Calculator of Abrham Beaver Layug - WMD 3A</div>
      <div className="calculator">
        <CalcDisplay displayValue={displayValue} />

        <div className="keypad">
          <CalcButton buttonLabel={("1")} onClick={buttonClickHandler} />
          <CalcButton buttonLabel={("2")} onClick={buttonClickHandler} />
          <CalcButton buttonLabel={("3")} onClick={buttonClickHandler} />
          <CalcButton buttonLabel={("/")} onClick={buttonClickHandler} />
          <CalcButton buttonLabel={("4")} onClick={buttonClickHandler} />
          <CalcButton buttonLabel={("5")} onClick={buttonClickHandler} />
          <CalcButton buttonLabel={("6")} onClick={buttonClickHandler} />
          <CalcButton buttonLabel={("*")} onClick={buttonClickHandler} />
          <CalcButton buttonLabel={("7")} onClick={buttonClickHandler} />
          <CalcButton buttonLabel={("8")} onClick={buttonClickHandler} />
          <CalcButton buttonLabel={("9")} onClick={buttonClickHandler} />
          <CalcButton buttonLabel={("-")} onClick={buttonClickHandler} />
          <CalcButton buttonLabel={("CLR")} onClick={buttonClickHandler} />
          <CalcButton buttonLabel={("0")} onClick={buttonClickHandler} />
          <CalcButton buttonLabel={("=")} onClick={buttonClickHandler} />
          <CalcButton buttonLabel={("+")} onClick={buttonClickHandler} />
        </div>
      </div>
    </div>
  );
}

export default App;