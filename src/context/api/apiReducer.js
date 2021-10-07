const ActionType = {
  GET_CHARACTERS: `GET_CHARACTERS`,
  SET_LOADING: `SET_LOADING`
};

export const ActionCreator = {
  setCharacters: characters => ({
    type: ActionType.GET_CHARACTERS,
    payload: { characters }
  }),
  setLoading: () => ({
    type: ActionType.SET_LOADING,
  })
};

const handlers = {
  [ActionType.GET_CHARACTERS]: (state, payload) => ({
    ...state,
    characters: payload.characters,
    loading: false
  }),
  [ActionType.SET_LOADING]: state => ({ ...state, loading: true }),
  DEFAULT: state => state
};

export const apiReducer = (state, action) => {
  const { type, payload } = action;
  const handler = handlers[type] || handlers.DEFAULT;
  return handler(state, payload);
};
