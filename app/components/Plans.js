import React, { PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { v4 } from 'uuid';

export default React.createClass({
  displayName: 'Plans',
  mixins: [ PureRenderMixin ],
  propTypes: {
    data: PropTypes.array.isRequired,
  },
  switchModal() {
    const { switchModal } = this.props;
    switchModal('card');
  },
  render() {
    const { data, location, payment = false } = this.props;
    const classPlansTable = payment ? 'plans-table plans-table--payment' : 'plans-table';
    const plans = data.map((plan, index) => {
      const { name, price, available_screens, ppv } = plan;
      const srcPpv = ppv ? `${ location }/img/ok.svg` : `${ location }/img/not.svg`;
      const classNameColumn = payment ? 'plans-table__column plans-table__column--payment' : 'plans-table__column';
      const classPlanName = payment ? 'plan-name plan-name--payment' : 'plan-name';
      const classPlanPricePrice = payment ? 'plan-price__price plan-price__price--payment' : 'plan-price__price';
      const classPlanPriceSim = payment ? 'plan-price__sim plan-price__sim--payment' : 'plan-sim__price';
      const classPlanPriceCoin = payment ? 'plan-price__coin plan-price__coin--payment' : 'plan-price__coin';
      const classPlanDescription = payment ? 'plan-description plan-description--payment' : 'plan-description';
      const buttonSelectPlan = payment ? <button name='signup' className='button button--gray' type="button" onClick={ this.switchModal }>Seleccionar</button>
                                       : undefined;

      const plansColumn = <div className={ classNameColumn }>
                            <div className={ classPlanName }>{ name }</div>
                            <div className='plan-price'>
                              <span className={ classPlanPriceSim }>$</span>
                              <span className={ classPlanPricePrice }>{ price }</span>
                              <span className={ classPlanPriceCoin }>USD</span>
                            </div>
                            <div className={ classPlanDescription }>
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
                            { buttonSelectPlan }
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

    const componentPlans = payment ? <div className='plans-payment'>
                                       <div className='plans-payment__title'>SELECCIONA UN PLAN</div>
                                       <div className={ classPlansTable }>
                                         { plans }
                                       </div>
                                     </div>
                                   : <div className={ classPlansTable }>
                                       { plans }
                                     </div>;
    return componentPlans;
  },
});
