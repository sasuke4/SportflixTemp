import React, { PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { request } from 'helpers/fetch-server';
import { setSesion } from 'state/actions';

export default React.createClass({
  displayName: 'SignIn',
  mixins: [ PureRenderMixin ],
  propTypes: {
    api: PropTypes.string.isRequired,
  },
  onclick() {
    const { api, closeModal, dispatch } = this.props;
    request({
      url: `${ api }/api/users/signin/`,
      method: 'post',
      body: new FormData(this.refs.form),
    }).then(response => {
      closeModal();
      dispatch(setSesion(response.payload.object));
    }).catch(error =>
      console.log(error)
    );
  },
  onSwitch(event) {
    const { switchModal } = this.props;
    switchModal(event.target.dataset.name);
  },
  render() {
    return (
      <form className='modal-input' ref='form'>
        <div className='modal-input__errors'>
          Tu correo electrónico/contraseña son incorrectos. Intenta de nuevo.
        </div>
        <input name='email' placeholder='Correo Electrónico' className='modal-input__input'/>
        <input name='password' type='password' placeholder='Contraseña' className='modal-input__input'/>
        <div data-name='recover' className='modal-input__forget' onClick={ this.onSwitch }>
          ¿Olvidaste tu contraseña?
        </div>
        <button className='button button--block button--gray' type="button" onClick={ this.onclick } >Iniciar Sesión</button>
        <div className='modal-input__create'>
          ¿No tienes cuenta? <span data-name='signup' onClick={ this.onSwitch } >Regístrate</span>
        </div>
      </form>
    );
  },
});
