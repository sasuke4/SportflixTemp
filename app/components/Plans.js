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
    const { data, location } = this.props;
    const plans = data.map((plan, index) => {
      const { name, price, available_screens, ppv } = plan;
      const srcPpv = ppv ? `${ location }/img/ok.svg` : `${ location }/img/not.svg`;

      const plansColumn = <div className='plans-table__column'>
                            <div className='plan-name'>{ name }</div>
                            <div className='plan-price'>
                              <span className='plan-price__sim'>$</span>
                              <span className='plan-price__price'>{ price }</span>
                              <span className='plan-price__coin'>USD</span>
                            </div>
                            <div className='plan-description'>
                              <div className='plan-description__element'>
                                <img className='plan-description__img' src={ `${ location }/img/ok.svg` } alt="ok-img" />
                                HD disponible
                              </div>
                              <div className='plan-description__element'>
                                <img className='plan-description__img' src={ `${ location }/img/ok.svg` } alt="ok-img" />
                                Sin anuncios
                              </div>
                              <div className='plan-description__element'>
                                <img className='plan-description__img' src={ `${ location }/img/ok.svg` } alt="ok-img" />
                                Ve en cualquier dispositivo
                              </div>
                              <div className='plan-description__element'>
                                <span className='plan-description__element--num'>{ available_screens }</span>
                                Pantallas disponibles
                              </div>
                              <div className='plan-description__element'>
                                <img className='plan-description__img' src={ srcPpv } alt="ok-img" />
                                PPV disponible
                              </div>
                            </div>
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
