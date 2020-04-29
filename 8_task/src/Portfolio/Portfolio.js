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
import Blog from "../Blog/Blog";
import About from "../About/About";

//REACT_BOOTSTRAP:
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import 'bootstrap/dist/css/bootstrap.min.css';
/* import { LinkContainer} from "react-router-bootstrap";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="md">
    <LinkContainer to="/#">
    <Navbar.Brand>Name</Navbar.Brand>
    </LinkContainer><Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <MainNav/>
    </Navbar.Collapse></Navbar>
    ) }; */

 const MainNav = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Navbar.Brand href="#home">Name</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navigation-bar">
          <Nav.Link><Link to="/">Home</Link></Nav.Link>
          <Nav.Link> <Link to="/about">About me</Link></Nav.Link>
          <Nav.Link><Link to="/blog">Blog</Link></Nav.Link>
          <Nav.Link href="#link">link</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}; 

/* const MainNav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About me</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
  );
};  */

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to my homepage</h1>
    </div>
  );
};

/* const Blog = () => {
  return (
    <div className="posts">
      <div className="post">
        <img src="https://source.unsplash.com/featured/laptop" alt="" />
        <h3>Post 1</h3>
        <p>
          Lorem ipsum dolorsit amet, consecteturadipiscingelit.
          Pellentesquescelerisqueeujustoquisscelerisque. Aeneanmolestiemagna non
          pharetra finibus. Sedelementumelitegetlacusvolutpattempor.
          Pellentesqueegestasjustosedluctussodales. Nam volutpat, nisi et
          aliquetmattis, estipsum dignissimeros, egetauctordolordiamvelelit.
          Sedet nequeullamcorper, fermentum estid, vulputateerat. Praesentvitae
          elementumsapien. Praesentnon erosa nuncdapibuselementumin in arcu. Nam
          pharetra suscipitex, at tempus ante viverrasit amet.
        </p>
        <Link to="/blog/post1">Read more</Link>
       
      </div>
      <div className="post">
        <img src="https://source.unsplash.com/featured/office" alt="" />
        <h3>Post 2</h3>
        <p>
          Lorem ipsum dolorsit amet, consecteturadipiscingelit.
          Pellentesquescelerisqueeujustoquisscelerisque. Aeneanmolestiemagna non
          pharetra finibus. Sedelementumelitegetlacusvolutpattempor.
          Pellentesqueegestasjustosedluctussodales. Nam volutpat, nisi et
          aliquetmattis, estipsum dignissimeros, egetauctordolordiamvelelit.
          Sedet nequeullamcorper, fermentum estid, vulputateerat. Praesentvitae
          elementumsapien.
        </p>
        <button>Read more</button>
      </div>
      <div className="post">
        <img src="https://source.unsplash.com/featured/ict" alt="" />
        <h3>Post 3</h3>
        <p>
          Lorem ipsum dolorsit amet, consecteturadipiscingelit.
          Pellentesquescelerisqueeujustoquisscelerisque. Aeneanmolestiemagna non
          pharetra finibus. Sedelementumelitegetlacusvolutpattempor.
          Pellentesqueegestasjustosedluctussodales.
        </p>
        <button>Read more</button>
      </div>
      <div className="post">
        <img src="https://source.unsplash.com/featured/flower" alt="" />
        <h3>Post 4</h3>
        <p>
          Lorem ipsum dolorsit amet, consecteturadipiscingelit.
          Pellentesquescelerisqueeujustoquisscelerisque. Aeneanmolestiemagna non
          pharetra finibus. Sedelementumelitegetlacusvolutpattempor.
          Pellentesqueegestasjustosedluctussodales. Nam volutpat, nisi et
          aliquetmattis, estipsum dignissimeros, egetauctordolordiamvelelit.
          Sedet nequeullamcorper, fermentum estid, vulputateerat.
        </p>
        <button>Read more</button>
      </div>
    </div>
  );
}; */

// const ReadMore = () => {
//   return (
//     <Router>
//       <Switch>
//         <Route path="/blog/post1" component={Post1} />
//       </Switch>
//     </Router>
//   );
// };

const Post = () => {
  // let {path, url} = useRouteMatch();
  let { post } = useParams();
  // let blogComponent = Blog.GetPost(0);
  // console.log(blogComponent);
  return <h2>This is post {post.title}</h2>;
};

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
          <Route path="/blog" exact component={Blog} />
          <Route path="/blog/:post">
            <Post />
          </Route>
        </Switch>
      </main>
    </Router>
  );
};

export default Portfolio;
