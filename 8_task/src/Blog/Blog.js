import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

import Button from 'react-bootstrap/Button';


const Post = (props) => {
  return (
    <div className="post">
         <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <p>
        <em>{props.author}</em>
      </p>
      <p>{props.desc}</p>
     
      <Link to={`/blog/${props.link}`} className="readMoreBtn">Read more</Link>
      <Button variant="primary">Primary</Button>{' '}
    </div>
  );
};

const posts = [
  {
    id: 1,
    title: "Post 1",

    desc:
      "Lorem ipsum dolor sit amet, taciti nunc a quam, habitant nonummy vestibulum turpis in odio lectus, sed arcu nulla nunc diam, nunc donec. Elit sed, egestas molestie rutrum sed cras.",
    img: "https://source.unsplash.com/1600x900/?computer",
    //  img: "https://source.unsplash.com/featured/sun",
    link: "post1",
  },
  {
    id: 2,
    title: "Post 2",
   
    desc:
      "Feugiat sed nulla ullamcorper, massa ultricies rhoncus sed, dui hendrerit viverra eu eu minima, ut ornare. Lobortis vel, faucibus libero nec urna velit metus, tortor etiam mattis auctor accumsan. Cursus neque consectetuer convallis doloremque arcu, praesent molestie pede sodales in erat. Sodales volutpat tellus eleifend.",
    //img: "https://source.unsplash.com/featured/sea",
    img: "https://source.unsplash.com/1600x900/?sea",
    link: "post2",
  },
  {
    id: 3,
    title: "Post 3",
  
    desc:
      "Semper viverra nam libero justo laoreet sit amet cursus sit. Sed vulputate mi sit amet mauris commodo quis imperdiet massa. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Orci sagittis eu volutpat odio facilisis mauris sit. Nunc lobortis mattis aliquam faucibus. ",
    //img: "https://source.unsplash.com/featured/nature",
    img: "https://source.unsplash.com/1600x900/?sun",
    link: "post3",
  },
  {
    id: 4,
    title: "Post 4",
  
    desc:
      "Semper viverra nam libero justo laoreet sit amet cursus sit. Sed vulputate mi sit amet mauris commodo quis imperdiet massa. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Orci sagittis eu volutpat odio facilisis mauris sit. Nunc lobortis mattis aliquam faucibus. ",
    //img: "https://source.unsplash.com/featured/nature",
    img: "https://source.unsplash.com/1600x900/?office",
    link: "post4",
  },
];

class Blog extends Component {
  state = {
    posts: posts,
  };

  render() {
    const postsList = this.state.posts.map((post, index) => {
      return (
        <Post
        img={post.img}
          key={post.id}
          title={post.title}
     
          desc={post.desc}
         
          link={post.link}
        />
      );
    });

    return <div className="posts">{postsList}</div>;
  }
}
export default Blog;
