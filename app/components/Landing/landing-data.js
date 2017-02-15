import React from 'react';
import Avatar from './Avatar';
import SignUp from './SignUp';
import SignIn from './SignInContainer';

export function modalType({ api, closeModal, switchModal, currentModal } = {}) {
  const modal = Object.is(currentModal, 'signup')
              ? <SignUp api={ api } closeModal={ closeModal }/>
              : Object.is(currentModal, 'signin')
              ? <SignIn api={ api } closeModal={ closeModal } switchModal={ switchModal }/>
              : Object.is(currentModal, 'avatar')
              ? <Avatar api={ api } closeModal={ closeModal } />
              : undefined;

  return modal;
}
