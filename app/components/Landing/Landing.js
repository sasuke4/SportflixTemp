import React, { PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Plans from 'components/Plans';
import Modal from 'components/Modal';
import { request } from 'helpers/fetch-server';
import { selectModal } from 'helpers/selectModal';
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
    this.setState({ showModal: true, currentModal: event.target.name });
  },
  switchModal(nextModal) {
    this.setState({ currentModal: nextModal });
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
    const actualModal = selectModal({ api, closeModal: this.closeModal, switchModal: this.switchModal, currentModal });
    const classNameLanding = showModal ? 'landing landing--blur' : 'landing';
    return (
      <div className='landing-container'>
        <Modal closeModal={ this.closeModal } show={ showModal } location={ location } >
          { actualModal }
        </Modal>
        <div className={ classNameLanding }>
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
            <Plans data={ subscription_plans } location={ location }/>
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
        </div>
      </div>);
  },
});
