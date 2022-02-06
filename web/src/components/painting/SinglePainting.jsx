/* eslint-disable react/prop-types */
import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';

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
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>
              $
              {' '}
              {painting.price}
            </span>
          </Card.Subtitle>
          {cartItems.some((p) => p.painting.id === painting.id) ? (<Button variant="outline-danger" onClick={() => removeFromCart(painting)}>Remove From Cart</Button>
          ) : (<Button variant="dark" onClick={() => addToCart(painting, 1)}>Add to cart</Button>
          )}
        </Card.Body>
      </Card>
    </Container>
  </div>
);

export default SinglePainting;
