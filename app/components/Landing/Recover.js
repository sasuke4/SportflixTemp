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
      body: new FormData(this.refs.recover),
    }).then(response => {
      closeModal();
      dispatch(setSesion(response.payload.object));
    }).catch(error =>
      console.log(error)
    );
  },
  onSwitch(event) {
    const { switchModal } = this.props;
    console.log(event.target.id);
    switchModal(event.target.id);
  },
  render() {
    return (
      <form className='modal-input' ref='recover'>
        <h3 className='modal-input__title'>
          ¿OLVIDASTE TU CONTRASEÑA?
        </h3>
        <div className='modal-input__errors'>
          Tu correo electrónico/contraseña son incorrectos. Intenta de nuevo.
        </div>
        <input type='email' placeholder='Correo Electrónico' className='modal-input__input'/>
        <button className='button button--block button--gray' type="button" >Enviar</button>
        <div className='modal-input__create'>
          Volver a <span id='signin' onClick={ this.onSwitch }>Inicia sesión</span>
        </div>
      </form>
    );
  },
});