import '../styles.css';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getPaintings from '../redux/painting/painting-actions';
import { addToCart, removeFromCart } from '../redux/cart/cart-actions';
import { sortByPrice, search } from '../redux/Filters/filter-actions';
import paintingPropType from '../propTypes/paintingPropType';

import Filters from './Filters';
import SinglePainting from './SinglePainting';
import LoadingDisplay from './sharedComponents/LoadingDisplay';

export const Paintings = ({
  paintings,
  fetchPaintings,
  paintingsLoaded,
  addItemToCart,
  error,
  removeItemFromCart,
  cartItems,
  sortType,
  sortFunction,
  searchValue,
}) => {
  // test this - that fetchPaintings is called and loading display is returned
  if (!paintingsLoaded) {
    // fetchPaintings();

    return (<LoadingDisplay />);
  }

  // test this - that error message is returned
  if (error) {
    return <div>Oops! Could not fetch the list of paintings!</div>;
  }

  const transformProducts = () => {
    let sortedPaintings = paintings;
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
      <Filters sort={sortType} sortFunction={sortFunction} />
      <div className="productContainer">
        {transformProducts().map((painting) => (
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
  paintingsLoaded: false,
  addItemToCart: () => {},
  error: false,
  removeItemFromCart: () => {},
  cartItems: [],
  sortType: '',
  sortFunction: () => {},
  searchValue: '',
};

Paintings.propTypes = {
  paintings: PropTypes.arrayOf(paintingPropType),
  fetchPaintings: PropTypes.func,
  paintingsLoaded: PropTypes.bool,
  addItemToCart: PropTypes.func,
  error: PropTypes.bool,
  removeItemFromCart: PropTypes.func,
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      painting: paintingPropType,
      qty: PropTypes.number,
    }),
  ),
  sortType: PropTypes.string,
  sortFunction: PropTypes.func,
  searchValue: PropTypes.string,
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
