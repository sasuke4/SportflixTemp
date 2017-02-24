import React, { PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import HeaderWrapper from 'components/HeaderWrapper';
import Modal from 'components/Modal';
import { request } from 'helpers/fetch-server';
import { selectModal } from 'helpers/selectModal';

export default React.createClass({
  displayName: 'Perfil',
  mixins: [ PureRenderMixin ],
  propTypes: {
    token: PropTypes.string.isRequired,
    api: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  },
  getInitialState() {
    return {
      profiles: [],
      currentModal: 'avatar',
      showModal: false,
      selectedProfile: true,
    };
  },
  componentWillMount() {
    this.updateProfiles();
  },
  updateProfiles() {
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
  openCloseModal(event) {
    const { showModal } = this.state;
    this.setState({ showModal: !showModal });
  },
  switchModal(nextModal) {
    this.setState({ currentModal: nextModal });
  },
  render() {
    const { api, location } = this.props;
    const { showModal, currentModal, profiles, selectedProfile } = this.state;
    const classNameLanding = selectedProfile ? 'landing landing--blur' : 'landing';
    const actualModal = selectModal({ api, closeModal: this.openCloseModal, switchModal: this.switchModal, currentModal, updateProfiles: this.updateProfiles });
    const profilesData = profiles.map(({ name, profileImage } = {}) =>  <div className='profile-images-block-block'>
                                                                           <img className='profile-images-block-block__img'
                                                                                src={ `${ api }/media/${ profileImage }` }
                                                                                alt='profile-image' />
                                                                           <span>{ name }</span>
                                                                         </div>);
    return (
      <div>
        <HeaderWrapper classNameLanding={ classNameLanding } />
        <Modal closeModal={ this.openCloseModal } show={ showModal } location={ location } >
          { actualModal }
        </Modal>
        <div className='perfil'>
          <span className='perfil__title'>¿QUIÉN ESTÁ VIENDO AHORA?</span>
            <div className='profile-images-block'>
              { profilesData }
            </div>
          <span className='perfil__text' onClick={ this.openCloseModal }>AÑADIR PERFIL</span>
        </div>
      </div>
    );
  },
});
