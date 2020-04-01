import React from "react";
import "./View.css";

const View = props => {
  console.log(props);
  return (
    <div className="view">
      <h1>This is your input:</h1>
      <div className="inputs">
      <p>First name: <span className="writing">{props.firstname}</span></p>
      <p>Last name: <span className="writing">{props.lastname}</span></p>
      <p>Phone number: <span className="writing">{props.phone}</span></p>
      <p>Message: <span className="writing">{props.message}</span></p>
      </div>
    </div>
  );
};

export default View;
