/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

import { connect } from 'react-redux';
import {
  Button, ListGroup, Row, Col, Image,
} from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai';

// eslint-disable-next-line react/prop-types
const Cart = ({ cartItems }) => (
  <div className="home">
    <div className="productContainer">
      <ListGroup>
        {cartItems.map((prod) => (
          <ListGroup.Item key={prod.id}>
            <Row>
              <Col md={2}>
                <Image src={prod.painting.image} alt={prod.painting.name} fluid rounded />
              </Col>
              <Col md={2}>
                <span>{prod.painting.name}</span>
              </Col>
              <Col md={2}>$100</Col>
              <Col md={2}>
                {/* <Form.Control
                    as="select"
                    value={prod.qty}
                    onChange={(e) =>
                      dispatch({
                        type: "CHANGE_CART_QTY",
                        payload: {
                          id: prod.id,
                          qty: e.target.value,
                        },
                      })
                    }
                  > */}

                {/* </Form.Control> */}
              </Col>
              <Col md={2}>
                <Button
                  type="button"
                  variant="light"
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
});

export default connect(mapStateToProps)(Cart);
