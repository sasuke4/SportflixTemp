import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  displayName: 'Card',
  mixins: [ PureRenderMixin ],
  onSwitch(event) {
    const { switchModal } = this.props;
    const nextModal = event.target.name;
    switchModal(nextModal);
  },
  render() {
    return (
      <div className='modal-block modal-block--avatar'>
        <h3 className='modal-block__title'>ELIGE EL MÉTODO DE PAGO</h3>
        <input placeholder='Nombre' className='modal-block__input'/>
        <input placeholder='Apellido' className='modal-block__input'/>
        <input placeholder='Numero de tarjeta' className='modal-block__input'/>
        <input placeholder='MM-AA' className='modal-block__input'/>
        <input placeholder='CVV' className='modal-block__input'/>
        <button name='avatar' className='button button--block button--gray' type="button" onClick={ this.onSwitch } >Continuar</button>
        <button name='payment' className='button button--block button--gray no-margin-top' type="button" onClick={ this.onSwitch } >Regresar</button>
      </div>
    );
  },
});
