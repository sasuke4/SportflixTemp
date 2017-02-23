import React, { PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Landing from 'components/Landing/Landing';
import CompleteProfile from 'components/CompleteProfile/CompleteProfileContainer';
import Perfil from 'components/Perfil/PerfilContainer';
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
    const { status, api, location } = this.props;
    const { data } = this.state;

    const view = Object.is(status, 'Falta de pago') || Object.is(status, 'Falta perfil')
                ? <CompleteProfile api={ api } location={ location } data={ data } status={ status } />
                : Object.is(status, 'O')
                ? <Perfil />
                : <Landing api={ api } location={ location } data={ data } />;

    return view;
  },
});
