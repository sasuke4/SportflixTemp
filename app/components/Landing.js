import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Plans from './Plans.js';

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
  getInitialState() {
    return {
      data: responseExample,
    };
  },
  componentWillMount() {
  },
  render() {
    const { header, headline_1, headline_2, headline_3, image1, image2, image3, subscription_plans } = this.state.data;
    const { location } = this.props;
    return (
      <div className='landing'>
        <div className='landing-top'>
          <div className='landing-top__logo'>SPORTFLIX</div>
          <div className='landing-top__sign-in'>INICIAR SESIÓN</div>
        </div>
        <div className='landing-header'>
          <img className='landing-header__img' src={ `${ location }${ image1 }` } alt="header-img" />
          <div className='landing-header__header'>{ header }</div>
          <div className='landing-header-left'>
            <div className='landing-header-left__headline-1'>{ headline_1 }</div>
            <button className='button' type="button">REGÍSTRATE</button>
          </div>
        </div>
        <div className='plans-container'>
          <div className='plans-container__headline-2'>{ headline_2 }</div>
          <div className='plans-container__headline-3'>{ headline_3 }</div>
          <Plans data={ subscription_plans } />
          <button className='button' type="button">REGÍSTRATE</button>
        </div>
        <div className='landing-banner'>
          <img className='landing-banner__img' src={ `${ location }${ image2 }` } alt="header-img" />
          <div className='landing-banner__text'>DONDE QUIERAS SIN ANUNCIOS EN LA MAS ALTA CALIDAD</div>
        </div>
        <div className='landing-banner'>
          <img className='landing-banner__img landing-banner__img--big' src={ `${ location }${ image3 }` } alt="header-img" />
          <div className='landing-banner__text landing-banner__text--big'>DONDE QUIERAS SIN ANUNCIOS EN LA MAS ALTA CALIDAD</div>
        </div>
      </div>);
  },
});
