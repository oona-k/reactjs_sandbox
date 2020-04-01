import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./Form/Form";
import View from "./View/View";

class App extends Component {
  state = {
    firstname: "",
    lastname: "",
    phone: "",
    message: ""
  };
  changeHandler = event => {
    console.log(event.target.value);
    this.setState({ firstname: event.target.value });
  };
  render() {
    return (
      <main>
        <div>
          <Form change={this.changeHandler} />
        </div>
        {/*        <input type="text" onChange={this.changeHandler}></input>
        <p>{this.state.firstname}</p> */}
        <div>
          <View firstname={this.state.firstname} />
        </div>
      </main>
    );
  }
}

export default App;
