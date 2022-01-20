import { combineReducers } from 'redux';
import cartReducer from './cart/cartSlice';
import paintingsReducer from './paintings/paintingsSlice';
import filtersReducer from './Filters/filter-reducer';

const rootReducer = combineReducers({
  paintings: paintingsReducer,
  cartItems: cartReducer,
  filters: filtersReducer,
});

export default rootReducer;
