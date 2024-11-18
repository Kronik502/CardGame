import React from 'react';

const HighScore = ({ highScores }) => {
  return (
    <div className="high-scores">
      <h2>High Scores</h2>
      <ul>
        {highScores.map((score, index) => (
          <li key={index}>
            {score.playerName} - {score.time} seconds ({score.difficulty})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HighScore;
