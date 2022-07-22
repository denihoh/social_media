import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts(props) {
  let myPosts = props.posts.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} />
  ));

  function addPost() {
    debugger;
    let text = newPostElement.current.value;
    props.addPost(text);
  }
  let newPostElement = React.createRef();
  return (
    <div>
      <h3> My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div className={styles.buttons}>
          <button onClick={addPost} className={styles.buttonAdd}>
            Add post
          </button>
          <button className={styles.buttonRemove}>Remove</button>
        </div>
      </div>
      <div className={styles.posts}>{myPosts}</div>
    </div>
  );
}

export default MyPosts;
