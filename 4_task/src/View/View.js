import React from "react";
import "./View.css";

const View = props => {
  console.log(props);
  return (
    <div className="view">
      <h1>This is your input:</h1>
      <p>First name: {props.firstname}</p>
      <p>Last name:</p>
      <p>Phone number:</p>
      <p>Message:</p>
    </div>
  );
};

export default View;
