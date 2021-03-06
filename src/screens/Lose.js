import React from 'react';
import styled from 'styled-components';
import { LIGHT_PURPLE } from '../utils/colors';
import { Button, ModalBox, Header, Icon, VerticalCenter } from '../components';
import { withRouter } from 'react-router-dom';
export default withRouter(function Prize({ history }) {
  const handleClaim = () => {
    history.push('/selection');
  };
  return (
    <Container>
      <Header>
        <Icon />
      </Header>
      <VerticalCenter>
        <ModalBox>
          Perdiste mas suerte la proxima!
          <Button onClick={handleClaim}>Salir</Button>
        </ModalBox>
      </VerticalCenter>
    </Container>
  );
});

const Container = styled.div`
  background-color: ${LIGHT_PURPLE};
  display: flex;
  flex: 1;
  flex-direction: column;
  min-height: 100vh;
`;
