import React, { Fragment } from "react";
import styles from "./Pages.module.css";
import Page from "./Page/Page";

const FIRST = 1;
const MAX_INCREMENT = 2;

const ExtremePageFragment = ({ firstPart, secondPart }) => (
  <Fragment>
    { firstPart }
    { secondPart }
  </Fragment>
);

const extremePagesRender = (number, count) => {
  const page = <Page current={ false }>{ number }</Page>;
  const gap = <li className={ styles.gap }>...</li>;

  if (number === FIRST) {
    return <ExtremePageFragment key={ number } firstPart={ page } secondPart={ gap } />;
  } else if (number === count) {
    return <ExtremePageFragment key={ number } firstPart={ gap } secondPart={ page } />;
  }
};

const Pages = ({ count, current }) => (
  <ul className={ styles.pages }>
    { new Array(count).fill(``).map((_, i) => {
      const number = i + 1;

      return (
        Math.abs(number - current) > MAX_INCREMENT
          ? extremePagesRender(number, count)
          : <Page key={ number } current={ number === current }>{ number }</Page>
      );
    }) }
  </ul>
);

export default Pages;
