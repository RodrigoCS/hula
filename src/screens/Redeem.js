import React from 'react';
import styled from 'styled-components';
import { LIGHT_PURPLE } from '../utils/colors';
import { Button, ModalBox, Header, Icon, VerticalCenter } from '../components';
import { withRouter } from 'react-router-dom';
export default withRouter(function Prize({ history }) {
  const handleOut = () => {
    history.push('/selection');
  };
  return (
    <Container>
      <Header>
        <Icon />
      </Header>
      <VerticalCenter>
        <ModalBox>
          Postre gratis
          <img width={100} src='images/cupcake.svg' />
          <Button onClick={handleOut}>231015</Button>
          <img width={'100%'} src='images/barcode.svg' />
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
