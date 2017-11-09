import { mount } from 'enzyme';
import React from 'react';
import Basket from '../../Basket/main';

import products from '../../../../products.json';

import offers from '../../../../pricingRules.json';

describe('Basket', () => {
  it('should not have items', () => {
    const props = {
      products,
      items: [],
      offers: [],
    };
    const renderedComponent = mount(<Basket {...props} />);

    expect(renderedComponent.find('.basket').getElement().props.children[2]).toEqual(false);
  });

  it('it should return the correct price', () => {
    const props = {
      products,
      offers: [],
      items: [
        {
          code: 'SR1',
          qty: 1,
        },
      ],
    };

    const renderedComponent = mount(<Basket {...props} />);

    expect(renderedComponent.find('.basket__total_value').getElement().props.children).toEqual('£ 5.00');
  });

  it('it should return the correct calculation', () => {
    const props = {
      products,
      offers: [],
      items: [
        {
          code: 'SR1',
          qty: 1,
        },
        {
          code: 'FR1',
          qty: 2,
        },
      ],
    };

    const renderedComponent = mount(<Basket {...props} />);

    expect(renderedComponent.find('.basket__total_value').getElement().props.children).toEqual('£ 11.22');
  });

  it('it should return the correct calculation with offers', () => {
    const props = {
      products,
      offers,
      items: [
        {
          code: 'SR1',
          qty: 1,
        },
        {
          code: 'FR1',
          qty: 2,
        },
        {
          code: 'CF1',
          qty: 1,
        },
      ],
    };

    const renderedComponent = mount(<Basket {...props} />);

    expect(renderedComponent.find('.basket__total_value').getElement().props.children).toEqual('£ 19.34');
  });

  it('it should return the correct calculation with offers', () => {
    const props = {
      products,
      offers,
      items: [
        {
          code: 'FR1',
          qty: 2,
        },
      ],
    };

    const renderedComponent = mount(<Basket {...props} />);

    expect(renderedComponent.find('.basket__total_value').getElement().props.children).toEqual('£ 3.11');
  });

  it('it should return the correct calculation with offers', () => {
    const props = {
      products,
      offers,
      items: [
        {
          code: 'FR1',
          qty: 1,
        },
        {
          code: 'SR1',
          qty: 3,
        },
      ],
    };

    const renderedComponent = mount(<Basket {...props} />);

    expect(renderedComponent.find('.basket__total_value').getElement().props.children).toEqual('£ 16.61');
  });
});
