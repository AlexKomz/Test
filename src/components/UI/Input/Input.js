import React from "react";
import styles from "./Input.module.css";

const Input = ({
  index,
  onChange,
  className = ``,
  label=``,
  value=``,
  type=`text`
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
