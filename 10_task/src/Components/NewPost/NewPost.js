import React, { useState } from "react";
import "./NewPost.css";
import axios from "axios";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const NewPost = () => {
  const [newPost, setNewPost] = useState({
    title: "",
    desc: "",
    img: "",
  });

  const changeValueHandler = (e) => {
    setNewPost({
      ...newPost,
      [e.target.name]: e.target.value,
    });
  };

  const addPostHandler = (e) => {
    e.preventDefault();

    axios.post("http://localhost:3001/posts", newPost).then((response) => {
      console.log(response.data);
    });
  };

  return (
    <div className="newPost">
      <Container className="newPostContainer">
        <Col xl={{ span: 8, offset: 2 }}>
          <h1>Add New Post</h1>
          <Form>
            <Form.Group as={Row} controlId="title">
              <Col sm={2}>
                <Form-Label>Title</Form-Label>
              </Col>
              <Col sm={10}>
                <Form.Control
                  type="text"
                  name="title"
                  onChange={changeValueHandler}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="desc">
              <Col sm={2}>
                <Form-Label>Description</Form-Label>
              </Col>
              <Col sm={10}>
                <Form.Control
                  as="textarea"
                  name="desc"
                  onChange={changeValueHandler}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="img">
              <Col sm={2}>
                <Form-Label>Image URL</Form-Label>
              </Col>
              <Col sm={10}>
                <Form.Control
                  type="text"
                  name="img"
                  onChange={changeValueHandler}
                />
              </Col>
            </Form.Group>
            <div style={{ textAlign: "center" }}>
              <Button variant="info" onClick={addPostHandler} type="submit">
                Add New Post
              </Button>
            </div>
          </Form>
        </Col>
      </Container>
    </div>
  );
};

export default NewPost;
