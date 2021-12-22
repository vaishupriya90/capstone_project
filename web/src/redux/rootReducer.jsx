import { combineReducers } from 'redux';
import cartReducer from './cart/cart-reducer';
import paintingReducer from './painting/painting-reducer';

const rootReducer = combineReducers({
  paintingList: paintingReducer,
  cartItemList: cartReducer,
});

export default rootReducer;
