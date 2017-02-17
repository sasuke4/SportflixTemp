import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  displayName: 'Card',
  mixins: [ PureRenderMixin ],
  render() {
    return (
      <div className='modal-input--avatar'>
        <h3 className='modal-input__title'>ELIGE EL MÉTODO DE PAGO</h3>

        <input placeholder='Nombre' className='modal-input__input'/>
        <input placeholder='Apellido' className='modal-input__input'/>
        <input placeholder='Numero de tarjeta' className='modal-input__input'/>
        <input placeholder='MM-AA' className='modal-input__input'/>
        <input placeholder='CVV' className='modal-input__input'/>
        <button className='button button--block button--gray' type="button" >Continuar</button>
        <button className='button button--block button--gray no-margin-top' type="button" >Regresar</button>
      </div>
    );
  },
});