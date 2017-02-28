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
    ]),
    api: PropTypes.string,
  },
  render() {
    const { classNameLanding, openModal, children, accountInfo = {}, api } = this.props;
    const { id, profileImage, name } = accountInfo;

    const signInButton = openModal ? <button name='signin' className='landing-top__sign-in' onClick={ openModal }>
                                       INICIAR SESIÓN
                                     </button>
                                   : undefined;

    const accountInfoData = id
                          ? <div>
                              <img className='landing-top__img' src={ `${ api }/media/${ profileImage }` } />
                              <span className='landing-top__name'>{ name }</span>
                            </div>
                          : <div className='landing-top__logo'>SPORTFLIX</div>;

    const title = id ? <span className='landing-top-title'>SPORTFLIX</span> : undefined;

    return (
      <div className={ classNameLanding }>
        <div className='landing-top'>
          { accountInfoData }
          { title }
          { signInButton }
        </div>
        { children }
      </div>);
  },
});
