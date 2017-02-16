import React, { PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  displayName: 'Modal',
  mixins: [ PureRenderMixin ],
  propTypes: {
    show: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    classNameModal: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
    ]).isRequired,
  },
  render() {
    const { show, closeModal, children, classNameModal } = this.props;
    const showModal = show ? 'modal--on' : '';

    return (
      <div className={ `modal ${ showModal } ${ classNameModal }`.trim() } >
        <img className='modal__img' src={ `${ location }/img/close-modal.svg` } onClick={ closeModal } alt='close-modal' />
        { children }
      </div>);
  },
});
