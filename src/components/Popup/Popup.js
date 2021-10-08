import React, { useContext } from "react";
import styles from "./Popup.module.css";
import Paragraph from "../Paragraph/Paragraph";
import Status from "../Status/Status";
import Button from "../UI/Button/Button";
import { Context } from "../../state/context";

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
          theme={ `dark` }
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
              <Paragraph theme={ `light` } title={ `Type:` } text={ type
                ? type
                : `unknown` }/>
              <Paragraph theme={ `light` } title={ `Gender:` } text={ gender }/>
              <Paragraph theme={ `light` } title={ `Origin:` } text={ origin.name }/>
              <Paragraph theme={ `light` } title={ `Location:` } text={ location.name }/>
              <Paragraph theme={ `light` } title={ `Episodes:` } text={ formattedEpisodes.join(`, `) }/>
              <Paragraph theme={ `light` } title={ `Created:` } text={ new Date(created).toLocaleDateString() }/>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Popup;
