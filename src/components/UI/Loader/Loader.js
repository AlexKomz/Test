import React from "react";
import styles from "./Loader.module.css";
import Center from "../../../containers/Center/Center";

const Loader = () => (
  <Center>
    <div className={ styles.loader }>
      <div/>
      <div/>
    </div>
  </Center>
);

export default Loader;
