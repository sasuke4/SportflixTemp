import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { request } from 'helpers/fetch-server.js';
import { setStatus } from 'state/actions'

export default React.createClass({
  displayName: 'Card',
  mixins: [ PureRenderMixin ],
  onSwitch(event) {
    const { switchModal } = this.props;
    const nextModal = event.target.name;
    switchModal(nextModal);
  },
  sendPayment() {
    const { api, token, dispatch } = this.props;
    dispatch(setStatus('Falta de perfil'))

    // request({
    //   url: `${ api }/api/users/payments/`,
    //   method: 'post',
    //   token,
    //   body: 'algo',
    // }).then(response => {
    //   console.log(response.payload.message);
    // }).catch(error => {
    //   console.log(error);
    // });
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
        <button className='button button--block button--gray' type="button" onClick={ this.sendPayment } >Continuar</button>
        <button name='plans' className='button button--block button--gray no-margin-top' type="button" onClick={ this.onSwitch } >Regresar</button>
      </div>
    );
  },
});
