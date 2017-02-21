export function setSesion(sesion) {
  return {
    type: 'SET_SESION',
    payload: sesion,
  };
}

export function setAvatar(avatar) {
  return {
    type: 'SET_AVATAR',
    payload: avatar,
  };
}

export function setStatus(status) {
  return {
    type: 'SET_STATUS',
    payload: status,
  };
}

export function setPreviousModal(previousModal) {
  return {
    type: 'SET_PREVIOUS_MODAL',
    payload: previousModal,
  };
}
