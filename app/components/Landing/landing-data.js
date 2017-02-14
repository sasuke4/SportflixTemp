import React from 'react';
import SignUp from './SignUp';
import SignIn from './SignIn';

export function modalType({ api, closeModal, currentModal } = {}) {
  const modal = Object.is(currentModal, 'signup')
              ? <SignUp api={ api } closeModal={ closeModal } />
              : Object.is(currentModal, 'signin')
              ? <SignIn api={ api } closeModal={ closeModal } />
              : undefined;

  return modal;
}
