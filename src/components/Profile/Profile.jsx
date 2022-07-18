import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import styles from "./Profile.module.css";

function Profile() {
  return (
    <div className={styles.content}>
      <div>
        <img width={400} height={300} src="./images/mountains.jpg" />
      </div>
      <MyPosts />
    </div>
  );
}

export default Profile;
