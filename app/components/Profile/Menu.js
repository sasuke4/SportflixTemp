import React, { PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { v4 } from 'uuid';
// import { setCurrentMenu } from 'state/actions';

export default React.createClass({
  displayName: 'Menu',
  mixins: [ PureRenderMixin ],
  propTypes: {
    data: PropTypes.array.isRequired,
  },
  getInitialState() {
    return {
      currentItem: 'account',
    };
  },
  setCurrentItem(event) {
    const currentItem = event.target.dataset.key;
    this.setState({ currentItem });
  },
  render() {
    const { data } = this.props;
    const { currentItem } = this.state;
    const menu = data.map(({ name, key } = {}) => {
      const className = !Object.is(key, currentItem) ? 'menu__item' : 'menu__item menu__item--on';
      return <li key={ v4() } data-key={ key } className={ className } onClick={ this.setCurrentItem }>{ name }</li>;
    });

    return (
      <ul className='menu'>
        { menu }
      </ul>
    );
  },
});
