import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HiShoppingBag } from 'react-icons/hi';

const Home = () => (
  <div className="homePage d-flex">
    <div className="homeButton">
      <h1 style={{ color: 'white', fontSize: '60px' }}>Great Products, Great Price!</h1>
      <Link to="/paintings">
        <Button variant="light" size="lg">
          <HiShoppingBag />
          {' '}
          <span>Shop Now</span>
        </Button>
      </Link>
    </div>
  </div>
);

export default Home;
