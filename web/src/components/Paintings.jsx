import '../styles.css';
import React from 'react';
import { connect } from 'react-redux';
import { getPaintings } from '../redux/shopping/shopping-actions';

import SinglePainting from './SinglePainting';
// Actions

// eslint-disable-next-line react/prop-types
const Paintings = ({ paintings, fetchPaintings }) => {
  fetchPaintings();
  return (
    <div className="productContainer">
      {
        // eslint-disable-next-line react/prop-types
        paintings.map((painting) => (
          <SinglePainting key={painting.id} painting={painting} />
        ))
}
    </div>

  );
};

const mapStateToProps = (state) => ({
  paintings: state.shop.paintings,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPaintings: () => dispatch(getPaintings()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Paintings);
