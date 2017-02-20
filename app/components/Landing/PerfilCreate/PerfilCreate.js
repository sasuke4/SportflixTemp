import React, { PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { request } from 'helpers/fetch-server.js';

export default React.createClass({
  displayName: 'PerfilCreate',
  mixins: [ PureRenderMixin ],
  propTypes: {
    api: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  },
  onclick() {
  },
  render() {
    const { api, avatar } = this.props;
    const { path } = avatar;
    console.log(JSON.stringify(avatar));

    return (
      <form className='modal-block' ref='form'>
        <h3 className='modal-block__title'>
          CREAR PERFIL
        </h3>
        <img className='images-container__img' src={ `${ api }${ path }` } alt='profile-image' />
        <button className='button button--block button--gray' type="button" onClick={ this.onclick }>Guardar</button>
      </form>
    );
  },
});
