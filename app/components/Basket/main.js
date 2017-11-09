import React from 'react';
import PropTypes from 'prop-types';

import styles from './main.scss';

const Basket = ({ items, products, offers }) => {
  const getSelectedItem = (itemsArray, itemCode, code = 'code') => {
    const selectedItem = itemsArray.filter(item => item[code] === itemCode);
    return selectedItem ? selectedItem[0] : null;
  };

  const getBulkPriceAfterOffer = (itemPrice, offer, qty) => {
    switch (offer.type) {
      case 'fix': {
        const fullPrice = (qty % offer.qty) * itemPrice;
        const withOffer = (((qty - (qty % offer.qty)) * itemPrice) / 100) * offer.pricePercentage;
        return (fullPrice + withOffer);
      }
      case 'bulk': {
        if (qty > offer.qty) {
          return ((itemPrice * qty) / 100) * offer.pricePercentage;
        }
        return itemPrice * qty;
      }
      default:
        return null;
    }
  };

  const getBulkPrice = (code, price, qty) => {
    const offer = getSelectedItem(offers, code, 'productCode');
    if (offer) {
      return getBulkPriceAfterOffer(price, offer, qty);
    }
    return (price * qty);
  };

  const getBasketTotal = () => {
    let total = 0;
    items.forEach((item) => {
      const { price } = getSelectedItem(products, item.code);
      total += getBulkPrice(item.code, price, item.qty);
    });
    return total;
  };

  return (
    <div className={styles.basket}>
      <h2>Your Basket</h2>
      {items.length === 0 && <p>You basket is empty</p>}
      {items.length > 0 && items.map((item) => {
        const { name, price } = getSelectedItem(products, item.code);
        return (
          <div className={styles.basket__item} key={`basket-item-${item.code}`}>
            <p className={styles.bold}>{name}</p>
            <p>{`${item.qty} @ £ ${price}`}</p>
            <p className={styles.bold}>{`£ ${getBulkPrice(item.code, price, item.qty).toFixed(2)}`}</p>
          </div>
      );
      })}
      {items.length > 0 && <p className={styles.basket__total}>Total <span className={styles.basket__total_value}>{`£ ${getBasketTotal().toFixed(2)}`}</span></p>}
    </div>
  );
};

Basket.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    productCode: PropTypes.string,
    quantity: PropTypes.number,
  })).isRequired,
  products: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default Basket;
