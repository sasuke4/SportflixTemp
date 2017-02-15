import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  displayName: 'ProfileImage',
  mixins: [ PureRenderMixin ],
  render() {
    const { api, img } = this.props;
    return (
      <img name={ img.id } className='modal-input__img' src={ `${ api }${ img.path }` } alt='profile-image' />
    );
  },
});