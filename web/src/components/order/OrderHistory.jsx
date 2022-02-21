/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { connect } from 'react-redux';
import {
  Row, Col, Container,
} from 'react-bootstrap';
import { getOrders } from '../../redux/orders/ordersSlice';
import {
  getAllOrders, isGetOrdersLoading, isGetOrdersLoaded, getOrdersError,
} from '../../redux/orders/selectors';
import LoadingDisplay from '../sharedComponents/LoadingDisplay';
import OrderList from './OrderList';
import OrderDetail from './OrderDetail';

const OrderHistory = ({
  fetchOrders,
  orders,
  error,
  isOrdersLoading,
}) => {
  const { user } = useAuth0();
  const [selectedOrder, setSelectedOrder] = useState({});

  useEffect(() => {
    fetchOrders();
  }, []);

  if (isOrdersLoading) {
    return (<LoadingDisplay />);
  }

  if (error) {
    return <div>Oops! Could not fetch the Orders!</div>;
  }

  const filterOrdersByUser = () => {
    let filteredOrders = Array.from(orders);
    filteredOrders = filteredOrders
      .filter((order) => order.userEmail.includes(user.email));
    return filteredOrders;
  };

  const orderDetails = (order) => {
    setSelectedOrder(order);
  };

  return (
    <Container>
      <Row>
        <Col>
          <h2>Orders</h2>
          <Row>
            <Col>
              <OrderList filterOrdersByUser={filterOrdersByUser} orderDetails={orderDetails} />
            </Col>
          </Row>
        </Col>
        <Col>
          <h2>Order Details</h2>
          <Row>
            <Col>
              Order#
              {' '}
              {selectedOrder.orderNumber}
            </Col>
            <Col>
              Total:
              {' '}
              $
              {selectedOrder.total}
            </Col>
            <hr />
          </Row>
          <OrderDetail order={selectedOrder} />
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  orders: getAllOrders(state),
  ordersLoaded: isGetOrdersLoaded(state),
  isOrdersLoading: isGetOrdersLoading(state),
  error: getOrdersError(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchOrders: () => dispatch(getOrders()),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderHistory);
