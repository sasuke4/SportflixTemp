import React from 'react';
import Avatar from 'components/Landing/Avatar';
import Card from 'components/Payment/Card';
import SignUp from 'components/Landing/SignUp';
import Recover from 'components/Landing/Recover';
import SignIn from 'components/Landing/SignInContainer';

export function selectModal({ api, closeModal, switchModal, currentModal } = {}) {
  const modal = {
    signup: <SignUp api={ api } closeModal={ closeModal }/>,
    signin: <SignIn api={ api } closeModal={ closeModal } switchModal={ switchModal }/>,
    recover: <Recover api={ api } closeModal={ closeModal } switchModal={ switchModal }/>,
    avatar: <Avatar api={ api } closeModal={ closeModal } />,
    card: <Card api={ api } closeModal={ closeModal } />,
    payment: <div></div>,
  };

  return modal[currentModal];
}
