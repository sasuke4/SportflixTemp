import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  displayName: 'SignUp',
  mixins: [ PureRenderMixin ],
  render() {
    return (
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
    );
  },
});
