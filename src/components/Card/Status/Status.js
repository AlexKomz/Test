import React from "react";
import styles from "./Status.module.css";

const Status = ({ status, species }) => {
  const classes = [styles.status, styles[status.toLowerCase()]];

  return (
    <p className={ classes.join(` `) }>{ `${status} - ${species}` }</p>
  );
};

export default Status;
