import React, { useState, useEffect } from "react";
import Card from "./Card";
import Scoreboard from "./Scoreboard";
import { getData } from "../utils/getData";
import "../styles/gameBoard.css";

function Gameboard(props) {
  const MAX_AMOUNT = 12;
  const [charsList, setCharsList] = useState([]);
  const [selectedCharsList, setSelectedCharsList] = useState([]);
  const [count, setCount] = useState(0);
  const [highscore, setHighscore] = useState(0);

  useEffect(() => {
    console.log("Gameboard- component did mount");

    const loadChars = async () => {
      setCharsList(shuffledArray(await getData(MAX_AMOUNT)));
    };

    loadChars();
  }, []);

  const shuffledArray = (array) => array.sort((a, b) => 0.5 - Math.random());

  const handleClick = (e) => {
    const value = e.target.dataset.name;
    setSelectedCharsList(selectedCharsList.concat(value));
    setCharsList(shuffledArray([...charsList]));
    gameRound(value);
    gameOver()
  };

  const gameRound = (param) => {
    selectedCharsList.includes(param) ? gameReset() : setCount(count + 1);
  };

  const gameOver = () => {
    if (count === MAX_AMOUNT) {
      alert("Congratualations!");
      gameReset();
    }
  };

  const gameReset = () => {
    if (count > highscore) {
      setHighscore(count);
    }
    setCount(0);
    setSelectedCharsList([]);
  };

  const cardsList = charsList.map((char) => (
    <Card
      key={char.id}
      img={char.imgURL}
      name={char.name}
      id={char.id}
      handleClick={handleClick}
    />
  ));

  return (
    <div className="gameboard-container">
      <Scoreboard score={count} highscore={highscore} />
      <div className="cardsList-container">{cardsList}</div>
    </div>
  );
}

export default Gameboard;
