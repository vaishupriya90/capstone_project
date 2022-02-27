import '../../styles.css';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { addToCart, removeFromCart } from '../../redux/cart/cartSlice';
import { searchByValue } from '../../redux/filtersx/filtersSlice';
import paintingPropType from '../../propTypes/paintingPropType';
import { getPaintings } from '../../redux/paintings/paintingsSlice';
import getCartItems from '../../redux/cart/selectors';
import {
  getAllPaintings, isGetPaintingsLoading, getPaintingsError, isGetPaintingsLoaded,
} from '../../redux/paintings/selectors';

import Filters from '../Filters';
import SinglePainting from './SinglePainting';
import LoadingDisplay from '../sharedComponents/LoadingDisplay';
import getSearchValue from '../../redux/filtersx/selectors';

export const PaintingsComponent = ({
  paintings,
  fetchPaintings,
  isPaintingsLoading,
  addItemToCart,
  error,
  removeItemFromCart,
  cartItems,
  searchValue,
}) => {
  const [sortType, setSortType] = useState('lowToHigh');

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
    <>
      <Row>
        <Col lg="9" />
        <Col
          lg="1"
          style={{
            textAlign: 'right', marginRight: '0px', paddingRight: '0px', marginBottom: '0px',
          }}
        >
          Sort by price:
        </Col>
        <Col
          lg="2"
          style={{
            marginRight: '0px', marginLeft: '0px', paddingRight: '0px', paddingLeft: '10px',
          }}
        >
          <Filters sortType={sortType} setSortType={setSortType} />
        </Col>
      </Row>
      <Row>
        <Col>
          {' '}
          <hr />

        </Col>
      </Row>

      <Row>
        <Col lg="12" className="products">

          {transformPaintings().map((painting) => (
            <Row key={painting.id}>
              <Col>
                <SinglePainting
                  key={painting.id}
                  painting={painting}
                  error={error}
                  addToCart={addItemToCart}
                  removeFromCart={removeItemFromCart}
                  cartItems={cartItems}
                />
              </Col>
            </Row>
          ))}

        </Col>
      </Row>
    </>
  );
};

PaintingsComponent.defaultProps = {
  paintings: [],
  fetchPaintings: () => {},
  isPaintingsLoading: false,
  addItemToCart: () => {},
  error: false,
  removeItemFromCart: () => {},
  cartItems: [],
  searchValue: '',
};

PaintingsComponent.propTypes = {
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
  searchValue: getSearchValue(state),

});

const mapDispatchToProps = (dispatch) => ({
  fetchPaintings: () => dispatch(getPaintings()),
  addItemToCart: (item, qty) => dispatch(addToCart(item, qty)),
  removeItemFromCart: (id) => dispatch(removeFromCart(id)),
  searchText: (searchValue) => dispatch(searchByValue(searchValue)),

});

export default connect(mapStateToProps, mapDispatchToProps)(PaintingsComponent);
