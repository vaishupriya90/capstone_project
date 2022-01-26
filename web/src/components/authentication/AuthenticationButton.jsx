// src/components/authentication-button.js

import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

const AuthenticationButton = () => {
  const { user, isAuthenticated } = useAuth0();

  return isAuthenticated ? (
    <>
      <p style={{ color: 'white' }}>
        Welcome
        {' '}
        {user.nickname}
        !
      </p>

      <LogoutButton />
    </>
  )
    : <LoginButton />;
};

export default AuthenticationButton;
