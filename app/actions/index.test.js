import * as types from '../constants/ActionTypes';
import * as actions from './index';

describe('market actions', () => {
  it('addProduct should create a ADD_PRODUCT action', () => {
    expect(actions.addProduct('FR1')).toEqual({
      type: types.ADD_PRODUCT,
      code: 'FR1',
    });
  });

  it('updateProduct should create a UPDATE_PRODUCT action', () => {
    expect(actions.updateProduct('FR1', 2)).toEqual({
      type: types.UPDATE_PRODUCT,
      qty: 2,
      code: 'FR1',
    });
  });

  it('removeProduct should create a REMOVE_PRODUCT action', () => {
    expect(actions.removeProduct('FR1')).toEqual({
      type: types.REMOVE_PRODUCT,
      code: 'FR1',
    });
  });
});
