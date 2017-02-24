import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import ProfileImage from './ProfileImage';
import { request } from 'helpers/fetch-server';
import { setAvatar } from 'state/actions';
import { head } from 'lodash';
import { v4 } from 'uuid';

export default React.createClass({
  displayName: 'Avatar',
  mixins: [ PureRenderMixin ],
  getInitialState() {
    return {
      images: [],
      selectedImage: {},
    };
  },
  componentWillMount() {
    const { api, token } = this.props;
    request({
      url: `${ api }/api/pages/profile-options/`,
      token,
    }).then(response => {
      this.setState({ images: head(response.payload).images });
    }).catch(error => {
      console.log(error);
    }
    );
  },
  setImageSelected(selectedImage) {
    const { dispatch } = this.props;
    this.setState({ selectedImage });
    dispatch(setAvatar(selectedImage));
  },
  onSwitch() {
    const { selectedImage } = this.state;
    if (!selectedImage) return;

    const { switchModal } = this.props;
    switchModal('profile-create');
  },
  render() {
    const { api } = this.props;
    const { selectedImage } = this.state;
    const { id } = selectedImage;
    const { images } = this.state;
    const imgs = images.map(img => <ProfileImage api={ api }
                                                 key={ v4() }
                                                 img={ img }
                                                 setImageSelected={ this.setImageSelected }
                                                 selectedImage={ id } />);

    return (
      <div className='modal-block modal-block--avatar'>
        <h3 className='modal-block__title'>SELECCIONA TU AVATAR</h3>
        <div className='images-container'>
          { imgs }
        </div>
        <button className='button button--block button--gray' type="button" onClick={ this.onSwitch }>Continuar</button>
      </div>
    );
  },
});
