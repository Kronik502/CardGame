import React from 'react';

function Card({ card, index, selectCard, isMatched }) {
  return (
    <div
      className={`card ${card.isRevealed || isMatched ? 'revealed' : ''}`}
      onClick={() => selectCard(index)}
    >
      {card.isRevealed || isMatched ? card.value : '?' }
    </div>
  );
}

export default Card;
