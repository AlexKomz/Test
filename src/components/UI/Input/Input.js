import React from "react";
import styles from "./Input.module.css";
import { EMPTY_VALUE, InputType } from "../../../constants";

const Input = ({
  index,
  onChange,
  className = EMPTY_VALUE,
  label = EMPTY_VALUE,
  value = EMPTY_VALUE,
  type = InputType.TEXT
}) => {
  const generatedId = Math.random().toString();

  const classes = [styles.input];

  if (className) classes.push(className);

  return (
    <div className={ classes.join(` `) }>
      <label htmlFor={ generatedId }>{ label }</label>
      <input
        id={ generatedId }
        onChange={ event => onChange(event.target.value, index) }
        type={ type }
        value={ value }
      />
    </div>
  );
};

export default Input;
