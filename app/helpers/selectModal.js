import React from 'react';
import Avatar from 'components/Landing/Avatar';
import Card from 'components/Payment/Card';
import SignUp from 'components/Landing/SignUp';
import Recover from 'components/Landing/Recover';
import SignIn from 'components/Landing/SignInContainer';
import Plans from 'components/Plans';

export function selectModal({ api, closeModal, switchModal, currentModal, subscription_plans = [], location } = {}) {
  const modal = {
    signup: <SignUp api={ api } closeModal={ closeModal }/>,
    signin: <SignIn api={ api } closeModal={ closeModal } switchModal={ switchModal }/>,
    recover: <Recover api={ api } closeModal={ closeModal } switchModal={ switchModal }/>,
    avatar: <Avatar api={ api } closeModal={ closeModal } />,
    card: <Card api={ api } closeModal={ closeModal } />,
    payment: <Plans data={ subscription_plans } location={ location } payment={ true } switchModal={ switchModal } />
  };

  return modal[currentModal];
}
