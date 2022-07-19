import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts() {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <div className={styles.posts}>
        <Post message="It is a nice day" likesCount={15} />
        <Post message="The weather is fine!" likesCount={20} />
      </div>
    </div>
  );
}

export default MyPosts;
