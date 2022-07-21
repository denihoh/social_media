import React from "react";
import styles from "./ProfileInfo.module.css";

function ProfileInfo(props) {
  return (
    <div>
      <img className={styles.avatar} src="./images/mountains.jpg" />
    </div>
  );
}

export default ProfileInfo;
