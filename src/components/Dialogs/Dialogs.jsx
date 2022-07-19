import React from "react";
import styles from "./Dialogs.module.css";

function Dialogs(props) {
  return (
    <div>
      <h1>Dialogs</h1>
      <div className={styles.dialogs}>
        <div className={styles.dialogsItems}>
          <div className={styles.dialog + " " + styles.activeDialog}>Anna</div>
          <div className={styles.dialog}>Alex</div>
          <div className={styles.dialog}>Ivan</div>
          <div className={styles.dialog}>Anton</div>
          <div className={styles.dialog}>Nikita</div>
          <div className={styles.dialog}>Nelly</div>
        </div>
        <div className={styles.messages}>
          <div className={styles.message}>How is your React?</div>
          <div className={styles.message}>I would like to play Catan-game</div>
          <div className={styles.message}>Do you know TypeScript?</div>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
