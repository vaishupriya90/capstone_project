/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

import { connect } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Button, FormControl, ListGroup, ListGroupItem, Row, Col,
} from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai';

import { changeQuantity, removeFromCart, clearCart } from '../../redux/cart/cartSlice';
import getCartItems from '../../redux/cart/selectors';

// eslint-disable-next-line react/prop-types
const SideCart = ({
  cartItems, removeItemFromCart, changeItemQuantity,
}) => {
  const [total, setTotal] = useState();

  useEffect(() => {
    const calculateTotal = cartItems
      .reduce((acc, curr) => acc + (curr.painting.price) * curr.quantity, 0);
    setTotal(calculateTotal);
  }, [cartItems]);

  return (

    <div>
      <div className="side-cart">
        <hr />
        <ListGroup className="cart-items">
          {cartItems.map((item) => (
            <ListGroupItem key={item.paintingid}>
              <Row>
                <Col lg="2">
                  <img className="cartItemImg" src={item.painting.image} alt={item.painting.name} />
                </Col>
                <Col lg="5">
                  {item.painting.name}
                  <br />
                  $
                  {item.painting.price}
                  {' '}
                  x
                  {' '}
                  {item.quantity}
                  {' '}
                </Col>
                <Col lg="3">
                  Qty
                  <br />
                  <FormControl
                    as="select"
                    value={item.quantity}
                    onChange={(e) => changeItemQuantity(item.painting, e.target.value)}
                    style={{ width: '50%' }}
                  >
                    {[...Array(item.painting.availableQuantity).keys()].map((x) => (
                      <option key={x + 1}>{x + 1}</option>
                    ))}
                  </FormControl>
                </Col>
                <Col>
                  <Button
                    type="button"
                    variant="light"
                    onClick={() => removeItemFromCart(item.painting)}
                  >
                    <AiFillDelete />
                  </Button>
                </Col>

              </Row>
            </ListGroupItem>
          ))}
        </ListGroup>
        <Row style={{ marginTop: '15px' }}>
          <Col style={{ fontSize: '20px', fontWeight: 'bold' }}>
            Total: $
            {total}
          </Col>
          <Col lg="7">
            <Link to="/cart">
              <Button
                type="button"
                disabled={cartItems.length === 0}
                variant="success"
                size="md"
              >
                Proceed To Checkout
              </Button>
            </Link>
          </Col>
        </Row>
      </div>
    </div>

  );
};

const mapStateToProps = (state) => ({
  cartItems: getCartItems(state),
  quantity: state.cartItems.cartItems.quantity,
});

const mapDispatchToProps = (dispatch) => ({
  removeItemFromCart: (painting) => dispatch(removeFromCart(painting)),
  changeItemQuantity: (painting, quantity) => dispatch(changeQuantity(painting, quantity)),
  clearCartItems: () => dispatch(clearCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SideCart);
