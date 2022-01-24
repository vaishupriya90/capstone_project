/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import {
  Badge, Container, FormControl, Nav, Navbar, Dropdown,
  Button,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';
import { search } from '../redux/Filters/filter-actions';
import { removeFromCart } from '../redux/cart/cartSlice';
import getCartItems from '../redux/cart/selectors';
import AuthenticationButton from './AuthenticationButton';

export const Header = ({ cartItems, searchText, removeItemFromCart }) => (
  <Navbar className="navbar" bg="dark" variant="dark" style={{ height: 80 }}>
    <Container>
      <Navbar.Brand>
        <Link to="/">The Art Shop</Link>
      </Navbar.Brand>
      <Nav style={{ color: 'white' }}>
        <Link to="/paintings">Paintings</Link>
      </Nav>
      <Navbar.Text className="search">
        <FormControl className="m-auto" style={{ width: 500 }} placeholder="Search for a product" onChange={(e) => searchText(e.target.value)} />
      </Navbar.Text>
      <Dropdown align="end">
        <Dropdown.Toggle variant="success">
          <FaShoppingCart color="white" fontSize="25px" />
          <Badge bg="success">{cartItems.length}</Badge>
        </Dropdown.Toggle>

        <Dropdown.Menu style={{ minWidth: 370 }}>
          {cartItems.length > 0 ? (
            <>
              {cartItems.map((prod) => (
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
              ))}
              <Link to="/cart">
                <Button style={{ width: '95%', margin: '0 10px' }}>
                  Go To Cart
                </Button>
              </Link>
            </>
          ) : (
            <span style={{ padding: 10 }}>Cart is Empty!</span>
          )}
        </Dropdown.Menu>

      </Dropdown>
      <AuthenticationButton />
    </Container>

  </Navbar>
);
const mapStateToProps = (state) => ({
  cartItems: getCartItems(state),
  searchValue: state.filters.searchValue,
});

const mapDispatchToProp = (dispatch) => ({
  searchText: (searchValue) => dispatch(search(searchValue)),
  removeItemFromCart: (painting) => dispatch(removeFromCart(painting)),

});

export default connect(mapStateToProps, mapDispatchToProp)(Header);
