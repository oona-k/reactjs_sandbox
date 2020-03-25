import React from "react";
import "./App.css";
import Person from './Person/Person'; /* No need to type Person.js. If any other than .js, the ending is also needed */

const App = () => {
  return (
    <div>
      <h1>Hello World!</h1>
      <Person />
    </div>
  );
};
export default App;
