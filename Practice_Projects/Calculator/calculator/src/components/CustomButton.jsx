import styles from "./CustomButton.module.css";

function CustomButton({ numbers }) {
  return (
    <>
      {numbers.map((num) => (
        <span className={styles.spanButton}>{num}</span>
      ))}
    </>
  );
}

export default CustomButton;
