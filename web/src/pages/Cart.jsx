/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

import { connect } from 'react-redux';
import {
  Button, ListGroup, Row, Col, Image, FormControl,
} from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai';

import { changeQuantity, removeFromCart } from '../redux/cart/cart-actions';

// eslint-disable-next-line react/prop-types
const Cart = ({
  cartItems, removeItemFromCart, changeItemQuantity,
}) => (
  <div className="home">
    <div className="productContainer">
      <ListGroup>
        {cartItems.map((prod) => (
          <ListGroup.Item key={prod.id}>
            <Row>
              <Col lg={2}>
                <Image className="ListItemImage" src={prod.painting.image} alt={prod.painting.name} fluid rounded />
              </Col>
              <Col lg={2}>
                <span>{prod.painting.name}</span>
              </Col>
              <Col lg={2}>
                $
                {prod.painting.price}
              </Col>

              <Col lg={2}>
                <FormControl
                  as="select"
                  value={prod.qty}
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
                  onClick={() => removeItemFromCart(prod.painting.id)}
                >
                  <AiFillDelete fontSize="20px" />
                </Button>
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  </div>

);

const mapStateToProps = (state) => ({
  cartItems: state.cartItemList.cartItems,
  quantity: state.cartItemList.qty,
});

const mapDispatchToProps = (dispatch) => ({
  removeItemFromCart: (id) => dispatch(removeFromCart(id)),
  changeItemQuantity: (painting, qty) => dispatch(changeQuantity(painting, qty)),

});
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
