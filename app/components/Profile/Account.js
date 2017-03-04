import React, { PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { v4 } from 'uuid';

export default React.createClass({
  displayName: 'Account',
  mixins: [ PureRenderMixin ],
  propTypes: {
    data: PropTypes.array.isRequired,
  },
  getInitialState() {
    return {
    };
  },
  render() {

    return (
      <ul className='account'>
      </ul>
    );
  },
});
