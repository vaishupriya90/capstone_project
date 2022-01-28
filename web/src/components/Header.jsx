/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
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
import UserLogin from './authentication/UserLogin';

export const Header = ({ cartItems, searchText, removeItemFromCart }) => {
  const { isAuthenticated, user } = useAuth0();
  return (
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
        <Dropdown className="row justify-content-end">
          <Dropdown.Toggle variant="dark">
            <FaShoppingCart color="white" fontSize="30px" />
            <Badge bg="dark">{cartItems.length}</Badge>
          </Dropdown.Toggle>

          <Dropdown.Menu style={{ minWidth: 350 }}>
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
        <UserLogin />
        {isAuthenticated ? (
          <span style={{ color: 'white' }}>
            Welcome
            {' '}
            {user.email}
            !
          </span>
        ) : ''}
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
