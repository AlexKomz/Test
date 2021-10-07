import React from "react";
import styles from "./Input.module.css";

const Input = ({ className = ``, label=``, type=`text` }) => {
  const generatedId = Math.random().toString();

  const classes = [styles.input];

  if (className) classes.push(className);

  return (
    <div className={ classes.join(` `) }>
      <label htmlFor={ generatedId }>{ label }</label>
      <input id={ generatedId } type={ type }/>
    </div>
  );
};

export default Input;
