import React  from "react";
import styles from "./Pages.module.css";
import Page from "./Page/Page";

const Pages = ({ count, current }) => {
  return (
    <ul className={ styles.pages }>
      { new Array(count).fill(``).map((_, i) => {
        const number = i + 1;

        return (
          <Page key={ number } current={ number === current }>{ number }</Page>
        );
      }) }
    </ul>
  );
};

export default Pages;
