import React, { PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Landing from 'components/Landing/Landing'

const location = window.location.origin;

export default React.createClass({
  displayName: 'App',
  mixins: [ PureRenderMixin ],
  propTypes: {
    status: PropTypes.string.isRequired,
  },
  render() {
    const { status } = this.props;
    const hola = Object.is(status, 'Falta de pago')
                ? <div></div>
                : <Landing api='http://localhost:8000' location={ location } />;

    return (
      <div>
        { hola }
      </div>
    );
  },
});
