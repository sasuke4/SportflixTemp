import React, { PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  displayName: 'SignOut',
  mixins: [ PureRenderMixin ],
  propTypes: {
    closeModal: PropTypes.func.isRequired,
  },
  onSwitch() {
    const { closeModal } = this.props;
    closeModal();
  },
  render() {
    return (
      <div className='modal-block'>
        <h3 className='modal-block__title'>¿Seguro que quieres terminar tu sesión?</h3>
        <button name='avatar' className='button button--block button--gray' type="button" onClick={ this.onSwitch } >Continuar</button>
        <button name='payment' className='button button--block button--gray no-margin-top' type="button" onClick={ this.onSwitch } >Regresar</button>
      </div>
    );
  },
});
