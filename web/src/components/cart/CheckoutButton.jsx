/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router';
import { Button } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';

const CheckoutButton = ({ cartItems }) => {
  const {
    loginWithRedirect, isAuthenticated,
  } = useAuth0();

  const navigate = useNavigate();

  const handleClick = () => {
    if (isAuthenticated) {
      navigate('/cart');
    } else {
      loginWithRedirect();
    }
  };
  if (cartItems.length === 0) {
    return (
      <span>
        <Button
          type="button"
          disabled
          variant="dark"
          size="md"
        >
          Proceed To Checkout
        </Button>
      </span>
    );
  }
  return (

    <Button
      onClick={handleClick}
      type="button"
      variant="dark"
      size="md"
    >
      Proceed To Checkout
    </Button>

  );
};

export default CheckoutButton;
