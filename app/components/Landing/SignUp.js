import React, { PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { request } from 'helpers/fetch-server.js';

export default React.createClass({
  displayName: 'SignUp',
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
    const { api, switchModal } = this.props;
    request({
      url: `${ api }/api/users/`,
      method: 'post',
      body: new FormData(this.refs.form),
    }).then(response => {
      console.log(response.payload.message);
      switchModal('signin');
    }).catch(error => {
      this.setState({ errorMessage: error.message });
    });
  },
  render() {
    const { errorMessage } = this.state;
    const errorSpan = errorMessage.map(message => <span className='error-message'>{ message }</span>);

    return (
      <form className='modal-block' ref='form'>
        { errorSpan }
        <input name='email' placeholder='Correo Electrónico' className='modal-block__input'/>
        <input name='password' type='password' placeholder='Contraseña' className='modal-block__input'/>
        <input name='password_confirmation' type='password' placeholder='Confirmación de contraseña' className='modal-block__input'/>
        <span className='modal-block__conditions'>
          Al hacer click en registrarte, estás indicando que has leído y estás de acuerdo con los
          Términos de Servicio y Política de Privacidad de SPORTFLIX.
        </span>
        <button className='button button--block button--gray' type="button" onClick={ this.onclick }>Regístrate</button>
      </form>
    );
  },
});
