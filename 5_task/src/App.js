import React, { Component } from "react";
import Circle from "./Circle/Circle";
import GameOver from "./GameOver/GameOver";

const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

class App extends Component {
  state = {
    score: 0,
    current: 0,
    showGameOver: false,
    rounds: 0,
  };

  

  pace = 1500;
  timer = undefined;

  next = () => {
    if (this.state.rounds >= 3) {
      this.endHandler();
      return;
    }
    let nextActive = undefined;
    do {
      nextActive = getRndInteger(1, 4);
    } while (nextActive === this.state.current);
    this.setState({
      current: nextActive,
      rounds: this.state.rounds + 1,
    });
    this.pace *= 0.95;
    this.timer = setTimeout(this.next, this.pace);
    console.log(this.state.current);
  };

  clickHandler = (circleID) => {
  let audio1 = new Audio("/click.ogg");
  let audio2 = new Audio("/gameover.wav");
    console.log("Clicked", circleID);
    if (this.state.current !== circleID) {
      this.endHandler();
      audio2.play();
      return;
    }
    audio1.play();
    this.setState({
      score: this.state.score + 1,
      rounds: 0,
    });
  };

  startHandler = () => {
    this.next();
  };
  endHandler = () => {
    let audio2 = new Audio("/gameover.wav");
    clearTimeout(this.timer);
    this.setState({
      showGameOver: true,
    });
    audio2.play();
  };

  render() {
    return (
      <div className="container">
        {this.state.showGameOver && <GameOver score={this.state.score} />}
        <h1>Speedtest</h1>
        <p>Your score: {this.state.score}</p>
        <main>
          <Circle
            active={this.state.current === 1}
            buttonColor="orange"
            click={this.clickHandler.bind(this, 1)}
          />
          <Circle
            active={this.state.current === 2}
            buttonColor="green"
            click={this.clickHandler.bind(this, 2)}
          />
          <Circle
            active={this.state.current === 3}
            buttonColor="blue"
            click={this.clickHandler.bind(this, 3)}
          />
          <Circle
            active={this.state.current === 4}
            buttonColor="yellow"
            click={this.clickHandler.bind(this, 4)}
          />
        </main>
        <div className="buttons">
          <button onClick={this.startHandler}>Start Game</button>
          <button onClick={this.endHandler}>End Game</button>
        </div>
      </div>
    );
  }
}

export default App;
