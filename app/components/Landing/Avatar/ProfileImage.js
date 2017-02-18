import React, { PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  displayName: 'ProfileImage',
  mixins: [ PureRenderMixin ],
  propTypes: {
    setImageSelected: PropTypes.func.isRequired,
    api: PropTypes.string.isRequired,
    img: PropTypes.object.isRequired,
  },
  setImageSelected(event) {
    const { setImageSelected } = this.props;
    setImageSelected(event.target.dataset.id);
  },
  render() {
    const { api, img } = this.props;
    return (
      <img data-id={ img.id }
           className='images-container__img'
           src={ `${ api }${ img.path }` }
           alt='profile-image'
           onClick={ this.setImageSelected } />
    );
  },
});
