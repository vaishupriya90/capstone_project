export const getAllOrders = (state) => state.orders.orders;
export const isGetOrdersLoading = (state) => state.orders.meta.isGetOrdersLoading;
export const isGetOrdersLoaded = (state) => state.orders.meta.isGetOrdersLoaded;
export const getOrdersError = (state) => state.orders.meta.getOrdersError;
