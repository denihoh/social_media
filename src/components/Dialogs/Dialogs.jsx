import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

function Dialogs(props) {
  let dialogsElements = props.state.dialogs.map((dialog) => (
    <DialogItem id={dialog.id} name={dialog.name} />
  ));

  let messagesElements = props.state.messages.map((msg) => (
    <Message id={msg.id} message={msg.message} />
  ));

  return (
    <div>
      <h1>Dialogs</h1>
      <div className={styles.dialogs}>
        <div className={styles.dialogsItems}>{dialogsElements}</div>
        <div className={styles.messages}>{messagesElements}</div>
      </div>
    </div>
  );
}

export default Dialogs;
