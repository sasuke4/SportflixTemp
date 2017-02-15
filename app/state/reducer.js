const initialState = {
  token: 'joshua',
  status: '',
  group: '',
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
  case 'SET_SESION': {
    const { token, status, group } = action.payload;
    return Object.assign({}, state, { token, status, group });
  }
  default:
    return state;
  }
}

export default reducer;
