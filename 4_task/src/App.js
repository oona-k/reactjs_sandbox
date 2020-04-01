import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./Form/Form";
import View from "./View/View";

class App extends Component {
  render() {
    return (
      <main>
        <div>
          <Form />
        </div>
        <div>
          <View />
        </div>
      </main>
    );
  }
}

export default App;
