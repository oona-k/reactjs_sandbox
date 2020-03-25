import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person"; /* No need to type Person.js. If any other than .js, the ending is also needed */

class App extends Component {
  state = {
    persons: [
      {name: 'Oona', age: 29},
      {name: 'Joni', age: 32},
      {name: 'Tiina', age: 29}
    ]
  };

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
