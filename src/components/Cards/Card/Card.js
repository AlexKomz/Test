import React, { useContext } from "react";
import styles from "./Card.module.css";
import Status from "./Status/Status";
import Paragraph from "./Paragraph/Paragraph";
import { Context } from "../../../state/context";

const Card = ({ character }) => {
  const { setCharacter } = useContext(Context);
  const {
    image,
    name,
    status,
    species,
    type,
    gender
  } = character;

  return (
    <li className={ styles.card } onClick={ () => setCharacter(character) }>
      <article className={ styles.content }>
        <img className={ styles.image } src={ image } alt={ name }/>
        <div className={ styles.info }>
          <div className={ styles.title }>
            <h3>{ name }</h3>
            <Status status={ status } species={ species }/>
          </div>
          <Paragraph title={ `Type:` } text={ type
            ? character.type
            : `unknown` }/>
          <Paragraph title={ `Gender:` } text={ gender }/>
        </div>
      </article>
    </li>
  );
};

export default Card;
