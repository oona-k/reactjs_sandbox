import React from "react";
import { useParams, Link } from "react-router-dom";
import Postdata from "./Postdata";

import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

const Post = () => {
  let { postId } = useParams();
  let post = Postdata.find((p) => p.title === postId);
  console.log("post");
  return (
    <Container style={{ marginTop: "20px" }}>
      <div>
        <Image src={post.img} alt={post.title} fluid rounded />
      </div>
      <div>
        <h1>{post.title}</h1>
        <p>{post.desc}</p>
        <Link to="../blog">Back to Blog</Link>
      </div>
    </Container>
  );
};

export default Post;
