import React, { PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { request } from 'helpers/fetch-server';
import { setSesion } from 'state/actions';
import { v4 } from 'uuid';

export default React.createClass({
  displayName: 'SignIn',
  mixins: [ PureRenderMixin ],
  propTypes: {
    api: PropTypes.string.isRequired,
  },
  getInitialState() {
    return {
      errorMessage: [],
    };
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
    }).catch(error => {
      this.setState({ errorMessage: error.message });
    }
    );
  },
  onSwitch(event) {
    const { switchModal } = this.props;
    switchModal(event.target.dataset.name);
  },
  render() {
    const { errorMessage } = this.state;
    const errorSpan = errorMessage.map(message => <span key={ v4() } className='error-message'>{ message }</span>);

    return (
      <form className='modal-block' ref='form'>
        { errorSpan }
        <input name='email' placeholder='Correo Electrónico' className='modal-block__input'/>
        <input name='password' type='password' placeholder='Contraseña' className='modal-block__input'/>
        <div data-name='recover' className='modal-block__forget' onClick={ this.onSwitch }>
          ¿Olvidaste tu contraseña?
        </div>
        <button className='button button--block button--gray' type="button" onClick={ this.onclick } >Iniciar Sesión</button>
        <div className='modal-block__create'>
          ¿No tienes cuenta? <span data-name='signup' onClick={ this.onSwitch } >Regístrate</span>
        </div>
      </form>
    );
  },
});
