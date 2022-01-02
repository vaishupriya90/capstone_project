import '../styles.css';
import React from 'react';
import { connect } from 'react-redux';
import getPaintings from '../redux/painting/painting-actions';
import { addToCart, removeFromCart } from '../redux/cart/cart-actions';

import SinglePainting from './SinglePainting';
// Actions

const Paintings = ({
  // eslint-disable-next-line react/prop-types
  paintings, fetchPaintings, paintingsLoaded, addItemToCart, error, removeItemFromCart, cartItems,
}) => {
  if (!paintingsLoaded) {
    fetchPaintings();
  }
  if (error) {
    return <div>Oops! Could not fetch the list of paintings.</div>;
  }
  return (
    <div className="productContainer">
      {
        // eslint-disable-next-line react/prop-types
        paintings.map((painting) => (
          // eslint-disable-next-line max-len
          <SinglePainting key={painting.id} painting={painting} addToCart={addItemToCart} error={error} removeFromCart={removeItemFromCart} cartItems={cartItems} />
        ))
}
    </div>

  );
};

const mapStateToProps = (state) => ({
  paintings: state.paintingList.paintings,
  paintingsLoaded: state.paintingList.loaded,
  error: state.paintingList.getError,
  cartItems: state.cartItemList.cartItems,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPaintings: () => dispatch(getPaintings()),
  addItemToCart: (item, qty) => dispatch(addToCart(item, qty)),
  removeItemFromCart: (id) => dispatch(removeFromCart(id)),

});

export default connect(mapStateToProps, mapDispatchToProps)(Paintings);
