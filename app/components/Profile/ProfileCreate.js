import React, { PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Select from 'components/Select';
import { request } from 'helpers/fetch-server';
import { setStatus, setProfileCreate } from 'state/actions';
import { head } from 'lodash';

export default React.createClass({
  displayName: 'ProfileCreate',
  mixins: [ PureRenderMixin ],
  propTypes: {
    api: PropTypes.string.isRequired,
    avatar: PropTypes.object.isRequired,
    switchModal: PropTypes.func.isRequired,
    token: PropTypes.string.isRequired,
    closeModal: PropTypes.func.isRequired,
    updateStatus: PropTypes.func,
  },
  getInitialState() {
    return {
      languages: [],
    };
  },
  goToAvatar() {
    const { switchModal, dispatch } = this.props;
    const name = this.refs.form.querySelector('input[name="name"]').value;
    dispatch(setProfileCreate({ name }));
    switchModal('avatar');
  },
  componentWillMount() {
    const { api, token } = this.props;
    request({
      url: `${ api }/api/pages/profile-options/`,
      token,
    }).then(response => {
      this.setState({ languages: head(response.payload).lenguages });
    }).catch(error => {
      console.log(error);
    }
    );
  },
  createPersona() {
    const { api, avatar, closeModal, token, dispatch, updateStatus } = this.props;
    const { id } = avatar;
    const formData = new FormData(this.refs.form);
    formData.append('avatar', id);

    request({
      url: `${ api }/api/users/personas/`,
      method: 'post',
      body: formData,
      token,
    }).then(response => {
      console.log(response.payload.message);
      closeModal();
      dispatch(setProfileCreate({ name: '' }));
      updateStatus();
    }).catch(error =>
      console.log(error)
    );
  },
  render() {
    const { api, avatar, profileCreate } = this.props;
    const { languages } = this.state;
    const { path } = avatar;
    const { name } = profileCreate;

    return (
      <form className='modal-block' ref='form'>
        <h3 className='modal-block__title'>
          CREAR PERFIL
        </h3>
        <img className='images-container__img' src={ `${ api }${ path }` } alt='profile-image' onClick={ this.goToAvatar } />
        <div className='user-avatar-container'>
          <input className='user-avatar-container__input' name='name' defaultValue={ name } placeholder='Nombre' className='modal-block__input'/>
          <Select className='user-avatar-container__select' options={ languages } name='language' />
        </div>
        <button className='button button--block button--gray' type="button" onClick={ this.createPersona }>Guardar</button>
      </form>
    );
  },
});
