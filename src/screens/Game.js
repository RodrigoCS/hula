import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Route, Redirect, Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import moment from 'moment';
import Countdown from 'react-countdown-now';
import Store from '../store';
import Puzzle from '../components/Puzzle';
import { Header, Icon, Button, Timer, Message } from '../components';
import Prize from './Prize';
import { getRandomInt } from '../utils';

function Game(props) {
  const [solvePuzzle, setSolvePuzzle] = useState(false);
  const [newPuzzle, setNewPuzzle] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [game, setGame] = useState();
  const [background, setBackground] = useState(getRandomInt(1, 3));
  const { user, setUser, selectedGame, setSelectedGame, games } = useContext(Store);

  useEffect(() => {
    setBackground(getRandomInt(1, games.length));
  }, []);

  useEffect(() => {
    setSelectedGame(props.match.params.game);
    setGame(games[selectedGame]);
    if (!user) {
      props.history.push('/login');
    }
  });

  const handleLogout = () => {
    window.FB.logout(response => {
      setIsLoggedIn(false);
      setUser(null);
    });
  };

  const renderFacebookButton = () => {
    return <Button onClick={handleLogout}>Logout</Button>;
  };

  const renderUserInfo = () => {
    const url = user && user.profile && user.profile.picture.data.url;
    return (
      <div>
        <ProfilePicture src={url} />;
      </div>
    );
  };

  return (
    <div>
      <Header>
        <Link to={'/selection'}>
          <Icon />
        </Link>
        {renderUserInfo()}
      </Header>
      <main>
        <div>
          <div>
            <Message>
              {game && game.message1}
            </Message>
            <Countdown
              date={Date.now() + 1000 * 1 * 5}
              intervalDelay={0}
              precision={3}
              renderer={({ completed, total }) => {
                if (completed) {
                  return <Redirect
                    to={{
                      pathname: '/lose',
                    }}
                  />;
                }
                return <Timer>{moment.utc(total).format('mm:ss')}</Timer>;
              }}
            />
            <Puzzle
              solvePuzzle={solvePuzzle}
              newPuzzle={newPuzzle}
              maxIterations={300}
              image={`/images/puzzle${background}.png`}
              size={window.innerWidth - 100}
            />
            {renderFacebookButton()}

            <Message style={{ marginTop: 20 }}>
              {game && game.message2}
            </Message>
          </div>
        </div>
      </main>
    </div>
  );
}

const ProfilePicture = styled.img`
  border-radius: 100px;
  margin-right: 8px;
`;

export default withRouter(Game);
