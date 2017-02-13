import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  displayName: 'SignIn',
  mixins: [ PureRenderMixin ],
  render() {
    return (
      <div className='modal-input'>
        <input className='modal-input__input'/>
        <input className='modal-input__input'/>
        <button className='button button--gray' type="button" >Iniciar Sesión</button>
      </div>
    );
  },
});
