import { connect } from 'react-redux';
import Basket from '../components/Basket/main';

const mapStateToProps = state => ({
  items: state.basket,
  products: state.products,
  offers: state.offers,
});

const UpdatedBasket = connect(mapStateToProps)(Basket);

export default UpdatedBasket;
