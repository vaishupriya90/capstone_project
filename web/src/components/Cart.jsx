/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

import { connect } from 'react-redux';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import {
  Button, ListGroup, Row, Col, Image, FormControl,
} from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai';

import { changeQuantity, removeFromCart, clearCart } from '../redux/cart/cartSlice';
import getCartItems from '../redux/cart/selectors';
import OrderConfirmationModal from './order/OrderConfirmationModal';

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

  return (
    <div className="home">
      <div className="productContainer">
        <ListGroup>
          {cartItems.map((prod) => (
            <ListGroup.Item key={prod.painting.id}>
              <Row>
                <Col md={2}>
                  <Image className="ListItemImage" src={prod.painting.image} alt={prod.painting.name} fluid rounded />
                </Col>
                <Col md={4}>
                  <span>{prod.painting.name}</span>
                </Col>
                <Col lg={2}>
                  $
                  {prod.painting.price}
                </Col>
                <Col lg={2}>
                  <FormControl
                    as="select"
                    value={prod.quantity}
                    onChange={(e) => changeItemQuantity(prod.painting, e.target.value)}
                  >
                    {[...Array(prod.painting.availableQuantity).keys()].map((x) => (
                      <option key={x + 1}>{x + 1}</option>
                    ))}
                  </FormControl>
                </Col>
                <Col lg={2}>
                  <Button
                    type="button"
                    variant="light"
                    onClick={() => removeItemFromCart(prod.painting)}
                  >
                    <AiFillDelete fontSize="20px" />
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>

        <div className="filters summary">
          <span>
            Subtotal (
            {cartItems.length}
            ) Items
          </span>
          <span>
            Total: $
            {' '}
            {total}
          </span>
          <Button type="button" disabled={cartItems.length === 0} onClick={() => { handleClick(cartItems); }}>Proceed To Checkout</Button>

          <OrderConfirmationModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            response={response}
          />
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
