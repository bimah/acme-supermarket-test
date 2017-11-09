import { combineReducers } from 'redux';
import products from './products';
import basket from './basket';
import offers from './offers';

const market = combineReducers({
  products,
  offers,
  basket,
});

export default market;
