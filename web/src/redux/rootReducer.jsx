import { combineReducers } from 'redux';
import cartReducer from './cart/cartSlice';
import paintingsReducer from './paintings/paintingsSlice';
import filtersReducer from './Filters/filter-reducer';
import ordersReducer from './Orders/ordersSlice';

const rootReducer = combineReducers({
  paintings: paintingsReducer,
  cartItems: cartReducer,
  filters: filtersReducer,
  orders: ordersReducer,
});

export default rootReducer;
