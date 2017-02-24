import React, { PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import HeaderWrapper from 'components/HeaderWrapper';
import Plans from 'components/Plans.js';
import Modal from 'components/Modal.js';
import { setPreviousModal } from 'state/actions';
import { request } from 'helpers/fetch-server.js';
import { selectModal } from 'helpers/selectModal';
import { head } from 'lodash';
import { setStatus } from 'state/actions';

export default React.createClass({
  displayName: 'CompleteProfile',
  mixins: [ PureRenderMixin ],
  propTypes: {
    api: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired,
  },
  getInitialState() {
    const { status } = this.props;
    const currentModal = Object.is(status, 'Falta de pago') ? 'plans' : 'avatar';
    return {
      currentModal,
      showModal: true,
      status,
    };
  },
  componentWillReceiveProps(nextProps) {
    const { status } = nextProps;
    if (Object.is(status, this.state.status)) return;
    const currentModal = Object.is(status, 'Falta de pago') ? 'plans' : 'avatar';
    this.setState({ currentModal });
  },
  openModal(event) {
    this.setState({ showModal: true, currentModal: event.target.name });
  },
  switchModal(nextModal) {
    this.setState({ currentModal: nextModal });
  },
  closeModal() {
    const { dispatch } = this.props;
    const { currentModal } = this.state;
    dispatch(setPreviousModal(currentModal));
    this.switchModal('signout');
  },
  updateStatus() {
    const { api, token, dispatch } = this.props;

    request({
      url: `${ api }/api/account-info/`,
      token,
    }).then(response => {
      const { status } = response.payload;
      dispatch(setStatus(status));
    }).catch(error => {
      console.log(error);
    }
    );
  },
  render() {
    const { currentModal, showModal } = this.state;
    const { api, location, data } = this.props;
    const { image1, subscription_plans } = data;
    const actualModal = selectModal({ api, closeModal: this.closeModal, switchModal: this.switchModal, currentModal, subscription_plans, location, updateStatus: this.updateStatus });
    const classNameLanding = showModal ? 'landing landing--blur' : 'landing';
    const classNameModal = Object.is(currentModal, 'plans') ? 'modal--big' : undefined;

    return (
      <div className='complete-profile-container'>
        <Modal closeModal={ this.closeModal } show={ showModal } location={ location } classNameModal={ classNameModal }>
          { actualModal }
        </Modal>
        <HeaderWrapper classNameLanding={ classNameLanding }>
           <div className='landing-header'>
             <img className='landing-header__img' src={ `${ api }${ image1 }` } alt="header-img" />
           </div>
        </HeaderWrapper>
      </div>);
  },
});
