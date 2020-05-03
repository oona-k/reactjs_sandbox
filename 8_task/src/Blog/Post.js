import React from "react";
import { useParams, Link } from "react-router-dom";
import postdata from "./postdata";

const Post = () => {
  let { postId } = useParams();
  let post = postdata.find((p) => p.title === postId);
  console.log("post");
  return (
    <div>
      <div>
        <img src={post.img} alt={post.title} />
      </div>
      <div>
        <h1>{post.title}</h1>
        <p>{post.desc}</p>
        <Link to="./blog">Back to Blog page</Link>
      </div>
    </div>
  );
};

export default Post;
