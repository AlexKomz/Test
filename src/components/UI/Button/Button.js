import React from "react";
import styles from "./Button.module.css";
import { ButtonType, Size, Theme } from "../../../constants";

const Button = ({
  children,
  onClick,
  disabled = false,
  className = ``,
  type = ButtonType.BUTTON,
  size = Size.DEFAULT,
  theme = Theme.TRANSPARENT
}) => {
  const classes = [styles.button, styles[size], styles[theme]];

  if (className) classes.push(className);

  return (
    <button
      className={ classes.join(` `) }
      onClick={ onClick }
      type={ type }
      disabled={ disabled }
    >
      { children }
    </button>
  );
};

export default Button;
