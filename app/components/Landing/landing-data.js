import React from 'react';
import SignUp from './SignUp';
import SignIn from './SignIn';

export function modalType({ currentModal, api } = {}) {
  const modal = Object.is(currentModal, 'signup')
              ? <SignUp api={ api } />
              : Object.is(currentModal, 'signin')
              ? <SignIn api={ api }/>
              : undefined;

  return modal;
}
