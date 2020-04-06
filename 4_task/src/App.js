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
    console.log(event.target.name);
    if (event.target.name === "firstname") {
      this.setState({ firstname: event.target.value });
    } else if (event.target.name === "lastname") {
      this.setState({ lastname: event.target.value });
    } else if (event.target.name === "phone") {
      this.setState({ phone: event.target.value });
    } else {
      this.setState({ message: event.target.value });
    }
  };
  render() {
    return (
      <main>
        <div>
          <Form change={this.changeHandler} />
        </div>
        <div>
          <View
            firstname={this.state.firstname}
            lastname={this.state.lastname}
            phone={this.state.phone}
            message={this.state.message}
          />
        </div>
      </main>
    );
  }
}

export default App;
