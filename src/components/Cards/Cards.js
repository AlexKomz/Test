import React from "react";
import styles from "./Cards.module.css";
import Card from "./Card/Card";

const Cards = ({ characters }) => (
  <ul className={ styles.cards }>
    {
      characters.map(
        character => (
          <Card key={ `${character.name}_${character.id}` } character={ character }/>
        )
      )
    }
  </ul>
);

export default Cards;
