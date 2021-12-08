import React, { useEffect, useState } from 'react';
import {
  Container, Card, Button,
} from 'react-bootstrap';

import axios from 'axios';

const Painting = () => {
  const [error, setError] = useState(null);
  const [name, setName] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${process.env.REACT_APP_BASE_API}/api/painting`);
        setName(data.name);
      } catch (err) {
        setError(err);
      }
    };
    fetchData();
  }, []);

  if (error) {
    return (
      <div>Oops! Could not fetch the painting.</div>
    );
  }

  return (
    <div>
      {{ name }}

      <Container className="mt-5">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://images.unsplash.com/photo-1552353617-3bfd679b3bdd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Ym9hdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some Description here
            </Card.Text>
            <Button variant="dark">Add to cart</Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Painting;
