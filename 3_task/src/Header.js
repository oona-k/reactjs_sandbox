import React, { Component } from "react";
import './Header.css';

const Header = () => {
    const date = new Date();
     return (
    <div className="header">
      <h1>Counter</h1>
      <p className="date">Today is {date.toDateString()}</p>
    </div>
  );
};

  export default Header;
