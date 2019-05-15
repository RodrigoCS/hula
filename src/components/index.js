import React from 'react';
import styled from 'styled-components';
import { PURPLE, LIGHT_PURPLE } from '../utils/colors';

export const Background = styled.div`
  min-height: 100vh;
  background-size: 100%;
  background-image: url('/images/background.png');
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Button = styled.button`
  outline: none;
  background-color: ${PURPLE};
  border-radius: 50px;
  border: none;
  padding: 12px 24px;
  color: white;
  font-family: 'Quicksand', sans-serif;
  font-size: 14px;
  font-weight: bold;
  opacity: ${props => (props.disabled ? 0.6 : 1)};
  &:hover {
    opacity: 0.8;
  }
`;

export const Logo = styled.img`
  width: 280px;
`;

Logo.defaultProps = {
  src: '/images/logo.svg',
};

export const Icon = styled.div`
  background-image: url(${props => props.src});
  width: 100px;
  height: 100px;
  background-repeat: no-repeat;
  background-position: center;
`;

Icon.defaultProps = {
  src: '/images/icon.svg',
};

export const Header = styled.div`
  display: flex;
  padding: 40;
  justify-content: space-between;
  align-items: center;
`;

export const Panel = styled.div`
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-direction: column;
  padding: 40px;
  margin: 0 30px;
  margin-bottom: 60px;
`;

Panel.defaultProps = {
  src: '/images/panel-bg.png',
};

export const H1 = styled.h1`
  margin: 0;
`;

export const H2 = styled.h2`
  margin: 0;
`;

export const PuzzleCard = styled.div`
  width: 100px;
  height: 100px;
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 45%;
  border-radius: 50%;
  background-color: ${props => props.selected ? PURPLE : LIGHT_PURPLE};
  transition: 100ms;
`;

export const CarouselRow = styled.div``;

export const Timer = styled.h1`
  color: ${PURPLE};
  font-family: 'Quicksand', sans-serif;
`;

export const Message = styled.div`
  color: ${PURPLE};
  font-weight: bold;
  margin: 40px;
  border-radius: 100px;
`;

export const ModalBox = styled.div`
  background-color: white;
  border-radius: 40px;
  margin: 0 60px;
  padding: 32px;
  font-family: 'Quicksand', sans-serif;
  font-weight: bold;
  font-size: 20px;
  color: ${PURPLE};
  flex-direction: column;
  display: flex;
  align-items: center;
  height: 50vh;
  justify-content: space-between;
`;

export const VerticalCenter = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;
