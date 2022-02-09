/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import {
  FormControl, Nav, Navbar, Stack, Container,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { search } from '../redux/filters/filter-actions';
import UserLogin from './authentication/UserLogin';
import CartDropDown from './cart/CartDropDown';

export const Header = ({ searchText }) => {
  const { isAuthenticated, user } = useAuth0();

  return (
    <Container fluid>
      <Navbar className="navbar header" variant="dark" style={{ height: 80 }}>
        <Stack direction="horizontal" gap="5">
          <Navbar.Brand>
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
          <CartDropDown />
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
      </Navbar>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  searchValue: state.filters.searchValue,
});

const mapDispatchToProp = (dispatch) => ({
  searchText: (searchValue) => dispatch(search(searchValue)),
});

export default connect(mapStateToProps, mapDispatchToProp)(Header);
