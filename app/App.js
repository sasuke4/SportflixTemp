import React, { PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Landing from 'components/Landing/Landing';
import Payment from 'components/Payment/Payment';

export default React.createClass({
  displayName: 'App',
  mixins: [ PureRenderMixin ],
  propTypes: {
    status: PropTypes.string.isRequired,
    api: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  },
  render() {
    const { status, api, location } = this.props;
    const view = Object.is(status, 'Falta de pago')
                ? <Payment api={ api } location={ location } />
                : <Landing api={ api } location={ location } />;

    return (
      <div>
        { view }
      </div>
    );
  },
});
