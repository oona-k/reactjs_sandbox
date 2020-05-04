import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

import Postdata from "./Postdata";
import Post from "./Post";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import CardGroup from "react-bootstrap/CardGroup";

const Blog = () => {
  let match = useRouteMatch();
  const post = Postdata;

  const blogList = post.map((post, index) => {
    return (
      <Col lg={3} md={3} xs={6}>
        <div key={post.id}>
          <Card>
            <Card.Img variant="top" src={post.img} alt={post.title} />
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>{post.desc}</Card.Text>
              <Link to={`${match.url}/${post.title}`}>Read More</Link>
            </Card.Body>
          </Card>
        </div>
      </Col>
    );
  });
  console.log(blogList);
  return (
    <div>
      <Switch>
        <Route path="/blog/:postId">
          <Post />
        </Route>
        <Route path={match.path}>
          <CardGroup style={{margin: "20px"}}>{blogList}</CardGroup>
        </Route>
      </Switch>
    </div>
  );
};

export default Blog;
