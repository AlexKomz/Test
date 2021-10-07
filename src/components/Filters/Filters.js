import React from "react";
import styles from "./Filters.module.css";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";

const Filters = () => {
  return (
    <div className={ styles.filters }>
      <Input className={ styles.input } label={ `Name` }/>
      <Input className={ styles.input } label={ `Status` }/>
      <Input className={ styles.input } label={ `Species` }/>
      <Input className={ styles.input } label={ `Type` }/>
      <Input className={ styles.input } label={ `Gender` }/>
      <Input className={ styles.input } label={ `Origin` }/>
      <Input className={ styles.input } label={ `Last known location` }/>
      <div className={ styles.wrapper }>
        <Button theme={ `dark` }>Filter</Button>
        <Button>Reset</Button>
      </div>
    </div>
  );
};

export default Filters;
