/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import {
  FormControl, Nav, Navbar, Container,
} from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';
// import { search } from '../redux/filters/filter-actions';
import getSearchValue from '../redux/filtersx/selectors';
import { searchByValue } from '../redux/filtersx/filtersSlice';
import UserLogin from './authentication/UserLogin';
import CartDropDown from './cart/CartIcon';

export const Header = ({ searchText }) => {
  const { isAuthenticated, user } = useAuth0();

  return (
    <Navbar className="header" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/">
          <img src="https://theartshopbrand.com/wp-content/uploads/2021/03/logo-10-1.png" alt="logo" width="175px" height="80px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto">
            <Nav.Link href="/paintings" style={{ color: 'white' }}>Paintings</Nav.Link>
          </Nav>
          <Navbar.Text className="search">
            <FormControl className="m-auto" style={{ width: 500 }} placeholder="Search for a product" onChange={(e) => searchText(e.target.value)} />
          </Navbar.Text>
          <CartDropDown />
          <UserLogin />
          {isAuthenticated ? (
            <span style={{ color: 'white' }}>
              Hi
              {' '}
              {user.nickname}
              !
            </span>
          ) : ''}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const mapStateToProps = (state) => ({
  searchValue: getSearchValue(state),
});

const mapDispatchToProp = (dispatch) => ({
  searchText: (searchValue) => dispatch(searchByValue(searchValue)),
});

export default connect(mapStateToProps, mapDispatchToProp)(Header);
