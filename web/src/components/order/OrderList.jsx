import { Row, Col, ListGroup } from 'react-bootstrap';
import React from 'react';

// eslint-disable-next-line react/prop-types
export default function OrderList({ filterOrdersByUser, orderDetails }) {
  return (
    <ListGroup variant="flush">
      {filterOrdersByUser().map((order) => (
        <ListGroup.Item
          action
          variant="light"
          onClick={() => orderDetails(order)}
          key={order.orderNumber}
        >
          <Row>
            <Col lg="9">
              <Row>
                <Col><h5>{order.orderDate}</h5></Col>
              </Row>
              <Row>
                <Col>
                  #
                  {order.orderNumber}
                </Col>
              </Row>
            </Col>
            <Col>
              $
              {order.total}
              {' '}
              total
            </Col>
          </Row>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
