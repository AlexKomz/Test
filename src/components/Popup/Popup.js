import React, { useContext } from "react";
import styles from "./Popup.module.css";
import Paragraph from "../Paragraph/Paragraph";
import Status from "../Status/Status";
import Button from "../UI/Button/Button";
import { Context } from "../../state/context";
import { Label, Theme, UNKNOWN_VALUE } from "../../constants";

const Popup = ({ character }) => {
  const { setCharacter } = useContext(Context);

  const {
    name,
    status,
    species,
    type,
    gender,
    origin,
    location,
    image,
    episode,
    created
  } = character;

  const formattedEpisodes = episode.map(item => {
    return parseInt(item.slice(item.lastIndexOf(`/`) + 1));
  });

  const closePopupHandler = event => {
    if (event.target !== event.currentTarget) return;
    setCharacter(null);
  };

  return (
    <div className={ styles.container } onClick={ closePopupHandler }>
      <section className={ styles.popup }>
        <Button
          className={ styles.close }
          onClick={ closePopupHandler }
          theme={ Theme.DARK }
        >
          X
        </Button>
        <article className={ styles.card }>
          <div className={ styles.title }>
            <h3>{ name }</h3>
            <Status status={ status } species={ species }/>
          </div>
          <div className={ styles.wrapper }>
            <img src={ image } alt={ name }/>
            <div className={ styles.info }>
              <Paragraph theme={ Theme.LIGHT } title={ `${Label.TYPE}:` } text={ type
                ? type
                : UNKNOWN_VALUE }/>
              <Paragraph theme={ Theme.LIGHT } title={ `${Label.GENDER}:` } text={ gender }/>
              <Paragraph theme={ Theme.LIGHT } title={ `${Label.ORIGIN}:` } text={ origin.name }/>
              <Paragraph theme={ Theme.LIGHT } title={ `${Label.LOCATION}:` } text={ location.name }/>
              <Paragraph theme={ Theme.LIGHT } title={ `${Label.EPISODES}:` } text={ formattedEpisodes.join(`, `) }/>
              <Paragraph
                theme={ Theme.LIGHT }
                title={ `${Label.CREATED}:` }
                text={ new Date(created).toLocaleDateString() }
              />
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Popup;
