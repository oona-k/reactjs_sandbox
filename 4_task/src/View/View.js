import React from "react";
import "./View.css";

const View = props => {
  console.log(props);
  return (
    <div className="view">
      <h1>This is your input:</h1>
      <p>First name: {props.firstname}</p>
      <p>Last name: {props.lastname}</p>
      <p>Phone number: {props.phone}</p>
      <p>Message:{props.message}</p>
    </div>
  );
};

export default View;
