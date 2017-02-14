import React, { PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { request } from '../../helpers/fetch-server.js';

export default React.createClass({
  displayName: 'SignUp',
  mixins: [ PureRenderMixin ],
  propTypes: {
    api: PropTypes.string.isRequired,
  },
  onclick() {
    const { api, closeModal } = this.props;
    request({
      url: `${ api }/api/users/`,
      method: 'post',
      body: new FormData(this.refs.form),
    }).then(response => {
      console.log(response.payload.message);
      closeModal();
    }).catch(error =>
      console.log(error)
    );
  },
  render() {
    return (
      <form className='modal-input' ref='form'>
        <input name='email' placeholder='Correo Electrónico' className='modal-input__input'/>
        <input name='password' type='password' placeholder='Contraseña' className='modal-input__input'/>
        <input name='password_confirmation' type='password' placeholder='Confirmación de contraseña' className='modal-input__input'/>
        <span className='modal-input__conditions'>
          Al hacer click en registrarte, estás indicando que has leído y estás de acuerdo con los
          Términos de Servicio y Política de Privacidad de SPORTFLIX.
        </span>
        <button className='button button--gray' type="button" onClick={ this.onclick }>Regístrate</button>
      </form>
    );
  },
});
