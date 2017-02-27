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

export function setProfileCreate(profileCreate) {
  return {
    type: 'SET_PROFILE_CREATE',
    payload: profileCreate,
  };
}

export function setAccountInfo(accountInfo) {
  return {
    type: 'SET_ACCOUNT_INFO',
    payload: accountInfo,
  };
}
