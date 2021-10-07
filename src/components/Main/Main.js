import React, { useContext, useEffect } from "react";
import styles from "./Main.module.css";
import Card from "../Card/Card";
import { ApiContext } from "../../context/api/apiContext";
import Loader from "../UI/Loader/Loader";

const Main = () => {
  const { loading, getData, characters } = useContext(ApiContext);

  useEffect(() => {
    getData();
  }, []);

  return (
    <main className={ styles.main }>
      {
        loading
          ? <Loader/>
          : <ul>
            {
              characters.map(
                character => (
                  <Card key={ character.id } character={ character }/>
                )
              )
            }
          </ul>
      }
    </main>
  );
};

export default Main;
