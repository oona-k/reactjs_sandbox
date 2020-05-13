import React from "react";

import './Home.css';

import Container from 'react-bootstrap/Container';

const Home = () => {
  return (
    <div id="home">
      <Container className="homeContainer">
      <h1>Welcome to my homepage!</h1>
      <h5>Here you can read blog posts or write a new post</h5>
      </Container>
    </div>
  );
};

export default Home;
