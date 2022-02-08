/* eslint-disable react/prop-types */
import React from 'react';
import {
  Container, Card, Button, Row, Col,
} from 'react-bootstrap';

const SinglePainting = ({
  painting, addToCart, removeFromCart, cartItems,
}) => (
  <div>
    <Container className="mt-5">
      <Card className="products">
        <Card.Img className="productImage" variant="top" src={painting.image} alt={painting.name} />
        <Card.Body>
          <Card.Title>
            {painting.name}
          </Card.Title>
          <Row>
            <Col xs="4">
              <Card.Subtitle>
                <span style={{ alignContent: 'center' }}>
                  $
                  {painting.price}
                </span>
              </Card.Subtitle>
            </Col>
            <Col xs="8">
              {cartItems.some((p) => p.painting.id === painting.id) ? (<Button variant="outline-danger" className="btn-fixed" onClick={() => removeFromCart(painting)}>Remove</Button>
              ) : (<Button variant="dark" className="btn-fixed" onClick={() => addToCart(painting, 1)}>Add to cart</Button>
              )}
            </Col>
          </Row>

        </Card.Body>
      </Card>
    </Container>
  </div>
);

export default SinglePainting;
