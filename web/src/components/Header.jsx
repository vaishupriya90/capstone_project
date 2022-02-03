/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import {
  Badge, Container, FormControl, Nav, Navbar, Dropdown, Stack,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
// import { AiFillDelete } from 'react-icons/ai';
import { search } from '../redux/Filters/filter-actions';
import { removeFromCart } from '../redux/cart/cartSlice';
import getCartItems from '../redux/cart/selectors';
import UserLogin from './authentication/UserLogin';
import NavCartDropDown from './NavCartDropDown';

export const Header = ({ cartItems, searchText, removeItemFromCart }) => {
  const { isAuthenticated, user } = useAuth0();
  return (
    <Navbar className="navbar header" variant="dark" style={{ height: 80 }}>
      <Container fluid>
        <Stack direction="horizontal" gap="5">
          <Navbar.Brand>
            {/* <FaPaintBrush fontSize="60px" color="orange" /> */}
            <Link to="/">
              <img src="https://theartshopbrand.com/wp-content/uploads/2021/03/logo-10-1.png" alt="logo" width="175px" height="95px" />
            </Link>
          </Navbar.Brand>
          <Nav style={{ color: 'white' }}>
            <Link to="/paintings">Paintings</Link>
          </Nav>
        </Stack>
        <Stack direction="horizontal" gap="5">
          <Navbar.Text className="search">
            <FormControl className="m-auto" style={{ width: 500 }} placeholder="Search for a product" onChange={(e) => searchText(e.target.value)} />
          </Navbar.Text>
          <Dropdown>
            <Dropdown.Toggle variant="rgb(44, 114, 85">
              <FaShoppingCart color="white" fontSize="30px" />
              <Badge bg="rgb(44, 114, 85">{cartItems.length}</Badge>
            </Dropdown.Toggle>
            <NavCartDropDown cartItems={cartItems} removeItemFromCart={removeItemFromCart} />
          </Dropdown>
          <UserLogin />
          {isAuthenticated ? (
            <span style={{ color: 'white' }}>
              Welcome
              {' '}
              {user.email}
              !
            </span>
          ) : ''}
        </Stack>
      </Container>
    </Navbar>
  );
};
const mapStateToProps = (state) => ({
  cartItems: getCartItems(state),
  searchValue: state.filters.searchValue,
});

const mapDispatchToProp = (dispatch) => ({
  searchText: (searchValue) => dispatch(search(searchValue)),
  removeItemFromCart: (painting) => dispatch(removeFromCart(painting)),

});

export default connect(mapStateToProps, mapDispatchToProp)(Header);
