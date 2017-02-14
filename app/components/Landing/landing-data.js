import React from 'react';
import SignUp from './SignUp';
import SignIn from './SignIn';

export function modalType({ name, api } = {}) {
  const modal = Object.is(name, 'signup')
              ? <SignUp api={ api } />
              : Object.is(name, 'signin')
              ? <SignIn api={ api }/>
              : undefined;

  return modal;
}
