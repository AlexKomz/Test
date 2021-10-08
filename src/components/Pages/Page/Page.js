import React, { useContext } from "react";
import styles from "./Page.module.css";
import { Context } from "../../../state/context";

const Page = ({ children, current }) => {
  const { loadData, setPage } = useContext(Context);

  const classes = [styles.button];

  if (current) classes.push(styles.current);

  const clickHandler = () => {
    if (current) return;

    setPage(children);
    loadData({ page: children });
  };

  return (
    <li className={ styles.page }>
      <button
        type={ `button` }
        className={ classes.join(` `) }
        onClick={ clickHandler }
      >
        { children }
      </button>
    </li>
  );
};

export default Page;
