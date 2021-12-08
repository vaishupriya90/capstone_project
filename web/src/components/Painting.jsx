import React, { useEffect, useState } from 'react';
import {
  Container, Card, Button,
} from 'react-bootstrap';

import axios from 'axios';

const Painting = () => {
  const [error, setError] = useState(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  // const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('https://localhost:5001/api/painting');
        setName(data.name);
        setDescription(data.description);
        // setImageUrl(data.imageUrl);
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
          <Card.Img variant="top" src="https://images.unsplash.com/photo-1552353617-3bfd679b3bdd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Ym9hdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              {description}
            </Card.Text>
            <Button variant="dark">Add to cart</Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Painting;
