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
  setImageSelected() {
    const { img, setImageSelected } = this.props;
    setImageSelected(img);
  },
  render() {
    const { api, img } = this.props;
    const { id, path } = img;
    return (
      <img data-id={ id }
           className='images-container__img'
           src={ `${ api }${ path }` }
           alt='profile-image'
           onClick={ this.setImageSelected } />
    );
  },
});
