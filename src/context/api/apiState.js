import React from "react";
import { useReducer } from "react";
import { ActionCreator, apiReducer } from "./apiReducer";
import { api } from "../../api";
import { ApiContext } from "./apiContext";

export const ApiState = ({ children }) => {
  const initialState = {
    characters: [],
    loading: false
  };

  const [state, dispatch] = useReducer(apiReducer, initialState);

  const getData = async () => {
    dispatch(ActionCreator.setLoading());

    const response = await api().get(`https://rickandmortyapi.com/api/character`);

    dispatch(ActionCreator.setCharacters(response.results));
  };

  return (
    <ApiContext.Provider value={ {
      getData,
      ...state
    } }>
      { children }
    </ApiContext.Provider>
  );
};
