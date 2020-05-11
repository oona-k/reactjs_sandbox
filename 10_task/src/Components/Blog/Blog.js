import React, { useState, useEffect } from "react";
import axios from "axios";

import PostCard from "../PostCard/PostCard";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import postdata from "../../postdata";
import FullPost from "../FullPost/FullPost";

import CardGroup from 'react-bootstrap/CardGroup';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const Blog = () => {
  const [post, setPost] = useState([]);
  let match = useRouteMatch();

  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response) => {
      {
        const posts = response.data.slice(0, 10);

        setPost(posts);
        console.log(posts);
      }
    });
  }, []);

  const removeHandler = (id) => {
    console.log(id);
    axios
      .delete("http://localhost:3001/posts/" + id)
      .then(() => {
        return axios.get("http://localhost:3001/posts");
      })
      .then((response) => {
        setPost(response.data);
      });
  };

  const PostList = post.map((p) => {
    return (
      <PostCard
        key={p.id}
        title={p.title}
        desc={p.desc}
        img={p.img}
        link={`${match.url}/${p.id}`}
        remove={() => removeHandler(p.id)}
      />

    );
  });

  return (
    <>
      <Switch>
        <Route path="/blog/:postId">
          <FullPost />
        </Route>
        <Route path={match.path}>
          <div>
            <Container fluid="md">
            <h1 style={{padding: "15px"}}>Blog</h1>
          <CardGroup>{PostList}</CardGroup>
          </Container>
          </div>
        </Route>
      </Switch>
    </>
  );
};

export default Blog;