import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./DialogItem.module.css";

function DialogItem(props) {
  let path = "/dialogs/" + props.id;
  return (
    <div className={styles.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
}

export default DialogItem;
