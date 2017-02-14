import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  displayName: 'SignIn',
  mixins: [ PureRenderMixin ],
  render() {
    return (
      <div className='modal-input'>
        <input placeholder='Correo Electrónico' className='modal-input__input'/>
        <input type='password' placeholder='Contraseña' className='modal-input__input'/>
        <button className='button button--gray' type="button" >Iniciar Sesión</button>
      </div>
    );
  },
});
