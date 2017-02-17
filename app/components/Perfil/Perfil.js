import React, { PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  displayName: 'SelectPerfil',
  mixins: [ PureRenderMixin ],
  propTypes: {
    status: PropTypes.string.isRequired,
    api: PropTypes.string.isRequired,
  },
  render() {
    const { status, api } = this.props;

    return (
      <div className='payment-container'>
        <Modal closeModal={ this.closeModal } show={ showModal } location={ location } classNameModal={ classNameModal }>
          { actualModal }
        </Modal>
        <div className={ classNameLanding }>
          <div className='landing-top'>
            <div className='landing-top__logo'>SPORTFLIX</div>
          </div>
          <div className='landing-header'>
            <img className='landing-header__img' src={ `${ api }${ image1 }` } alt="header-img" />
          </div>
        </div>
      </div>
    );
  },
});
