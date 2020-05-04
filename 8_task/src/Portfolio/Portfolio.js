import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

import "./Portfolio.css";
import MainNav from "../MainNav/MainNav";
import Blog from "../Blog/Blog";
import About from "../About/About";
import Home from "../Home/Home";
import Newpost from "../Newpost/Newpost";

//REACT_BOOTSTRAP:
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
/* import { LinkContainer} from "react-router-bootstrap";*/

const Portfolio = () => {
  return (
    <Router>
      <header>
        <MainNav />
      </header>
      <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />

          <Route path="/blog" component={Blog} />

          <Route path="/newpost" component={Newpost} />
        </Switch>
      </main>
    </Router>
  );
};

export default Portfolio;
