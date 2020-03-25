

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Person(props) {
  return (
    <div className="box">
      <h1>{props.name}</h1>
      <p> Title: {props.title}</p>
      <p> Age: {props.age}</p>
    </div>
  );
}

const app = (
  <div>
    <Person name="Maria" title="CEO" age="39" />
    <Person name="Kati" title="Developer" age="20" />
    <Person name="Karin" title="Designer" age="42" />
    <Person name="Anna" title="Developer" age="50" />
    <Person name="Julia" title="Designer" age="30" />
  </div>
);

ReactDOM.render(app, document.querySelector("#root"));