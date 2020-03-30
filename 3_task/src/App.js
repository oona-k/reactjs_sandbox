import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";

class App extends Component {
  state = {
    likes: 0
  };

  addLike = () => {
    console.log("test");
    this.setState({ likes: this.state.likes + 1 });
  };

  removeLike = () => {
    this.setState({ likes: this.state.likes - 1 });
  };

  reset = () => {
    this.setState({ likes: (this.state.likes = 0) });
    // or this.setState({ likes: 0});
  };

  render() {
    return (
      <div>
        <Header/>
        <main>
        <h1 className={this.state.likes === 0 ? "likes" : this.state.likes % 2 === 0 ? "likes even" : "likes odd"}>
          Total likes: {this.state.likes}
        </h1>
        <div className="all-buttons">
        <button onClick={this.addLike}>Like</button>
        <button onClick={this.removeLike}>Dislike</button>
        <button onClick={this.reset}>Reset</button>
        </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
