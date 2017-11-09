import * as types from '../constants/ActionTypes';

export const addProduct = code => ({ type: types.ADD_PRODUCT, code });
export const removeProduct = code => ({ type: types.REMOVE_PRODUCT, code });
export const updateProduct = (code, qty) => ({ type: types.UPDATE_PRODUCT, qty, code });
