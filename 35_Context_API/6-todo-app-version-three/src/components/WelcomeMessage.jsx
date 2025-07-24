import { useContext } from "react";
import styles from "./WelcomeMessage.module.css";
import { TodoitemsContext } from "../store/todo-items-store";

const WelcomeMessage = () => {
  const todoItems = useContext(TodoitemsContext);

  return (
    todoItems.length === 0 && <p className={styles.welcome}>Enjoy your day!</p>
  );
};

export default WelcomeMessage;
