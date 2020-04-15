import React, { Component } from "react";
import Lecture from "./Lecture/Lecture";
import Mapmethod from "./Lecture/Mapmethod";
import Post from "./Post/Post";

const posts = [
  {
    title: "Lorem ipsum dolor sit amet",
    author: "Author",
    desc:
      "Lorem ipsum dolor sit amet, taciti nunc a quam, habitant nonummy vestibulum turpis in odio lectus, sed arcu nulla nunc diam, nunc donec. Elit sed, egestas molestie rutrum sed cras.",
    img: "https://source.unsplash.com/featured/sun",
  },
  {
    title: "At erat pellentesque adipiscing commodo elit at",
    author: "Author",
    desc:
      "Feugiat sed nulla ullamcorper, massa ultricies rhoncus sed, dui hendrerit viverra eu eu minima, ut ornare. Lobortis vel, faucibus libero nec urna velit metus, tortor etiam mattis auctor accumsan. Cursus neque consectetuer convallis doloremque arcu, praesent molestie pede sodales in erat. Sodales volutpat tellus eleifend.",
    img: "https://source.unsplash.com/featured/sea",
  },
  {
    title: "Tristique senectus et netus",
    author: "Author",
    desc:
      "Semper viverra nam libero justo laoreet sit amet cursus sit. Sed vulputate mi sit amet mauris commodo quis imperdiet massa. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Orci sagittis eu volutpat odio facilisis mauris sit. Nunc lobortis mattis aliquam faucibus. ",
    img: "https://source.unsplash.com/featured/nature",
  },
];

class App extends Component {
  state = {
    posts: posts,
  };
  render() {
    return (
      <div className="posts">
        <Post
          title={this.state.posts[0].title}
          author={this.state.posts[0].author}
          desc={this.state.posts[0].desc}
          img={this.state.posts[0].img}
        />
        <Post
          title={this.state.posts[1].title}
          author={this.state.posts[1].author}
          desc={this.state.posts[1].desc}
          img={this.state.posts[1].img}
        />
        <Post
          title={this.state.posts[2].title}
          author={this.state.posts[2].author}
          desc={this.state.posts[2].desc}
          img={this.state.posts[2].img}
        />
      </div>
    );
  }
}
export default App;
