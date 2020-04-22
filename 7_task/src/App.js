import React, { useState } from "react";
// import React from 'react';
import "./App.css";
import Button from "./Button/Button";
import Content from "./Content/Content";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faHeart,
  faHeartBroken,
} from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [negCounter, setNegCounter] = useState(0);

  const addHandler = () => setCounter(counter + 1);
  const removeHandler = () => setNegCounter(negCounter + 1);
  const resetHandler = () => {
    setCounter(0);
    setNegCounter(0);
  };

  return (
    <div className="App">
      <div>
        <Button click={addHandler} text="I love it ">
          {" "}
          <FontAwesomeIcon icon={faHeart} />
        </Button>
        <Button click={removeHandler} text="I hate it ">
          <FontAwesomeIcon icon={faHeartBroken} />
        </Button>
        <Button click={resetHandler} text="Reset" />
      </div>

      <Content love={counter} hate={negCounter} />
    </div>
  );
};

export default App;
