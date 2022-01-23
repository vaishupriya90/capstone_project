import '../styles.css';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/cart/cartSlice';
import { searchByValue } from '../redux/Filters/filtersSlice';
import paintingPropType from '../propTypes/paintingPropType';
import { getPaintings } from '../redux/paintings/paintingsSlice';
import getCartItems from '../redux/cart/selectors';
import {
  getAllPaintings, isGetPaintingsLoading, getPaintingsError, isGetPaintingsLoaded,
} from '../redux/paintings/selectors';

import Filters from './Filters';
import SinglePainting from './SinglePainting';
import LoadingDisplay from './sharedComponents/LoadingDisplay';

export const Paintings = ({
  paintings,
  fetchPaintings,
  isPaintingsLoading,
  addItemToCart,
  error,
  removeItemFromCart,
  cartItems,
  searchValue,
}) => {
  const [sortType, setSortType] = useState('');

  useEffect(() => {
    fetchPaintings();
  }, []);

  if (isPaintingsLoading) {
    return (<LoadingDisplay />);
  }

  if (error) {
    return <div>Oops! Could not fetch the list of paintings!</div>;
  }

  const transformPaintings = () => {
    let sortedPaintings = Array.from(paintings);
    if (sortType) {
      sortedPaintings = sortedPaintings.sort((a, b) => (sortType === 'lowToHigh' ? a.price - b.price : b.price - a.price));
    }
    if (searchValue) {
      sortedPaintings = sortedPaintings
        .filter((painting) => painting.name.toLowerCase().includes(searchValue.toLowerCase()));
    }
    return sortedPaintings;
  };

  return (
    <div className="home">
      <Filters sortType={sortType} setSortType={setSortType} />
      <div className="productContainer">
        {transformPaintings().map((painting) => (
          <SinglePainting
            key={painting.id}
            painting={painting}
            error={error}
            addToCart={addItemToCart}
            removeFromCart={removeItemFromCart}
            cartItems={cartItems}
          />
        ))}
      </div>
    </div>

  );
};

Paintings.defaultProps = {
  paintings: [],
  fetchPaintings: () => {},
  isPaintingsLoading: false,
  addItemToCart: () => {},
  error: false,
  removeItemFromCart: () => {},
  cartItems: [],
  searchValue: '',
};

Paintings.propTypes = {
  paintings: PropTypes.arrayOf(paintingPropType),
  fetchPaintings: PropTypes.func,
  isPaintingsLoading: PropTypes.bool,
  addItemToCart: PropTypes.func,
  error: PropTypes.bool,
  removeItemFromCart: PropTypes.func,
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      painting: paintingPropType,
      quantity: PropTypes.number,
    }),
  ),
  searchValue: PropTypes.string,
};

const mapStateToProps = (state) => ({
  paintings: getAllPaintings(state),
  paintingsLoaded: isGetPaintingsLoaded(state),
  isPaintingsLoading: isGetPaintingsLoading(state),
  error: getPaintingsError(state),
  cartItems: getCartItems(state),
  searchValue: state.filters.searchValue,

});

const mapDispatchToProps = (dispatch) => ({
  fetchPaintings: () => dispatch(getPaintings()),
  addItemToCart: (item, qty) => dispatch(addToCart(item, qty)),
  removeItemFromCart: (id) => dispatch(removeFromCart(id)),
  searchText: (searchValue) => dispatch(searchByValue(searchValue)),

});

export default connect(mapStateToProps, mapDispatchToProps)(Paintings);
