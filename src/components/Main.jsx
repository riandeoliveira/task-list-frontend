import styles from "../styles/Main.module.css";

const Main = ({ children }) => (
  <main className={styles.container}>{children}</main>
);

export default Main;
