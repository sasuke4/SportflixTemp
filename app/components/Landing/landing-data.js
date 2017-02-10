import React from 'react';
import SignUp from './SignUp';

export function modalType(name) {
  const modal = Object.is(name, 'modalSignUp')
              ? <SignUp />
              : Object.is(name, 'modalSignIn')
              ? <SignIn />
              : undefined;

  return modal;
}
