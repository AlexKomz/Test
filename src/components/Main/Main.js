import React from "react";
import styles from "./Main.module.css";

import Card from "../Card/Card";

import { mockData } from "../../mock";

const Main = () => {
  return (
    <main className={ styles.main }>
      <ul>
        {
          mockData.map(
            character => (
              <Card key={ character.id } character={ character }/>
            )
          )
        }
      </ul>
    </main>
  );
};

export default Main;
