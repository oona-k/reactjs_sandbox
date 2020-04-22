import React from "react";
import "./Button.css";

const Button = ({ click, text, children }) => {
  return (
    <>
      <button onClick={click}>
        {text}
        {children}
      </button>
    </>
  );
};
export default Button;
