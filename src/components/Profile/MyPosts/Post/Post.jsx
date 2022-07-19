import React from "react";
import styles from "./Post.module.css";

function Post(props) {
  console.log(props);
  return (
    <div className={styles.item}>
      <img src="./images/male-avatar.svg" />
      {props.message}
      <div>
        <span>like {props.likesCount}</span>
      </div>
    </div>
  );
}

export default Post;
