import React, { useState } from "react";
import Button from "../UI/Button/Button";
import styles from "./Header.module.css";
import Filters from "../Filters/Filters";

const Header = ({ title }) => {
  const [opened, setOpened] = useState(false);

  return (
    <header className={ styles.header }>
      <Button onClick={ () => setOpened(prev => !prev) } size={ `large` }>{ title }</Button>
      <Filters opened={ opened }/>
    </header>
  );
};

export default Header;
