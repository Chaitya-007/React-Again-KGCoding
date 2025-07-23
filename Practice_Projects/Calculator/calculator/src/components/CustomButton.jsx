import styles from "./CustomButton.module.css";

function CustomButton({ numbers, handleButtonClick }) {
  return (
    <>
      {numbers.map((num) => (
        <span
          key={num}
          onClick={() => handleButtonClick(num)}
          className={styles.spanButton}
        >
          {num}
        </span>
      ))}
    </>
  );
}

export default CustomButton;
