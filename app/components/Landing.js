import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  displayName: 'Landing',
  mixins: [ PureRenderMixin ],
  getInitialState() {
    return {
    };
  },
  render() {
    return <div className='landing'>
  },
});
