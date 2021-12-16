/* eslint-disable no-unused-vars */
import '../styles.css';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import SinglePainting from './SinglePainting';
// Actions
import { getPaintings as listPaintings } from '../redux/shopping/shopping-actions';

const Paintings = () => {
  const dispatch = useDispatch();

  const getPaintings = useSelector((state) => state.getPaintings);
  const { paintings, loaded, getError } = getPaintings;

  useEffect(() => {
    dispatch(listPaintings());
  }, [dispatch]);

  return (
    <div className="productContainer">
      {
        paintings.map((painting) => (
          <SinglePainting painting={painting} />
        ))
}
    </div>

  );
};

export default Paintings;
