import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";
import styles from "./App.module.css";

function App() {
  let [calVal, setVal] = useState("");

  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal} />
      <ButtonsContainer />
    </div>
  );
}

export default App;
