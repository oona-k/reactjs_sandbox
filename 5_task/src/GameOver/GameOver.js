import React from "react";
import "./GameOver.css";

const closeHandler = () => {
window.location.reload();
};

const GameOver = props => {
  return (
    <div className="gameover overlay spiderweb">
   
      <div className="gameover-popup">
        <div>
          <h2>Game over!</h2>

          <button onClick={closeHandler} className="close-btn">Close</button>
          <p>Your final score was: <span> {props.score} </span></p>
        </div>
      </div>
    
    </div>
  );
};

export default GameOver;
