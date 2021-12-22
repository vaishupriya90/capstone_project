/* eslint-disable react/prop-types */
import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';

const SinglePainting = ({ painting, addToCart }) => (

  <div className="products">
    <Container className="mt-5">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={painting.image} style={{ height: '15rem', padding: '1rem' }} />
        <Card.Body>
          <Card.Title>{painting.name}</Card.Title>
          <Card.Text>
            {painting.description}
          </Card.Text>
          <Button variant="dark" onClick={() => addToCart(painting.id, 1)}>Add to cart</Button>
        </Card.Body>
      </Card>
    </Container>
  </div>
);

export default SinglePainting;
