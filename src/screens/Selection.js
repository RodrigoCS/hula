import React, { useContext } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Button, Header, Icon, Panel, H1, H2 } from '../components';
import GameList from '../components/GameList';
import Store from '../store';

export default withRouter(function Selection({ history }) {
  const { selectedGame, games } = useContext(Store);
  const handlePlay = () => {
    const game = games[selectedGame];
    console.log('Play', game);
    history.push(`/game/${selectedGame}`);
  };
  return (
    <div>
      <Header>
        <Icon />
      </Header>
      <Panel>
        <H1>¡Gana jugando!</H1>
        <H2>Elige tu premio</H2>
      </Panel>
      <GameList games={games} />
      <Button onClick={handlePlay} disabled={!Number.isInteger(selectedGame)}>
        Jugar
      </Button>
    </div>
  );
});
