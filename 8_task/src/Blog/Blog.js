import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

import postdata from "./postdata";
import Post from "./Post";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const Blog = () => {
  let match = useRouteMatch();
  const post = postdata;
  console.log(match);
  console.log(post);
  const blogList = post.map((post, index) => {
    return (
      <div key={post.id}>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={post.img} alt={post.title} />
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>{post.desc}</Card.Text>

              <Link style={{ color: "blue" }} to={`${match.url}/${post.title}`}>
                Read More
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </div>
    );
  });

  return (
    <div>
      <Switch>
        <Route path="/blog/:postId">
          <Post />
        </Route>
        <Route path={match.path}>{blogList}</Route>
      </Switch>
    </div>
  );
};

export default Blog;
