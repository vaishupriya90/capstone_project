
import React from 'react'
 
import {Badge, Container, Dropdown, FormControl, Nav, Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {FaShoppingCart} from 'react-icons/fa'


function Header(){
    return (
        <Navbar className = 'navbar' bg='dark' variant="dark" style={{height: 80}}>
            <Container>
                <Navbar.Brand>
                    <Link to='/'>The Art Shop</Link>
                </Navbar.Brand>
                <Nav style={{color:'white'}}>
                <Nav.Link>
                    <Link to='/paintings'>Paintings</Link>
                </Nav.Link>
                </Nav>
                <Navbar.Text className='search'>
                    <FormControl className='m-auto' style={{width: 500}} placeholder='Search for a product'/>
                </Navbar.Text>
                <Dropdown alignRight>
                    <Dropdown.Toggle variant='success'>     
                    <FaShoppingCart  color='white' fontSize='25px'/>
                    <Badge bg="success">{}</Badge>
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{minWidth:350}}>
                        <span style={{padding: 10}}>cart is empty!</span>
                    </Dropdown.Menu>

                </Dropdown>
            </Container>
            
        </Navbar>
    )
}

export default Header
