/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { Badge } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import getCartItems from '../../redux/cart/selectors';

const CartIcon = ({ cartItems }) => (
  <>
    <div style={{ padding: '10px' }}>
      <FaShoppingCart color="white" size={32} />
      <Badge bg="rgb(44, 114, 85">{cartItems.length}</Badge>
    </div>
  </>
);
const mapStateToProps = (state) => ({
  cartItems: getCartItems(state),
});

export default connect(mapStateToProps)(CartIcon);
