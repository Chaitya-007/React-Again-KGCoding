import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.calculator}>
      <input type="text" id="display" />
      <div id="buttons-container">
        <button>C</button>
      </div>
    </div>
  );
}

export default App;
