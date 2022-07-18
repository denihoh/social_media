import React from "react";
import styles from "./Profile.module.css";

function Profile() {
  return (
    <div className={styles.content}>
      <div>
        <img width={400} height={300} src="./images/mountains.jpg" />
      </div>
      <div className={styles.user_info}>
        <img src="./images/deer.svg" />
        <p>Description</p>
      </div>
      <div>
        My posts
        <div>New post</div>
        <div className={styles.posts}>
          <div className={styles.item}>Post 1</div>
          <div className={styles.item}>Post 2</div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
