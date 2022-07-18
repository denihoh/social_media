import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <img width={70} height={70} src="./images/logo-social.svg" />
    </header>
  );
}

export default Header;
