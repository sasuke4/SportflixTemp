import React, { PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Landing from 'components/Landing/Landing';
import Payment from 'components/Payment/Payment';
import Perfil from 'components/Perfil/Perfil';
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
    const view = Object.is(status, 'Falta de pago')
                ? <Payment api={ api } location={ location } data={ data } />
                : Object.is(status, 'o')
                ? <Perfil />
                : <Landing api={ api } location={ location } data={ data } />;

    return (
      <div>
        { view }
      </div>
    );
  },
});
