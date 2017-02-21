import React, { PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { request } from 'helpers/fetch-server';

export default React.createClass({
  displayName: 'Perfil',
  mixins: [ PureRenderMixin ],
  propTypes: {
    token: PropTypes.string.isRequired,
    api: PropTypes.string.isRequired,
  },
  getInitialState() {
    return {
      profiles: [],
    };
  },
  componentWillMount() {
    const { api, token } = this.props;

    request({
      url: `${ api }/api/account-info/`,
      token,
    }).then(response => {
      this.setState({ profiles: response.payload.profiles });
    }).catch(error => {
      console.log(error);
    }
    );
  },
  render() {
    const { api } = this.props;
    const { profiles } = this.state;
    const profilesData = profiles.map(({ name, profileImage } = {}) => <div className='profile-images-block'>
                                                                         <div className='profile-images-block-block'>
                                                                           <img src={ `${ api }/media/${ profileImage }` }
                                                                                alt='profile-image' />
                                                                           <span>{ name }</span>
                                                                         </div>
                                                                       </div>);
    return (
      <div className='perfil'>
        <span className='perfil__title'>¿QUIÉN ESTÁ VIENDO AHORA?</span>
        { profilesData }
        <span className='perfil__text'>AÑADIR PERFIL</span>
      </div>
    );
  },
});
