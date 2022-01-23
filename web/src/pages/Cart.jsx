/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import {
  Button, ListGroup, Row, Col, Image, FormControl,
} from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai';

import { changeQuantity, removeFromCart } from '../redux/cart/cartSlice';
import getCartItems from '../redux/cart/selectors';

// eslint-disable-next-line react/prop-types
const Cart = ({
  cartItems, removeItemFromCart, changeItemQuantity,
}) => {
  const [total, setTotal] = useState();

  useEffect(() => {
    const calculateTotal = cartItems.reduce((acc, curr) => acc + (curr.painting.price) * curr.quantity, 0);
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
          <Button type="button" disabled={cartItems.length === 0}>Proceed To Checkout</Button>
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

});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
