import React, { PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Plans from './Plans.js';
import Modal from './Modal.js';

const responseExample = {
  "header": "Sports go online",
  "headline_1": "Todos los deportes en un sólo lugar",
  "headline_2": "Tenemos el plan perefecto para tí",
  "headline_3": "Ya sea que te guste el futbol o el waterpolo. Tenemos el plan perfecto para ti.",
  "image1": "/media/images/big/1.jpg",
  "image2": "/media/images/small/2.jpg",
  "image3": "/media/images/big/1.jpg",
  "subscription_plans": [
    {
      "pk": 1,
      "name": "Familiar",
      "price": 19.99,
      "available_screens": 2,
      "ppv": false
    },
    {
      "pk": 2,
      "name": "Business",
      "price": 14.99,
      "available_screens": 5,
      "ppv": false
    },
    {
      "pk": 3,
      "name": "Platinum",
      "price": 29.99,
      "available_screens": 10,
      "ppv": true
    }
  ]
};

export default React.createClass({
  displayName: 'Landing',
  mixins: [ PureRenderMixin ],
  propTypes: {
    api: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  },
  getInitialState() {
    return {
      data: responseExample,
      modalSignUp: true,
    };
  },
  openCloseModal(name) {
    const stateModal = this.state[name];
    this.setState({ [name]: !stateModal });
  },
  openCloseModalSingUp() {
    this.openCloseModal('modalSignUp');
  },
  componentWillMount() {
  },
  render() {
    const { data, modalSignUp } = this.state;
    const { header, headline_1, headline_2, headline_3, image1, image2, image3, subscription_plans } = data;
    const { api, location } = this.props;
    return (
      <div className='landing'>
        <Modal closeModal={ this.openCloseModalSingUp } show={ modalSignUp } location={ location } >
          <div className='modal-input'>
            <input className='modal-input__input'/>
            <input className='modal-input__input'/>
            <input className='modal-input__input'/>
            <span className='modal-input__conditions'>
              Al hacer click en registrarte, estás indicando que has leído y estás de acuerdo con los
              Términos de Servicio y Política de Privacidad de SPORTFLIX.
            </span>
            <button className='button button--gray' type="button" >Regístrate</button>
          </div>
        </Modal>
        <div className='landing-top'>
          <div className='landing-top__logo'>SPORTFLIX</div>
          <div className='landing-top__sign-in'>INICIAR SESIÓN</div>
        </div>
        <div className='landing-header'>
          <img className='landing-header__img' src={ `${ api }${ image1 }` } alt="header-img" />
          <div className='landing-header__header'>{ header }</div>
          <div className='landing-header-left'>
            <div className='landing-header-left__headline-1'>{ headline_1 }</div>
            <button className='button' type="button" onClick={ this.openCloseModalSingUp }>REGÍSTRATE</button>
          </div>
        </div>
        <div className='plans-container'>
          <div className='plans-container__headline-2'>{ headline_2 }</div>
          <div className='plans-container__headline-3'>{ headline_3 }</div>
          <Plans data={ subscription_plans } />
          <button className='button' type="button" onClick={ this.openCloseModalSingUp }>REGÍSTRATE</button>
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
