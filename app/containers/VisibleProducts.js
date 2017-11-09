import { connect } from 'react-redux';
import { addProduct, removeProduct, updateProduct } from '../actions';
import ProductList from '../components/ProductList/main';

const mapStateToProps = state => ({
  products: state.products,
  offers: state.offers,
});

const mapDispatchToProps = dispatch =>
  ({
    onAddItem: code => dispatch(addProduct(code)),
    onRemoveItem: code => dispatch(removeProduct(code)),
    onUpdateItem: (code, qty) => dispatch(updateProduct(code, qty)),
  });


const VisibleProducts = connect(mapStateToProps, mapDispatchToProps)(ProductList);

export default VisibleProducts;
