import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    likes: 0
  };

addLike = () => {
  console.log('test');
  this.setState({ likes: this.state.likes + 1});
};

removeLike = () => {
  this.setState({ likes: this.state.likes - 1});
};

reset = () => {
  this.setState({ likes: this.state.likes = 0});
};

  render() {
    return (
      <div>
        <h1>Total likes: {this.state.likes}</h1>
        <button onClick={this.addLike}>Like</button>
        <button onClick={this.removeLike}>Dislike</button>
        <button onClick={this.reset}>Reset</button>

      </div>
    );
  }
}

export default App;
