import React from 'react';
import SignUp from './SignUp';
import SignIn from './SignIn';

export function modalType(name) {
  const modal = Object.is(name, 'signup')
              ? <SignUp />
              : Object.is(name, 'signin')
              ? <SignIn />
              : undefined;

  return modal;
}
