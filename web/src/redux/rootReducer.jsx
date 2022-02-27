import { combineReducers } from 'redux';
import cartReducer from './cart/cartSlice';
import paintingsReducer from './paintings/paintingsSlice';
import filtersReducer from './filter/filter-reducer';
import ordersReducer from './orders/ordersSlice';

const rootReducer = combineReducers({
  paintings: paintingsReducer,
  cartItems: cartReducer,
  filters: filtersReducer,
  orders: ordersReducer,
});

export default rootReducer;
