import React, { PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { request } from 'helpers/fetch-server';

export default React.createClass({
  displayName: 'SignIn',
  mixins: [ PureRenderMixin ],
  propTypes: {
    api: PropTypes.string.isRequired,
  },
  getInitialState() {
    return {
      message: undefined,
    };
  },
  onclick() {
    const { api } = this.props;
    request({
      url: `${ api }/api/users/reset-password/`,
      method: 'post',
      body: new FormData(this.refs.recover),
    }).then(response => {
      this.setState({ message: response.payload.massage });
    }).catch(
      this.setState({ message: 'Ocurrió algún error' })
    );
  },
  onSwitch(event) {
    const { switchModal } = this.props;
    switchModal(event.target.dataset.name);
  },
  render() {
    const { message } = this.state;
    const messageText = <span className='error-message'>{ message }</span>;

    return (
      <form className='modal-block' ref='recover'>
        <h3 className='modal-block__title'>
          ¿OLVIDASTE TU CONTRASEÑA?
        </h3>
        { messageText }
        <input type='email' name='email' placeholder='Correo Electrónico' className='modal-block__input'/>
        <button className='button button--block button--gray' type="button" onClick={ this.onclick }>Enviar</button>
        <div className='modal-block__create'>
          Volver a <span data-name='signin' onClick={ this.onSwitch }>Inicia sesión</span>
        </div>
      </form>
    );
  },
});
