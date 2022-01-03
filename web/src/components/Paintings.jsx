/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import '../styles.css';
import React from 'react';
import { connect } from 'react-redux';
import getPaintings from '../redux/painting/painting-actions';
import { addToCart, removeFromCart } from '../redux/cart/cart-actions';
import { sortByPrice, search } from '../redux/Filters/filter-actions';

import Filters from './Filters';
import SinglePainting from './SinglePainting';
// Actions

const Paintings = ({
  // eslint-disable-next-line react/prop-types
  // eslint-disable-next-line max-len
  paintings, fetchPaintings, paintingsLoaded, addItemToCart, error, removeItemFromCart, cartItems, sortType, sortFunction, searchValue,
}) => {
  if (!paintingsLoaded) {
    fetchPaintings();
  }
  if (error) {
    return <div>Oops! Could not fetch the list of paintings.</div>;
  }

  const transformProducts = () => {
    let sortedPaintings = paintings;
    if (sortType) {
      sortedPaintings = sortedPaintings.sort((a, b) => (sortType === 'lowToHigh' ? a.price - b.price : b.price - a.price));
    }
    if (searchValue) {
      sortedPaintings = sortedPaintings.filter((painting) => painting.name.toLowerCase().includes(searchValue.toLowerCase()));
    }
    return sortedPaintings;
  };
  return (

    <div className="productContainer">

      <Filters sort={sortType} sortFunction={sortFunction} />

      {
        // eslint-disable-next-line react/prop-types
        transformProducts().map((painting) => (
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
  sortType: state.filters.sort,
  searchValue: state.filters.searchValue,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPaintings: () => dispatch(getPaintings()),
  addItemToCart: (item, qty) => dispatch(addToCart(item, qty)),
  removeItemFromCart: (id) => dispatch(removeFromCart(id)),
  sortFunction: (sortType) => dispatch(sortByPrice(sortType)),
  searchText: (searchValue) => dispatch(search(searchValue)),

});

export default connect(mapStateToProps, mapDispatchToProps)(Paintings);
