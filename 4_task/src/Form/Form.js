import React from "react";
import "./Form.css";
import App from "../App";

const Form = props => {
  return (
    <div className="form">
      <div className="formGroup">
        <label htmlFor="firstname">First Name</label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          onChange={props.change}
        ></input>
      </div>
      <div className="formGroup">
        <label htmlFor="lastname">Last Name</label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          onChange={props.change}
        ></input>
      </div>
      <div className="formGroup">
        <label htmlFor="phone">Phone number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          onChange={props.change}
        ></input>
      </div>
      <div className="formGroup">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          cols="50"
          onChange={props.change}
        ></textarea>
      </div>
    </div>
  );
};

export default Form;
