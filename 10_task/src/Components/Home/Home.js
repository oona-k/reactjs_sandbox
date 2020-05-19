import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";

import Container from "react-bootstrap/Container";

const Home = () => {
  return (
    <div id="home">
      <Container className="homeContainer">
        <h1>Welcome to my Homepage!</h1>
        <h5>
          Here you can{" "}
          <Link to="/blog" style={{ color: "rgb(17, 118, 134)" }}>
            read blog posts{" "}
          </Link>{" "}
          or{" "}
          <Link to="/newpost" style={{ color: "rgb(17, 118, 134)" }}>
            write a new post
          </Link>
        </h5>
      </Container>
    </div>
  );
};

export default Home;
