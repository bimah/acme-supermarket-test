import basket from './basket';
import * as types from '../constants/ActionTypes';

describe('basket reducer', () => {
  it('should handle ADD_PRODUCT', () => {
    expect(basket([], {
      type: types.ADD_PRODUCT,
      code: 'FR1',
    })).toEqual([
      {
        code: 'FR1',
        qty: 1,
      },
    ]);
  });

  it('should handle UPDATE_PRODUCT', () => {
    expect(basket([
      {
        code: 'FR1',
        qty: 1,
      },
    ], {
      type: types.UPDATE_PRODUCT,
      code: 'FR1',
      qty: 2,
    })).toEqual([
      {
        code: 'FR1',
        qty: 2,
      },
    ]);
  });

  it('should handle REMOVE_PRODUCT', () => {
    expect(basket([
      {
        code: 'FR1',
        qty: 1,
      },
    ], {
      type: types.REMOVE_PRODUCT,
      code: 'FR1',
    })).toEqual([]);
  });
});
