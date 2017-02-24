import React, { PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Landing from 'components/Landing/LandingContainer';
import CompleteProfile from 'components/CompleteProfile/CompleteProfileContainer';
import Profile from 'components/Profile/ProfileContainer';
import { request } from 'helpers/fetch-server';
import { head } from 'lodash';

export default React.createClass({
  displayName: 'App',
  mixins: [ PureRenderMixin ],
  propTypes: {
    status: PropTypes.string.isRequired,
    api: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  },
  getInitialState() {
    return {
      data: {},
    };
  },
  componentWillMount() {
    const { api } = this.props;

    request({
      url: `${ api }/api/pages/index/`,
    }).then(response => {
      this.setState({ data: head(response.payload) });
    }).catch(error => {
      console.log(error);
    }
    );
  },
  render() {
    const { status } = this.props;
    const { data } = this.state;

    const view = Object.is(status, 'Falta de pago') || Object.is(status, 'Falta perfil')
                ? <CompleteProfile data={ data } />
                : Object.is(status, 'O')
                ? <Profile />
                : <Landing data={ data } />;

    return view;
  },
});
