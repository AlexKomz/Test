import React from "react";
import styles from "./Paragraph.module.css";
import { Theme } from "../../constants";

const Paragraph = ({ title, text, theme = Theme.DARK }) => {
  const classes = [styles.title, styles[theme]];

  return (
    <p className={ styles.paragraph }>
      <span className={ classes.join(` `) }>{ title }</span>
      <span>{ text }</span>
    </p>
  );
};

export default Paragraph;
