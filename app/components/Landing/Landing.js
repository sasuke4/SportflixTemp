import React, { PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Plans from '../Plans.js';
import Modal from '../Modal.js';
import { request } from '../../helpers/fetch-server.js';
import { modalType } from './landing-data.js';
import { head } from 'lodash';

export default React.createClass({
  displayName: 'Landing',
  mixins: [ PureRenderMixin ],
  propTypes: {
    api: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  },
  getInitialState() {
    return {
      data: {},
      currentModal: 'signup',
      showModal: false,
    };
  },
  openModal(event) {
    console.log(event.target.name);
    this.setState({ showModal: true, currentModal: event.target.name });
  },
  closeModal() {
    this.setState({ showModal: false });
  },
  componentWillMount() {
    const { api } = this.props;
    request({
      url: `${ api }/api/pages/index/`,
    }).then(response => {
      this.setState({ data: head(response.payload) });
    }).catch(error => {
      console.log(error);
    }
    );
  },
  render() {
    const { data, currentModal, showModal } = this.state;
    const { header, headline_1, headline_2, headline_3, image1, image2, image3, subscription_plans = [] } = data;
    const { api, location } = this.props;
    const actualModal = modalType({ currentModal, api });
    return (
      <div className='landing'>
        <Modal closeModal={ this.closeModal } show={ showModal } location={ location } >
          { actualModal }
        </Modal>
        <div className='landing-top'>
          <div className='landing-top__logo'>SPORTFLIX</div>
          <button name='signin' className='landing-top__sign-in' onClick={ this.openModal }>INICIAR SESIÓN</button>
        </div>
        <div className='landing-header'>
          <img className='landing-header__img' src={ `${ api }${ image1 }` } alt="header-img" />
          <div className='landing-header__header'>{ header }</div>
          <div className='landing-header-left'>
            <div className='landing-header-left__headline-1'>{ headline_1 }</div>
            <button name='signup' className='button' type="button" onClick={ this.openModal }>REGÍSTRATE</button>
          </div>
        </div>
        <div className='plans-container'>
          <div className='plans-container__headline-2'>{ headline_2 }</div>
          <div className='plans-container__headline-3'>{ headline_3 }</div>
          <Plans data={ subscription_plans } />
          <button name='signup' className='button' type="button" onClick={ this.openModal }>REGÍSTRATE</button>
        </div>
        <div className='landing-banner'>
          <img className='landing-banner__img' src={ `${ api }${ image2 }` } alt="header-img" />
          <div className='landing-banner__text'>DONDE QUIERAS SIN ANUNCIOS EN LA MAS ALTA CALIDAD</div>
        </div>
        <div className='landing-banner'>
          <img className='landing-banner__img landing-banner__img--big' src={ `${ api }${ image3 }` } alt="header-img" />
          <div className='landing-banner__text landing-banner__text--big'>DONDE QUIERAS SIN ANUNCIOS EN LA MAS ALTA CALIDAD</div>
        </div>
      </div>);
  },
});
