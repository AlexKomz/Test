import React from "react";
import Button from "../../UI/Button/Button";
import styles from "./Header.module.css";
import Filters from "../Filters/Filters";

const Header = ({ title }) => (
  <header className={ styles.header }>
    <Button size={ `large` }>{ title }</Button>
    <Filters/>
  </header>
);

export default Header;
