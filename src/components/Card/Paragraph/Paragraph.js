import React from "react";
import styles from "./Paragraph.module.css";

const Paragraph = ({ title, text }) => (
  <p className={ styles.paragraph }>
    <span className={ styles.title }>{ title }</span>
    <span>{ text }</span>
  </p>
);

export default Paragraph;
