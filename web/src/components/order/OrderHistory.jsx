/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { connect } from 'react-redux';
import { Table, Row, Col } from 'react-bootstrap';
import { getOrders } from '../../redux/orders/ordersSlice';
import {
  getAllOrders, isGetOrdersLoading, isGetOrdersLoaded, getOrdersError,
} from '../../redux/orders/selectors';
import LoadingDisplay from '../sharedComponents/LoadingDisplay';

const OrderHistory = ({
  fetchOrders,
  orders,
  error,
  isOrdersLoading,
}) => {
  const { user } = useAuth0();
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
  return (
    <>
      <h2>Orders</h2>
      <container>
        <Row>
          <Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Order Number</th>
                  <th>Order Date</th>
                  <th>Email</th>
                  <th>Order Total</th>
                </tr>
              </thead>
              <tbody>
                {filterOrdersByUser().map((order) => (
                  <tr>
                    <td>{order.orderNumber}</td>
                    <td>{order.orderDate}</td>
                    <td>{order.userEmail}</td>
                    <td>{order.total}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </container>
    </>
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
