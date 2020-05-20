import React from "react";
import { Link } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const MainNav = () => {
  return (
    <div>
      <Navbar bg="light" variant="light">
      <Navbar.Brand href="/">My Blog</Navbar.Brand>
        <Nav className="ml-auto">
          <Link to="/" className="nav-link">
            Home
          </Link>

          <Link to="/blog" className="nav-link">
            Blog
          </Link>

          <Link to="/newpost" className="nav-link">
            New Post
          </Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default MainNav;
