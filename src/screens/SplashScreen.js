import React, { useEffect, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import Store from '../store';
import { Background } from '../components';

export default withRouter(function Index({ history }) {
  const { loading, isLoggedIn } = useContext(Store);
  useEffect(() => {
    if (!loading) {
      if (isLoggedIn) {
        history.push('selection');
      } else {
        history.push('login');
      }
    }
  });
  return <Background>Loading</Background>;
});
