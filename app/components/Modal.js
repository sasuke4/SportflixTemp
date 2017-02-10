import React, { PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  displayName: 'Modal',
  mixins: [ PureRenderMixin ],
  propTypes: {
    show: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    children: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
    ]).isRequired,
  },
  render() {
    const { show, closeModal, children } = this.props;
    const classNameModal = !show ? 'modal' : 'modal modal--on';

    return (
      <div className={ classNameModal }>
        <img className='modal__img' src={ `${ location }/img/close-modal.svg` } onClick={ closeModal } alt='close-modal' />
        { children }
      </div>);
  },
});
