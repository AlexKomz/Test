const ActionType = {
  SET_CHARACTERS: `GET_CHARACTERS`,
  SET_CHARACTER: `SET_CHARACTER`,
  SET_PAGES_COUNT: `SET_PAGES_COUNT`,
  SET_PAGE: `SET_PAGE`,
  SET_QUERY: `SET_QUERY`,
  SET_LOADING: `SET_LOADING`
};

export const ActionCreator = {
  setCharacters: characters => ({
    type: ActionType.SET_CHARACTERS,
    payload: { characters }
  }),
  setCharacter: character => ({
    type: ActionType.SET_CHARACTER,
    payload: { character }
  }),
  setPagesCount: pages => ({
    type: ActionType.SET_PAGES_COUNT,
    payload: { pages }
  }),
  setPage: page => ({
    type: ActionType.SET_PAGE,
    payload: { page }
  }),
  setQuery: query => ({
    type: ActionType.SET_QUERY,
    payload: { query }
  }),
  setLoading: loading => ({
    type: ActionType.SET_LOADING,
    payload: { loading }
  })
};

const handlers = {
  [ActionType.SET_CHARACTERS]: (state, payload) => ({
    ...state,
    characters: payload.characters,
  }),
  [ActionType.SET_CHARACTER]: (state, payload) => ({
    ...state,
    character: payload.character,
  }),
  [ActionType.SET_PAGES_COUNT]: (state, payload) => ({
    ...state,
    pages: payload.pages,
  }),
  [ActionType.SET_PAGE]: (state, payload) => ({
    ...state,
    page: payload.page
  }),
  [ActionType.SET_QUERY]: (state, payload) => ({
    ...state,
    query: payload.query
  }),
  [ActionType.SET_LOADING]: (state, payload) => ({
    ...state,
    loading: payload.loading
  }),
  DEFAULT: state => state
};

export const reducer = (state, action) => {
  const { type, payload } = action;
  const handler = handlers[type] || handlers.DEFAULT;
  return handler(state, payload);
};
