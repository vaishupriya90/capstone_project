/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const CheckoutButton = ({ cartItems }) => {
  if (cartItems.length === 0) {
    return (
      <span>
        <Button
          type="button"
          disabled
          variant="success"
          size="md"
        >
          Proceed To Checkout
        </Button>
      </span>
    );
  }
  return (
    <Link to="/cart">
      <Button
        type="button"
        variant="success"
        size="md"
      >
        Proceed To Checkout
      </Button>
    </Link>
  );
};

export default CheckoutButton;
