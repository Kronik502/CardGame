import React from 'react';
import './Board.css';

function Board({ deck, selectCard, matches }) {
  return (
    <div className="board">
      {deck.map((card, index) => (
        <div
          key={index}
          className={`card ${card.isRevealed ? 'revealed' : ''} ${card.isMatched ? 'matched' : ''}`}
          style={{ backgroundColor: card.isRevealed || card.isMatched ? 'lightgray' : 'white' }}
          onClick={() => selectCard(index)}
        >
          <div className={`card-inner ${card.isRevealed || card.isMatched ? 'flipped' : ''}`}>
            <div className="card-front"></div>
            <div className="card-back">
              <span className="card-number">{card.value}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Board;
