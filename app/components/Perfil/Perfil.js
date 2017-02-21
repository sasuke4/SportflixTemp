import React, { PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  displayName: 'SelectPerfil',
  mixins: [ PureRenderMixin ],
  propTypes: {
    status: PropTypes.string.isRequired,
    api: PropTypes.string.isRequired,
  },
  render() {
    return (
      <div className='perfil'>
      </div>
    );
  },
});
