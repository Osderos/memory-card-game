import React from "react";
import "../styles/scoreBoard.css";

function Scoreboard(props) {
  return (
    <div className="scoreBoard-container">
      <div className="gameScore">Score:{props.score}</div>
      <div className="highScore">High Score:{props.highscore}</div>
    </div>
  );
}

export default Scoreboard;
