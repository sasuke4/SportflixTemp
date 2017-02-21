import React, { PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Plans from 'components/Plans.js';
import Modal from 'components/Modal.js';
import { setPreviousModal } from 'state/actions';
import { request } from 'helpers/fetch-server.js';
import { selectModal } from 'helpers/selectModal';
import { head } from 'lodash';

export default React.createClass({
  displayName: 'Payment',
  mixins: [ PureRenderMixin ],
  propTypes: {
    api: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired,
  },
  getInitialState() {
    return {
      currentModal: 'payment',
      showModal: true,
    };
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
  render() {
    const { currentModal, showModal } = this.state;
    const { api, location, data } = this.props;
    const { image1, subscription_plans } = data;
    const actualModal = selectModal({ api, closeModal: this.closeModal, switchModal: this.switchModal, currentModal, subscription_plans, location });
    const classNameLanding = showModal ? 'landing landing--blur' : 'landing';
    const classNameModal = Object.is(currentModal, 'payment') ? 'modal--big' : undefined;

    return (
      <div className='payment-container'>
        <Modal closeModal={ this.closeModal } show={ showModal } location={ location } classNameModal={ classNameModal }>
          { actualModal }
        </Modal>
        <div className={ classNameLanding }>
          <div className='landing-top'>
            <div className='landing-top__logo'>SPORTFLIX</div>
          </div>
          <div className='landing-header'>
            <img className='landing-header__img' src={ `${ api }${ image1 }` } alt="header-img" />
          </div>
        </div>
      </div>);
  },
});
