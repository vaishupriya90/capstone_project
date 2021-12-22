import '../styles.css';
import React from 'react';
import { connect } from 'react-redux';
import getPaintings from '../redux/painting/painting-actions';
import { addToCart, removeFromCart } from '../redux/cart/cart-actions';

import SinglePainting from './SinglePainting';
// Actions

const Paintings = ({
  // eslint-disable-next-line react/prop-types
  paintings, fetchPaintings, paintingsLoaded, addItemToCart,
}) => {
  if (!paintingsLoaded) {
    fetchPaintings();
  }
  return (
    <div className="productContainer">
      {
        // eslint-disable-next-line react/prop-types
        paintings.map((painting) => (
          <SinglePainting key={painting.id} painting={painting} addToCart={addItemToCart} />
        ))
}
    </div>

  );
};

const mapStateToProps = (state) => ({
  paintings: state.paintingList.paintings,
  paintingsLoaded: state.paintingList.loaded,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPaintings: () => dispatch(getPaintings()),
  addItemToCart: (id, qty) => dispatch(addToCart(id, qty)),
  removeFromCart: () => dispatch(removeFromCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Paintings);
