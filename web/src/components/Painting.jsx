import React, { useEffect, useState } from 'react';
import {
  Container, Card, Button,
} from 'react-bootstrap';

import axios from 'axios';

const Painting = () => {
  const [error, setError] = useState(null);
  const [painting, setPainting] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('https://localhost:5001/api/painting');
        setPainting(data);
      } catch (err) {
        setError(err);
      }
    };
    fetchData();
  }, []);

  if (error) {
    return (
      <div>Oopseeee! Could not fetch the painting.</div>
    );
  }

  return (
    <div>
      <Container className="mt-5">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={painting.image} />
          <Card.Body>
            <Card.Title>{painting.name}</Card.Title>
            <Card.Text>
              {painting.description}
            </Card.Text>
            <Button variant="dark">Add to cart</Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Painting;
