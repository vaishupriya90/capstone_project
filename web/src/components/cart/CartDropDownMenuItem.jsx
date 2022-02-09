/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Dropdown } from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai';

const CartDropDownMenuItem = ({ cartItems, removeItemFromCart, onClick }) => (
  <Dropdown.Menu align="end" style={{ minWidth: 370 }}>
    {cartItems.length > 0 ? (
      <>
        {cartItems.map((prod) => (
          <>
            <span className="cartitem" key={prod.painting.id}>
              <img
                src={prod.painting.image}
                className="cartItemImg"
                alt={prod.painting.name}
              />
              <div className="cartItemDetail">
                <span>{prod.painting.name}</span>
                <span>
                  $
                  {' '}
                  {prod.painting.price}
                </span>
              </div>
              <AiFillDelete
                fontSize="20px"
                style={{ cursor: 'pointer' }}
                onClick={() => removeItemFromCart(prod.painting)}
              />
            </span>
            <div className="dropdown-divider" />
          </>
        ))}
        <Link to="/cart">
          <Button variant="success" style={{ width: '95%', margin: '0 10px' }} onClick={onClick}>
            Proceed To Checkout
          </Button>
        </Link>
      </>
    ) : (
      <span style={{ padding: 10 }}>Cart is Empty!</span>
    )}
  </Dropdown.Menu>

);

export default CartDropDownMenuItem;
