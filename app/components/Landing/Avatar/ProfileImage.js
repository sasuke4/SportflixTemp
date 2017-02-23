import React, { PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  displayName: 'ProfileImage',
  mixins: [ PureRenderMixin ],
  propTypes: {
    setImageSelected: PropTypes.func.isRequired,
    selectedImage: PropTypes.number,
    api: PropTypes.string.isRequired,
    img: PropTypes.object.isRequired,
  },
  setImageSelected() {
    const { img, setImageSelected } = this.props;
    setImageSelected(img);
  },
  render() {
    const { api, img, selectedImage } = this.props;
    const { id, path } = img;
    const classImage = Object.is(selectedImage, id) ? 'images-container__img--on' : '';

    return (
      <img data-id={ id }
           className={ `images-container__img ${ classImage }`.trim() }
           src={ `${ api }${ path }` }
           alt='profile-image'
           onClick={ this.setImageSelected } />
    );
  },
});
