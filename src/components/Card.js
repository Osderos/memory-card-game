import React from "react";
import "../styles/card.css";

export default function Card(props) {
  return (
    <div className="pokemonCard" onClick={props.handleClick} data-name={props.name}>
      <img className="cardImg" src={props.img} alt={props.name} />
      <p className="cardName">{props.name}</p>
    </div>
  );
}
