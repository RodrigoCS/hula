import React, { useContext } from 'react';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import { PuzzleCard, CarouselRow } from './index';
import Store from '../store';
import '@brainhubeu/react-carousel/lib/style.css';

export default function GameList({ games }) {
  const { selectedGame, setSelectedGame } = useContext(Store);

  const handleSelect = (card, index) => {
    console.log('handleSelect', card, index);
    setSelectedGame(index);
  };

  const renderCards = () => {
    return games.map((card, index) => {
      const isSelected = selectedGame === index;

      return (
        <div
          key={`key_${index}`}
          onClick={() => handleSelect(card, index)}
          style={{ padding: 8 }}
        >
          <PuzzleCard selected={isSelected} src={card.url} />
        </div>
      );
    });
  };

  return (
    <div style={{ marginBottom: 24 }}>
      <Carousel infinite slidesPerPage={3}>
        {renderCards()}
      </Carousel>
    </div>
  );
}
