import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { request } from '../../helpers/fetch-server.js';
import ProfileImage from './ProfileImage.js'
import { head } from 'lodash';

export default React.createClass({
  displayName: 'Avatar',
  mixins: [ PureRenderMixin ],
  getInitialState() {
    return {
      images: [],
    };
  },
  componentWillMount() {
    const { api } = this.props;
    request({
      url: `${ api }/api/pages/profile-options/`,
    }).then(response => {
      this.setState({ images: head(response.payload).images });
    }).catch(error => {
      console.log(error);
    }
    );
  },
  render() {
    const images = [
      {
          "id": 1,
          "path": "/media/images/sports/Futbol.svg"
      },
      {
          "id": 2,
          "path": "/media/images/sports/Basket.svg"
      },
      {
          "id": 3,
          "path": "/media/images/sports/Futbol.svg"
      },
      {
          "id": 4,
          "path": "/media/images/sports/Basket.svg"
      },
      {
          "id": 5,
          "path": "/media/images/sports/Futbol.svg"
      },
      {
          "id": 6,
          "path": "/media/images/sports/Basket.svg"
      },
      {
          "id": 7,
          "path": "/media/images/sports/Futbol.svg"
      },
      {
          "id": 8,
          "path": "/media/images/sports/Basket.svg"
      },
      {
          "id": 9,
          "path": "/media/images/sports/Futbol.svg"
      },
      {
          "id": 10,
          "path": "/media/images/sports/Basket.svg"
      },
      {
          "id": 11,
          "path": "/media/images/sports/Futbol.svg"
      },
      {
          "id": 12,
          "path": "/media/images/sports/Basket.svg"
      }
    ]
    const { api } = this.props;
    const imgs = images.map(img => <ProfileImage api={ api } key={img.id} img={ img }/>);

    return (
      <div className='modal-input--avatar'>
        <h3 className='modal-input__title'>SELECCIONA TU AVATAR</h3>

        { imgs }

        <button className='button button--block button--gray' type="button" >Continuar</button>
      </div>
    );
  },
});
