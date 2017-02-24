import React from 'react';
import Avatar from 'components/Landing/Avatar/AvatarContainer';
import Card from 'components/CompleteProfile/CardContainer';
import SignUp from 'components/Landing/SignUp';
import Recover from 'components/Landing/Recover';
import SignIn from 'components/Landing/SignIn/SignInContainer';
import SignOut from 'components/SignOut/SignOutContainer';
import PerfilCreate from 'components/Landing/PerfilCreate/PerfilCreateContainer';
import Plans from 'components/Plans';

export function selectModal({ api, closeModal, switchModal, currentModal, subscription_plans = [], location, updateProfiles } = {}) {
  const modal = {
    signup: <SignUp api={ api } closeModal={ closeModal } switchModal={ switchModal } />,
    signin: <SignIn api={ api } closeModal={ closeModal } switchModal={ switchModal } />,
    signout: <SignOut closeModal={ closeModal } switchModal={ switchModal } />,
    recover: <Recover api={ api } closeModal={ closeModal } switchModal={ switchModal } />,
    avatar: <Avatar closeModal={ closeModal } switchModal={ switchModal } />,
    card: <Card api={ api } closeModal={ closeModal } switchModal={ switchModal } />,
    plans: <Plans data={ subscription_plans } location={ location } payment={ true } switchModal={ switchModal } />,
  'perfil-create': <PerfilCreate switchModal={ switchModal } closeModal={ closeModal } updateProfiles={ updateProfiles } />,
  };

  return modal[currentModal];
}
