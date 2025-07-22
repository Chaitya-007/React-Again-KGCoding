import styles from "./FoodInput.module.css";

const FoodInput = ({ handleChange }) => {
  return (
    <input
      type="text"
      placeholder="Enter food item"
      className={styles.foodInput}
      onChange={(event) => handleChange(event)}
    />
  );
};

export default FoodInput;
