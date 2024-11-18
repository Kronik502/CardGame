import React, { useState } from 'react';

const StartScreen = ({ startGame }) => {
  const [name, setName] = useState('');
  const [difficulty, setDifficulty] = useState('easy'); // Store difficulty selection

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDifficultyChange = (e) => {
    setDifficulty(e.target.value); // Update difficulty state
  };

  const handleSubmit = () => {
    if (name) {
      startGame(name, difficulty); // Pass difficulty to startGame
    }
  };

  return (
    <div className="start-screen">
      <h2>Enter Your Name</h2>
      <input 
        type="text" 
        value={name} 
        onChange={handleNameChange} 
        placeholder="Enter your username" 
      />

      <h3>Select Difficulty</h3>
      <select onChange={handleDifficultyChange} value={difficulty}>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>

      <button onClick={handleSubmit}>Start Game</button>
    </div>
  );
};

export default StartScreen;
