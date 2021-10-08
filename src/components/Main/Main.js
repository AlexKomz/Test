import React, { useContext, useEffect } from "react";
import styles from "./Main.module.css";
import { Context } from "../../state/context";
import Loader from "../UI/Loader/Loader";
import Pages from "../Pages/Pages";
import Cards from "../Cards/Cards";
import Nothing from "../Nothing/Nothing";
import Popup from "../Popup/Popup";

const Main = () => {
  const { loading, loadData, characters, character, pages, page } = useContext(Context);

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
                { character && <Popup character={ character }/> }
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
