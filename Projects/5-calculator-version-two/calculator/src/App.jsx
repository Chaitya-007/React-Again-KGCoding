import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";
import styles from "./App.module.css";

function App() {
  let [calVal, setVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setVal("");
      return;
    } else if (buttonText === "=") {
      setVal(eval(calVal).toString());
    } else {
      setVal(calVal + buttonText);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal} />
      <ButtonsContainer onButtonClick={onButtonClick} />
    </div>
  );
}

export default App;
