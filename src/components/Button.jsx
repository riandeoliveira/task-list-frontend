import styles from "../styles/Button.module.css";

const Button = ({ children }) => {
  return <button className={styles.add_task}>{children}</button>;
};

export default Button;
