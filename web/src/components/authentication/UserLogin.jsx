import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { BsPersonSquare } from 'react-icons/bs';
import { Dropdown } from 'react-bootstrap';

const UserLogin = () => {
  const {
    loginWithRedirect, logout, isAuthenticated,
  } = useAuth0();

  return (
    <Dropdown align="end">
      <Dropdown.Toggle variant="dark">
        <BsPersonSquare color="white" fontSize="40px" />
      </Dropdown.Toggle>
      <Dropdown.Menu style={{ minWidth: 300 }}>
        {!isAuthenticated ? (
          <Dropdown.Item onClick={() => {
            loginWithRedirect();
          }}
          >
            Signin

          </Dropdown.Item>
        ) : (
          <Dropdown.Item onClick={() => logout({
            returnTo: 'http://localhost:3000/',
          })}
          >
            Logout
          </Dropdown.Item>
        )}
        <div className="dropdown-divider" />

        <Dropdown.Item href="#/action-2"> Pruchase History</Dropdown.Item>

      </Dropdown.Menu>
    </Dropdown>

  );
};

export default UserLogin;
