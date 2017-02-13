import React, { PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { v4 } from 'uuid';

export default React.createClass({
  displayName: 'Plans',
  mixins: [ PureRenderMixin ],
  propTypes: {
    data: PropTypes.array.isRequired,
  },
  componentWillMount() {
  },
  render() {
    const { data } = this.props;
    const plans = data.map((plan, index) => {
      const { name, price, available_screens, ppv } = plan;

      const plansColumn = <div className='plans-table__column'>
                            <div className='plan-name'>{ name }</div>
                            <div className='plan-price'>
                              <span className='plan-price__sim'>$</span>
                              <span className='plan-price__price'>{ price }</span>
                              <span className='plan-price__coin'>USD</span>
                            </div>
                            <div className='plan-description'>{ available_screens } pantallas disponibles</div>
                            <div className='plan-description'>{ ppv } PPV disponible</div>
                          </div>;

      if (!Object.is(index, data.length - 1)) {
        return <div key={ v4() } >
                { plansColumn }
                <div className='plans-table__line'></div>
               </div>;
      }
      return <div key={ v4() }>
              { plansColumn }
             </div>;
    });
    return (
      <div className='plans-table'>
        { plans }
      </div>);
  },
});
