import React, { PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { request } from 'helpers/fetch-server.js';
import { isNumber, isUndefined, kebabCase } from 'lodash';
import { v4 } from 'uuid';

function renderOptions(options = []) {
  return options.map(({ id, name } = {}) => <option key={ v4() } value={ id }>{ name }</option>);
}

function getSelectedValue(selected, options) {
  if (isUndefined(selected)) return 1;
  if (isNumber(selected)) return selected;
  const element = options.find(option => Object.is(kebabCase(option.name), kebabCase(selected)));

  return !isUndefined(element) ? element.value : 1;
}

export default React.createClass({
  displayName: 'Select',
  mixins: [ PureRenderMixin ],
  propTypes: {
    options: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    selected: PropTypes.string,
  },
  getInitialState() {
    const { selected, options = [] } = this.props;
    const value = getSelectedValue(selected, options);

    return { options, value };
  },
  handleChange(event) {
    const { onChange } = this.props;
    const value = event.target.value;
    if (onChange) onChange(value);
    this.setState({ value });
  },
  render() {
    const { options = [], name, className } = this.props;
    const { value } = this.state;

    return (
      <select className={ className }
              name={ name }
              value={ value }
              onChange={ this.handleChange }>
        { renderOptions(options) }
      </select>
    );
  },
});
