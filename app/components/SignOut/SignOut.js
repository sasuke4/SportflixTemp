import React, { PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { setStatus } from 'state/actions';

export default React.createClass({
  displayName: 'SignOut',
  mixins: [ PureRenderMixin ],
  propTypes: {
    closeModal: PropTypes.func.isRequired,
    switchModal: PropTypes.func.isRequired,
    previousModal: PropTypes.string.isRequired,
  },
  onSwitch() {
    const { switchModal, previousModal } = this.props;
    switchModal(previousModal);
  },
  closeModal() {
    const { closeModal, dispatch } = this.props;
    closeModal();
    dispatch(setStatus(''));
  },
  render() {
    return (
      <div className='modal-block'>
        <h3 className='modal-block__title'>¿Seguro que quieres terminar tu sesión?</h3>
        <button className='button button--block button--gray' type="button" onClick={ this.closeModal } >Continuar</button>
        <button className='button button--block button--gray no-margin-top' type="button" onClick={ this.onSwitch } >Regresar</button>
      </div>
    );
  },
});
