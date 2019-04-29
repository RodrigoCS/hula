import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import Countdown from 'react-countdown-now';
import Puzzle from './Puzzle';
import logo from './logo.svg';
import './App.css';

const APP_ID = '327465451297007';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function App(props) {
  const [solvePuzzle, setSolvePuzzle] = useState(false);
  const [newPuzzle, setNewPuzzle] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    window.fbAsyncInit = () => {
      window.FB.init({
        appId: APP_ID,
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
      },
    );
  };

  const statusChangeCallback = ({ status, authResponse }) => {
    const _isLoggedIn = status === 'connected';
    setLoading(false);
    setIsLoggedIn(_isLoggedIn);
    if (authResponse) {
      setUser(authResponse);
    }
  };

  const handleLogin = () => {
    window.FB.login(
      ({ status, authResponse }) => {
        setIsLoggedIn(status === 'connected');
        if (authResponse) {
          setUser(authResponse);
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

  const renderFacebookButton = () => {
    if (isLoggedIn) {
      return <FBButton onClick={handleLogout}>Logout</FBButton>;
    }
    return <FBButton onClick={handleLogin}>Login with Facebook</FBButton>;
  };

  const renderLoading = () => {
    return <div>Loading</div>;
  };

  const renderUserInfo = () => {
    const url = user && user.profile && user.profile.picture.data.url;
    return <ProfilePicture src={url} />;
  };

  const image = getRandomInt(1, 3);

  return (
    <div className='App'>
      <h1 />
      <main>
        {loading ? (
          renderLoading()
        ) : (
          <div>
            {isLoggedIn ? (
              <div>
                <Countdown
                  date={Date.now() + 1000 * 60 * 5}
                  intervalDelay={0}
                  precision={3}
                  renderer={props => (
                    <Timer>{moment.utc(props.total).format('mm:ss:SS')}</Timer>
                  )}
                />
                <Puzzle
                  solvePuzzle={solvePuzzle}
                  newPuzzle={newPuzzle}
                  maxIterations={300}
                  image={`/images/${image}.png`}
                  size={window.innerWidth - 100}
                />
                {renderUserInfo()}
                {renderFacebookButton()}
              </div>
            ) : (
              renderFacebookButton()
            )}
          </div>
        )}
      </main>
    </div>
  );
}

const Timer = styled.h1``;

const FBButton = styled.button`
  background-color: #4267b2;
  color: #fff;
  border: none;
  padding: 4px 8px;
  border-radius: 2px;
  &:hover {
    outline: none;
  }
`;

const ProfilePicture = styled.img``;

export default App;
