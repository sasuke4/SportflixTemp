const initialState = {
  token: 'joshua',
  status: '',
  group: '',
  api: 'http://localhost:8000',
  location: window.location.origin,
  avatar: '',
  previousModal: '',
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
  case 'SET_SESION': {
    const { token, status, group } = action.payload;
    return Object.assign({}, state, { token, status, group });
  }
  case 'SET_AVATAR': {
    const avatar = action.payload;
    return Object.assign({}, state, { avatar });
  }
  case 'SET_STATUS': {
    const status = action.payload;
    return Object.assign({}, state, { status });
  }
  case 'SET_PREVIOUS_MODAL': {
    const previousModal = action.payload;
    return Object.assign({}, state, { previousModal });
  }
  default:
    return state;
  }
}

export default reducer;
