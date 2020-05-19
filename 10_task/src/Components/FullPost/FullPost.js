import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./FullPost.css";
import axios from "axios";


import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

const FullPost = () => {
  const [loadedPost, setLoadedPost] = useState();
  let { postId } = useParams();

  useEffect(() => {
    if (!loadedPost) {
      axios.get("http://localhost:3001/posts/" + postId).then((response) => {
        console.log(response.data);
        setLoadedPost(response.data);
      });
    }
  });

  let postData = undefined;
  if (postId) {
    postData = <h1>Loading post</h1>;
  }
  if (loadedPost) {
    postData = (
      <div id="fullPost">
        <Container className="fullPostContainer">
          <h1>Post {loadedPost.id}</h1>
          <h4>{loadedPost.title}</h4>
          <Image src={loadedPost.img} alt={loadedPost.title} fluid />
          <p>{loadedPost.desc}</p>
          <Link to="/blog">Back to blog</Link>
        </Container>
      </div>
    );
  }

  return postData;
};

export default FullPost;
