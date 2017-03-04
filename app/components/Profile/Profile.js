import React, { PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import HeaderWrapper from 'components/HeaderWrapper';
import Modal from 'components/Modal';
import Menu from 'components/Profile/Menu';
import { request } from 'helpers/fetch-server';
import { selectModal } from 'helpers/selectModal';
import { selectUser, menuAccount } from './profile-data';
import { setStatus, setAccountInfo } from 'state/actions';

export default React.createClass({
  displayName: 'Profile',
  mixins: [ PureRenderMixin ],
  propTypes: {
    token: PropTypes.string.isRequired,
    api: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    accountInfo: PropTypes.object.isRequired,
  },
  getInitialState() {
    return {
      profiles: [],
      currentModal: 'avatar',
      showModal: false,
    };
  },
  componentWillMount() {
    this.updateStatus();
  },
  updateStatus() {
    const { api, token, dispatch } = this.props;

    request({
      url: `${ api }/api/account-info/`,
      token,
    }).then(response => {
      const { profiles, status } = response.payload;
      this.setState({ profiles });
      dispatch(setStatus(status));
    }).catch(error => {
      console.log(error);
    }
    );
  },
  openCloseModal() {
    const { showModal } = this.state;
    this.setState({ showModal: !showModal });
  },
  switchModal(nextModal) {
    this.setState({ currentModal: nextModal });
  },
  setAccount(event) {
    const { dispatch } = this.props;
    const { profiles } = this.state;
    const id = event.target.dataset.user;
    const user = profiles.find(profile => Object.is(profile.id, parseInt(id, 10)));
    dispatch(setAccountInfo(user));
  },
  render() {
    const { api, location, accountInfo } = this.props;
    const { showModal, currentModal, profiles } = this.state;
    const classNameLanding = !accountInfo.id ? 'landing landing--blur' : 'landing';
    const actualModal = selectModal({ api, closeModal: this.openCloseModal, switchModal: this.switchModal, currentModal, updateStatus: this.updateStatus });
    const profilesData = selectUser(accountInfo.id, profiles, api, this.openCloseModal, this.setAccount);
    const menuData = accountInfo.id ? <Menu data={ menuAccount } /> : undefined;

    return (
      <div>
        <HeaderWrapper classNameLanding={ classNameLanding } accountInfo={ accountInfo } api={ api } />
        <Modal closeModal={ this.openCloseModal } show={ showModal } location={ location } >
          { actualModal }
        </Modal>
        { menuData }
        { profilesData }
      </div>
    );
  },
});
