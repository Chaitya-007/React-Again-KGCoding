import CustomButton from "./components/CustomButton";
import { useState } from "react";
import "./App.css";

function App() {
  let numbers = [
    "C",
    1,
    2,
    "+",
    3,
    4,
    "-",
    5,
    6,
    "*",
    7,
    8,
    "/",
    "=",
    9,
    0,
    ".",
  ];

  let [str, setStr] = useState("");

  const onButtonClick = (num) => {
    if (num === "C") {
      setStr("");
      return;
    } else if (num === "=") {
      setStr(eval(str));
      return;
    }

    let newStr = str;
    newStr += num;
    setStr(newStr);
  };

  return (
    <center id="calculator">
      <input id="calInput" type="text" value={str} readOnly />
      <div id="btn">
        <CustomButton handleButtonClick={onButtonClick} numbers={numbers} />
      </div>
    </center>
  );
}

export default App;
