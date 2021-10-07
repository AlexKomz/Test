import React from "react";
import styles from "./Card.module.css";
import Status from "./Status/Status";
import Paragraph from "./Paragraph/Paragraph";

const Card = ({ character }) => {
  return (
    <li className={ styles.card }>
      <article className={ styles.content }>
        <img className={ styles.image } src={ character.image } alt={ character.name }/>
        <div className={ styles.info }>
          <div className={ styles.title }>
            <h3>{ character.name }</h3>
            <Status status={ character.status } species={ character.species }/>
          </div>
          <Paragraph title={ `Type:` } text={ character.type
            ? character.type
            : `unknown` }/>
          <Paragraph title={ `Gender:` } text={ character.gender }/>
          <Paragraph title={ `Origin:` } text={ character.origin.name }/>
          <Paragraph title={ `Last known location:` } text={ character.location.name }/>
        </div>
      </article>
    </li>
  );
};

export default Card;
