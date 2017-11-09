import React from 'react';
import PropTypes from 'prop-types';
import Product from '../Product/main';

import styles from './main.scss';

const ProductList = ({
  products, offers, onAddItem, onRemoveItem, onUpdateItem,
}) => {
  const getOfferForProduct = (productCode) => {
    if (offers.length === 0) return null;
    return offers.filter(offer => productCode === offer.productCode)[0];
  };
  return (
    <div className={styles['product-list']}>
      {products.map(product =>
      (<Product
        {...product}
        onAddItem={onAddItem}
        onRemoveItem={onRemoveItem}
        onUpdateItem={onUpdateItem}
        key={product.code}
        offer={getOfferForProduct(product.code)}
      />))}
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    imageThumb: PropTypes.string,
  })).isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.string,
    type: PropTypes.string,
    productCode: PropTypes.string,
    description: PropTypes.string,
    qty: PropTypes.number,
    pricePercentage: PropTypes.number,
  })).isRequired,
  onAddItem: PropTypes.func.isRequired,
  onRemoveItem: PropTypes.func.isRequired,
  onUpdateItem: PropTypes.func.isRequired,
};

export default ProductList;
