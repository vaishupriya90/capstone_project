/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { ListGroup, Row, Col } from 'react-bootstrap';
import { getPaintings } from '../../redux/paintings/paintingsSlice';
import { getAllPaintings } from '../../redux/paintings/selectors';

const OrderDetail = ({ order, paintings, fetchPaintings }) => {
  useEffect(() => {
    fetchPaintings();
  }, []);

  const pickPainting = (orderItem) => {
    const paintingsList = paintings;
    const singlePainting = paintingsList.filter((p) => p.id === orderItem.paintingId);
    return singlePainting[0];
  };

  let mappedOrderItems = null;
  if (order.orderItems !== undefined) {
    mappedOrderItems = order.orderItems.map((orderItem) => {
      const painting = pickPainting(orderItem);
      return (
        <>
          <ListGroup variant="flush">
            <ListGroup.Item key={orderItem.paintingid}>
              <Row>
                <Col lg="2">
                  <img className="orderItemImg" src={painting.image} alt={painting.name} />
                </Col>
                <Col lg="5">
                  {painting.name}
                  <br />
                  $
                  {painting.price}
                </Col>
                <Col lg="3">
                  Qty
                  <br />
                  {orderItem.quantity}
                </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>

        </>

      );
    });
  }
  return (
    <ul>{mappedOrderItems}</ul>
  );
};
const mapStateToProps = (state) => ({
  paintings: getAllPaintings(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchPaintings: () => dispatch(getPaintings()),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetail);
