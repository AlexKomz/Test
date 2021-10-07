import React from "react";
import styles from "./Button.module.css";

const Button = ({
  children,
  className = ``,
  type = `button`,
  size = `default`,
  theme = `transparent`
}) => {
  const classes = [styles.button, styles[size], styles[theme]];

  if (className) classes.push(className);

  return (
    <button className={ classes.join(` `) } type={ type }>
      { children }
    </button>
  );
};

export default Button;
