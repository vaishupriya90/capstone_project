/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import {
  Badge, Container, FormControl, Nav, Navbar, Dropdown,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { search } from '../redux/Filters/filter-actions';

export const Header = ({ cartItems, searchText }) => (
  <Navbar className="navbar" bg="dark" variant="dark" style={{ height: 80 }}>
    <Container>
      <Navbar.Brand>
        <Link to="/">The Art Shop</Link>
      </Navbar.Brand>
      <Nav style={{ color: 'white' }}>
        <Nav.Link>
          <Link to="/paintings">Paintings</Link>
        </Nav.Link>
      </Nav>
      <Navbar.Text className="search">
        <FormControl className="m-auto" style={{ width: 500 }} placeholder="Search for a product" onChange={(e) => searchText(e.target.value)} />
      </Navbar.Text>
      <Dropdown align="end">
        <Dropdown.Toggle variant="success">
          <Link to="/cart"><FaShoppingCart color="white" fontSize="25px" /></Link>
          <Badge bg="success">{cartItems.length}</Badge>
        </Dropdown.Toggle>

        <Dropdown.Menu style={{ minWidth: 350 }}>
          <span style={{ padding: 10 }}>cart is empty!</span>
        </Dropdown.Menu>

      </Dropdown>

      {/* {<Link to="/cart"> }
      <Button align="end" variant="success">
        <FaShoppingCart color="white" fontSize="25px" />
        {' '}
        <Badge bg="success">{cartItems.length}</Badge>
      </Button>
      { </Link> } */}
    </Container>

  </Navbar>
);

const mapStateToProps = (state) => ({
  cartItems: state.cartItemList.cartItems,
  searchValue: state.filters.searchValue,
});

const mapDispatchToProp = (dispatch) => ({
  searchText: (searchValue) => dispatch(search(searchValue)),

});

export default connect(mapStateToProps, mapDispatchToProp)(Header);
