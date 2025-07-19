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

  let str = "";

  const handleBtnClick = (e) => {
    str += e.target.value;
  };

  return (
    <center id="calculator">
      <input id="calInput" type="text" />
      <div id="btn">
        <CustomButton onClick={handleBtnClick} numbers={numbers} />
      </div>
    </center>
  );
}

export default App;
