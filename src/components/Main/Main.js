import React, { useContext, useEffect } from "react";
import styles from "./Main.module.css";
import { Context } from "../../state/context";
import Loader from "../UI/Loader/Loader";
import Pages from "../Pages/Pages";
import Cards from "../Cards/Cards";
import Nothing from "../Nothing/Nothing";

const Main = () => {
  const { loading, loadData, characters, pages, page } = useContext(Context);

  useEffect(() => {
    loadData();
  }, []);

  return (
    <main className={ styles.main }>
      {
        loading
          ? <Loader/>
          : characters.length
            ? (
              <>
                <Cards characters={ characters }/>
                <Pages count={ pages } current={ page }/>
              </>
            )
            : <Nothing/>
      }
    </main>
  );
};

export default Main;
