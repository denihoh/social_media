import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts(props) {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <div className={styles.posts}>
        <Post message="Hi, how are you?" likeCounts={15} />
        <Post message="The weather is fine!" likeCounts={20} />
      </div>
    </div>
  );
}

export default MyPosts;
