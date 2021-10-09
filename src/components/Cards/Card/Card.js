import React, { useContext } from "react";
import styles from "./Card.module.css";
import Status from "../../Status/Status";
import Paragraph from "../../Paragraph/Paragraph";
import { Context } from "../../../state/context";
import { Label, UNKNOWN_VALUE } from "../../../constants";

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
          <Paragraph title={ `${Label.TYPE}:` } text={ type
            ? type
            : UNKNOWN_VALUE }/>
          <Paragraph title={ `${Label.GENDER}:` } text={ gender }/>
        </div>
      </article>
    </li>
  );
};

export default Card;
