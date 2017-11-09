import React from 'react';
import PropTypes from 'prop-types';

import styles from './main.scss';

class Product extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity: 0,
    };

    this.remove = this.remove.bind(this);
    this.add = this.add.bind(this);
  }

  remove() {
    const { quantity } = this.state;
    if (quantity === 0) return;
    const updatedQuantity = quantity - 1;
    let type;
    if (updatedQuantity === 0) {
      type = 'remove';
    } else {
      type = 'update';
    }
    this.setState({ quantity: updatedQuantity }, this.updateBasket(type, updatedQuantity));
  }

  add() {
    const { quantity } = this.state;
    const updatedQuantity = quantity + 1;
    let type;
    if (quantity === 0) {
      type = 'add';
    } else {
      type = 'update';
    }
    this.setState({ quantity: updatedQuantity }, this.updateBasket(type, updatedQuantity));
  }

  updateBasket(type, qty) {
    const {
      code,
      onAddItem,
      onRemoveItem,
      onUpdateItem,
    } = this.props;
    switch (type) {
      case 'remove':
        onRemoveItem(code);
        break;
      case 'add':
        onAddItem(code);
        break;
      default:
        onUpdateItem(code, qty);
    }
  }

  render() {
    const {
      name,
      price,
      code,
      imageThumb,
      offer,
    } = this.props;


    return (
      <div className={styles.product}>
        <div className={styles.product__image}>
          <img src={imageThumb} alt={name} />
        </div>
        <div className={styles.product__details}>
          <p>{`ref: ${code}`}</p>
          <h2>{name}</h2>
          <h3>{`£ ${price}`}</h3>
          <div className={styles['quantity-form']}>
            <button onClick={this.remove} className={styles['quantity-form__button']}>-</button>
            <input type="text" value={this.state.quantity} readOnly />
            <button onClick={this.add} className={styles['quantity-form__button']}>+</button>
          </div>
          {offer && <p className={styles.product__offer}>{offer.description}</p>}
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  code: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imageThumb: PropTypes.string.isRequired,
  onAddItem: PropTypes.func.isRequired,
  onRemoveItem: PropTypes.func.isRequired,
  onUpdateItem: PropTypes.func.isRequired,
  offer: PropTypes.shape().isRequired,
};

export default Product;
