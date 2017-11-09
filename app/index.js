import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import market from './reducers';

import App from './components/App/main';

import products from '../products.json';
import offers from '../pricingRules.json';

const store = createStore(market, { products, offers });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
