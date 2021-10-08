import React, { useState } from "react";
import Button from "../UI/Button/Button";
import styles from "./Header.module.css";
import Filters from "../Filters/Filters";

const Header = ({ title }) => {
  const [opened, setOpened] = useState(false);

  const toggleFilterHandler = () => setOpened(prev => !prev);

  return (
    <header className={ styles.header }>
      <Button onClick={ toggleFilterHandler } size={ `large` }>{ title }</Button>
      <Filters toggleFilterHandler={ toggleFilterHandler } opened={ opened }/>
    </header>
  );
};

export default Header;
