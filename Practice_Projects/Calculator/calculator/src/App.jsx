import CustomButton from "./components/CustomButton";
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

  return (
    <center id="calculator">
      <input id="calInput" type="text" />
      <div id="btn">
        <CustomButton numbers={numbers} />
      </div>
    </center>
  );
}

export default App;
