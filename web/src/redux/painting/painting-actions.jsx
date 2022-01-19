import axios from 'axios';
import * as actionTypes from './painting-types';

const getPaintings = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_PAINTINGS });

    const { data } = await axios.get(`${process.env.REACT_APP_BASE_API}/api/paintings`);

    dispatch({
      type: actionTypes.GOT_PAINTINGS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: actionTypes.GOT_PAINTINGS_ERROR,
      payload: { err },
    });
  }
};

export default getPaintings;
