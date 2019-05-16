import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Redirect, Link } from 'react-router-dom';
import Store from './store';
import SplashScreen from './screens/SplashScreen';
import Login from './screens/Login';
import Selection from './screens/Selection';
import Game from './screens/Game';
import Prize from './screens/Prize';
import Redeem from './screens/Redeem';
import Lose from './screens/Lose';
import './App.css';

const FB_APP_ID = '327465451297007';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [selectedGame, setSelectedGame] = useState();
  const games = [
    {
      url: '/images/p1.svg',
      message1: 'Ordena las partes para completar la imagen antes de que el tiempo se agote',
      message2: '!Estas jugando por un postre gratis!',
    },
    {
      url: '/images/p2.svg',
      message1: 'Ordena las partes para completar la imagen antes de que el tiempo se agote',
      message2: '!Estas jugando por un postre gratis!',
    },
    {
      url: '/images/p3.svg',
      message1: 'Ordena las partes para completar la imagen antes de que el tiempo se agote',
      message2: '!Estas jugando por un postre gratis!',
    },
  ];
  useEffect(() => {
    window.fbAsyncInit = () => {
      window.FB.init({
        appId: FB_APP_ID,
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v3.2',
      });

      window.FB.getLoginStatus(statusChangeCallback);
    };

    if (isLoggedIn && user && !user.profile) {
      queryUserData();
    }
  });

  const queryUserData = () => {
    window.FB.api(
      `/${user.userID}`,
      { fields: ['name', 'email', 'picture'] },
      userProfile => {
        console.log(userProfile);
        if (userProfile && userProfile.id) {
          setUser({ ...user, profile: userProfile });
        }
        setLoading(false);
      },
    );
  };

  const statusChangeCallback = ({ status, authResponse }) => {
    const _isLoggedIn = status === 'connected';
    setIsLoggedIn(_isLoggedIn);
    if (authResponse) {
      setUser(authResponse);
    } else {
      setLoading(false);
    }
  };

  const checkAuth = (props, Component) => {
    if (!isLoggedIn) {
      return <Redirect
        to={{
          pathname: '/',
        }}
      />
    };
    return <Component {...props}/>
  };

  return (
    <div className='App'>
      <Store.Provider
        value={{
          setIsLoggedIn,
          setUser,
          setLoading,
          loading,
          user,
          isLoggedIn,
          selectedGame,
          setSelectedGame,
          games,
        }}
      >
        <Router basename={process.env.PUBLIC_URL}>
          <Route path='/' exact component={SplashScreen} />
          <Route path='/login/' component={Login} />
          <Route path='/selection/' component={props => checkAuth(props, Selection)} />
          <Route path='/game/:game' component={props => checkAuth(props, Game)} />
          <Route path='/won' component={props => checkAuth(props, Prize)} />
          <Route path='/redeem' component={props => checkAuth(props, Redeem)} />
          <Route path='/lose' component={props => checkAuth(props, Lose)} />
        </Router>
      </Store.Provider>
    </div>
  );
}

export default App;
