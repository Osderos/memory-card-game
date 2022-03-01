import React, { useState, useEffect } from "react";
import Card from "./Card";
import { getData } from "../utils/getData";


function Gameboard(props) {
  const MAX_AMOUNT = 12;
  const [charsList, setCharsList] = useState([]);

  useEffect(() => {
    console.log("Gameboard- component did mount");
    const loadChars = async () => {
      setCharsList(await getData(MAX_AMOUNT));
    };

    loadChars();
  }, []);

    const cardsList = charsList.map((char) => (
      <Card key={char.id} img={char.imgURL} name={char.name} />
    ));

  return (
    <div className="gameboard-container">
      <div>
        {cardsList}
      </div>
    </div>
  );
}

export default Gameboard;
