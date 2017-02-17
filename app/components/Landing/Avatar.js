import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import ProfileImage from './ProfileImage.js'
import { request } from '../../helpers/fetch-server.js';
import { head } from 'lodash';
import { v4 } from 'uuid';

export default React.createClass({
  displayName: 'Avatar',
  mixins: [ PureRenderMixin ],
  getInitialState() {
    return {
      images: [],
      selectedImage: undefined,
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
    this.setState({ selectedImage });
  },
  sendImage() {
    const { selectedImage } = this.state;
    if (!selectedImage) return;
    console.log('imagen selecionada');
  },
  render() {
    const { api } = this.props;
    const { images } = this.state;
    console.log(JSON.stringify(images));
    const imgs = images.map(img => <ProfileImage api={ api } key={ v4() } img={ img } setImageSelected={ this.setImageSelected }/>);

    return (
      <div className='modal-input--avatar'>
        <h3 className='modal-input__title'>SELECCIONA TU AVATAR</h3>
        <div className='images-container'>
          { imgs }
        </div>
        <button className='button button--block button--gray' type="button" onClick={ this.sendImage }>Continuar</button>
      </div>
    );
  },
});
