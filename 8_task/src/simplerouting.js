import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>This is HOME page</h1>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h1>This is ABOUT page</h1>
    </div>
  );
};

const Contact = () => {
  return (
    <div>
      <h1>This is CONTACT page</h1>
    </div>
  );
};

const Simplerouting = () => {
  return (
    <Router>
        <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      </header>
      <main>
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      </Switch>
      </main>
    </Router>
    
  );
};

export default Simplerouting;
