import { combineReducers } from 'redux';
import cartReducer from './cart/cart-reducer';
import paintingReducer from './painting/painting-reducer';
import filterReducer from './Filters/filter-reducer';

const rootReducer = combineReducers({
  paintingList: paintingReducer,
  cartItemList: cartReducer,
  filters: filterReducer,
});

export default rootReducer;
