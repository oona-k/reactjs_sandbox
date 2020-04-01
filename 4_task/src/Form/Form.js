import React from "react";
import "./Form.css";
import App from "../App";

const Form = props => {
  return (
    <div className="form">
      <div className="formGroup">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          onChange={props.change}
        ></input>
      </div>
      <div className="formGroup">
        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" name="lastName"></input>
      </div>
      <div className="formGroup">
        <label htmlFor="phone">Phone number</label>
        <input type="text" id="phone" name="phone"></input>
      </div>
      <div className="formGroup">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="4" cols="50"></textarea>
      </div>
    </div>
  );
};

export default Form;
