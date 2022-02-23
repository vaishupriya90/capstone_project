/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

import { connect } from 'react-redux';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import {
  Button, ListGroup, Row, Col, FormControl, ListGroupItem,
} from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai';

import { changeQuantity, removeFromCart, clearCart } from '../../redux/cart/cartSlice';
import getCartItems from '../../redux/cart/selectors';
import OrderConfirmationModal from '../order/OrderConfirmationModal';
import Checkout from './Checkout';

// eslint-disable-next-line react/prop-types
const Cart = ({
  cartItems, removeItemFromCart, changeItemQuantity, clearCartItems,
}) => {
  const { user, loginWithRedirect, isAuthenticated } = useAuth0();
  const [modalShow, setModalShow] = React.useState(false);
  const [response, setResponse] = useState(null);
  const [total, setTotal] = useState();

  const handleClick = async (orderItems) => {
    const orderItemReq = orderItems.map((orderItem) => (
      {
        paintingId: orderItem.painting.id,
        quantity: orderItem.quantity,
      }
    ));
    if (isAuthenticated) {
      const newOrder = {
        userEmail: user.email,
        orderItems: orderItemReq,
      };
      const { data } = await axios.post(`${process.env.REACT_APP_BASE_API}/api/orders`, newOrder);
      setModalShow(true);
      setResponse(data.orderNumber);
      clearCartItems();
      // navigate to order history
    } else {
      loginWithRedirect();
    }
  };

  useEffect(() => {
    const calculateTotal = cartItems
      .reduce((acc, curr) => acc + (curr.painting.price) * curr.quantity, 0);
    setTotal(calculateTotal);
  }, [cartItems]);

  const formInitialValues = {
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    nameOnCard: '',
    creditCardNumber: '',
    expiration: '',
    cvv: '',
  };

  const [checkoutDetails, setCheckoutDetails] = React.useState(formInitialValues);

  const setFormValues = (currCheckoutDetails) => {
    setCheckoutDetails(currCheckoutDetails);
    handleClick(cartItems);
  };

  return (
    <>
      {cartItems.length === 0 && (<div>cart is empty!</div>)}
      <Row>
        <Col lg="9">
          <Checkout formInitialValues={checkoutDetails} handleFormClick={setFormValues} />
        </Col>
        <Col>
          <Row>
            <Col>
              <Row>
                <Col>
                  <ListGroup className="cart-items">
                    {cartItems.map((item) => (
                      <ListGroupItem key={item.painting.id}>
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
                  { cartItems.length > 0 && (
                  <div>
                    <div>
                      Subtotal (
                      {cartItems.length}
                      ) Items
                    </div>
                    <div>
                      Total: $
                      {' '}
                      {total}
                    </div>
                  </div>
                  )}
                </Col>
              </Row>
            </Col>
          </Row>
          <OrderConfirmationModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            response={response}
          />
        </Col>

      </Row>
    </>

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

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
