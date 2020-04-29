import React, { Component } from "react";
import Lecture from "./Lecture/Lecture";
import Mapmethod from "./Lecture/Mapmethod";
import Post from "./Post/Post";

const posts = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet",
    author: "Author",
    desc:
      "Lorem ipsum dolor sit amet, taciti nunc a quam, habitant nonummy vestibulum turpis in odio lectus, sed arcu nulla nunc diam, nunc donec. Elit sed, egestas molestie rutrum sed cras.",
    img: "https://source.unsplash.com/1600x900/?nature",
    //  img: "https://source.unsplash.com/featured/sun",
  },
  {
    id: 2,
    title: "At erat pellentesque adipiscing commodo elit at",
    author: "Author",
    desc:
      "Feugiat sed nulla ullamcorper, massa ultricies rhoncus sed, dui hendrerit viverra eu eu minima, ut ornare. Lobortis vel, faucibus libero nec urna velit metus, tortor etiam mattis auctor accumsan. Cursus neque consectetuer convallis doloremque arcu, praesent molestie pede sodales in erat. Sodales volutpat tellus eleifend.",
    //img: "https://source.unsplash.com/featured/sea",
    img: "https://source.unsplash.com/1600x900/?sea",
  },
  {
    id: 3,
    title: "Tristique senectus et netus",
    author: "Author",
    desc:
      "Semper viverra nam libero justo laoreet sit amet cursus sit. Sed vulputate mi sit amet mauris commodo quis imperdiet massa. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Orci sagittis eu volutpat odio facilisis mauris sit. Nunc lobortis mattis aliquam faucibus. ",
    //img: "https://source.unsplash.com/featured/nature",
    img: "https://source.unsplash.com/1600x900/?sun",
  },
];

class App extends Component {
  state = {
    posts: posts,
  };

  removeHandler = (removeId) => {
    const oldArray = [...this.state.posts];
    oldArray.splice(removeId, 1);
    this.setState({ posts: oldArray });
  };

  render() {
    const postsList = this.state.posts.map((post, index) => {
      return (
        <Post
          key={post.id}
          title={post.title}
          author={post.author}
          desc={post.desc}
          img={post.img}
          click={this.removeHandler.bind(this, index)}
        />
      );
    });

    return <div className="posts">{postsList}</div>;
  }
}
export default App;
