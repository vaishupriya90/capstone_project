/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { Badge, Dropdown } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import getCartItems from '../../redux/cart/selectors';
import { removeFromCart } from '../../redux/cart/cartSlice';
import CartDropDownMenuItem from './CartDropDownMenuItem';

const CartDropDown = ({ cartItems, removeItemFromCart }) => {
  const [showDropDown, setShowDropDown] = React.useState(false);

  const toggleDropDown = () => {
    if (showDropDown) {
      setShowDropDown(false);
    } else {
      setShowDropDown(true);
    }
  };

  return (
    <Dropdown show={showDropDown}>
      <Dropdown.Toggle variant="rgb(44, 114, 85" onClick={toggleDropDown}>
        <FaShoppingCart color="white" size={32} />
        <Badge bg="rgb(44, 114, 85">{cartItems.length}</Badge>
      </Dropdown.Toggle>
      <CartDropDownMenuItem
        cartItems={cartItems}
        removeItemFromCart={removeItemFromCart}
        onClick={toggleDropDown}
      />
    </Dropdown>
  );
};
const mapStateToProps = (state) => ({
  cartItems: getCartItems(state),
});

const mapDispatchToProp = (dispatch) => ({
  removeItemFromCart: (painting) => dispatch(removeFromCart(painting)),
});

export default connect(mapStateToProps, mapDispatchToProp)(CartDropDown);
