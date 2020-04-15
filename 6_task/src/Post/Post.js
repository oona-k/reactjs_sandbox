import React from "react";
import "./Post.css";

const Post = (props) => {
  return (
    <div className="post">
      <h2>{props.title}</h2>
      <p><em>{props.author}</em></p>
      <p>{props.desc}</p>
      <img src={props.img} alt={props.title} />
    </div>
  );
};

export default Post;
