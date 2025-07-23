import styles from "./WelcomeMessage.module.css";

const WelcomeMessage = ({ todoItems }) => {
  return <p className={styles.welcome}>Enjoy your day!</p>;
};

export default WelcomeMessage;
