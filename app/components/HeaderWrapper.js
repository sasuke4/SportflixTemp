import React, { PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  displayName: 'HeaderWrapper',
  mixins: [ PureRenderMixin ],
  propTypes: {
    openModal: PropTypes.func,
    classNameLanding: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
    ]).isRequired,
  },
  render() {
    const { classNameLanding, openModal, children } = this.props;
    const signInButton = openModal ? <button name='signin' className='landing-top__sign-in' onClick={ openModal }>
                                       INICIAR SESIÓN
                                     </button>
                                   : undefined;

    return (
      <div className={ classNameLanding }>
        <div className='landing-top'>
          <div className='landing-top__logo'>SPORTFLIX</div>
          { signInButton }
        </div>
        { children }
      </div>);
  },
});
