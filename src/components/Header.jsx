import { IoIosMore } from "react-icons/io";
import { BiUserCircle } from "react-icons/bi";

import styles from "../styles/Header.module.css";

const Header = ({ children }) => {
  return (
    <header className={styles.container}>
      <nav className={styles.menu_container}>
        <IoIosMore className={styles.nav_icons} />
        <BiUserCircle className={styles.nav_icons} />
      </nav>
      <h1 className={styles.title}>{children}</h1>
    </header>
  );
};

export default Header;
