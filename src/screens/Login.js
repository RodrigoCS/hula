import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import Store from '../store';
import { Background, Button, Logo } from '../components';

export default withRouter(function Login({ history }) {
  const { setIsLoggedIn, setUser, isLoggedIn, user } = useContext(Store);

  const handleLogin = () => {
    window.FB.login(
      ({ status, authResponse }) => {
        setIsLoggedIn(status === 'connected');
        if (authResponse) {
          setUser(authResponse);
          history.push('/selection');
        }
      },
      { scope: 'public_profile,email' },
    );
  };

  const handleLogout = () => {
    window.FB.logout(response => {
      setIsLoggedIn(false);
      setUser(null);
    });
  };
  return (
    <Background>
      <Logo />
      <Button onClick={handleLogin}>
        <FontAwesomeIcon icon={faFacebookF} /> Ingresar con Facebook
      </Button>
    </Background>
  );
});
