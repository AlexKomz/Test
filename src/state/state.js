import React from "react";
import { useReducer } from "react";
import { ActionCreator, reducer } from "./reducer";
import { api } from "../api";
import { Context } from "./context";

const init = () => ({
  characters: [],
  character: null,
  pages: 0,
  page: 1,
  query: ``,
  loading: false
});

export const State = ({ children }) => {
  const initialState = init();

  const [state, dispatch] = useReducer(reducer, initialState, init);

  const dispatchResults = response => {
    dispatch(ActionCreator.setCharacters(response.results));
    dispatch(ActionCreator.setPagesCount(response.info.pages));
    dispatch(ActionCreator.setLoading(false));
  };

  const loadData = async ({ page = state.page, query = state.query } = {}) => {
    dispatch(ActionCreator.setLoading(true));

    let response = await api()
      .get(`https://rickandmortyapi.com/api/character/?page=${page}${query ? query : ``}`);

    if (response.hasOwnProperty(`error`)) {
      response = {
        results: [],
        info: { pages: 0 }
      };
    }

    dispatchResults(response);
  };

  const setPage = page => dispatch(ActionCreator.setPage(page));

  const setQuery = query => dispatch(ActionCreator.setQuery(query));

  const setCharacter = character => dispatch(ActionCreator.setCharacter(character));

  return (
    <Context.Provider value={ {
      loadData,
      setCharacter,
      setPage,
      setQuery,
      ...state
    } }>
      { children }
    </Context.Provider>
  );
};
