/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import {
  FormControl, Nav, Navbar, Container,
} from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import { search } from '../redux/filters/filter-actions';
import UserLogin from './authentication/UserLogin';
import CartDropDown from './cart/CartDropDown';

export const Header = ({ searchText }) => {
  const { isAuthenticated, user } = useAuth0();

  return (
    <Navbar className="navbar header" variant="dark" expand="lg" style={{ height: 80 }}>
      <Container fluid>
        <Navbar.Brand>
          <Link to="/">
            <img src="https://theartshopbrand.com/wp-content/uploads/2021/03/logo-10-1.png" alt="logo" width="175px" height="95px" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link style={{ color: 'white' }} href="/paintings" variant="dark">
              Paintings
            </Nav.Link>
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
              {user.email}
              !
            </span>
          ) : ''}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const mapStateToProps = (state) => ({
  searchValue: state.filters.searchValue,
});

const mapDispatchToProp = (dispatch) => ({
  searchText: (searchValue) => dispatch(search(searchValue)),
});

export default connect(mapStateToProps, mapDispatchToProp)(Header);
