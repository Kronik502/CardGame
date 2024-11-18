import React, { useState, useEffect } from 'react';
import './App.css';
import Board from './components/Board';
import HighScore from './components/Highscore.js';
import StartScreen from './components/startScreen.js';
import CongratulationsModal from './components/congratulationsModal.js';

function App() {
  const [deck, setDeck] = useState([]);
  const [matches, setMatches] = useState([]);
  const [attempts, setAttempts] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [playerName, setPlayerName] = useState('');
  const [difficulty, setDifficulty] = useState('easy');
  const [timer, setTimer] = useState(null);
  const [highScores, setHighScores] = useState([]);
  const [showModal, setShowModal] = useState(false); // For congratulations modal

  // Fetch high scores from the server
  useEffect(() => {
    fetch('http://localhost:5000/api/game/high-scores')
      .then((response) => response.json())
      .then((data) => setHighScores(data))
      .catch((error) => console.error('Error fetching high scores:', error));
  }, []);

  const startGame = (name, difficulty) => {
    setPlayerName(name);
    setDifficulty(difficulty);
    setGameStarted(true);
    setAttempts(0);
    setMatches([]);
    setTimeElapsed(0);
    setShowModal(false);
    setDeck(generateDeck(difficulty));
    setTimer(setInterval(() => setTimeElapsed((prev) => prev + 1), 1000));
  };

  const generateDeck = (difficulty) => {
    let pairCount;

    switch (difficulty) {
      case 'medium':
        pairCount = 12;
        break;
      case 'hard':
        pairCount = 18;
        break;
      default:
        pairCount = 6;
    }

    const cardValues = Array.from({ length: pairCount }, (_, i) => i + 1);
    const shuffledDeck = [...cardValues, ...cardValues].sort(() => Math.random() - 0.5);

    return shuffledDeck.map((value) => ({
      value,
      isMatched: false,
      isRevealed: false,
    }));
  };

  const selectCard = (index) => {
    if (matches.includes(index) || deck[index].isMatched || deck[index].isRevealed) return;

    const updatedDeck = [...deck];
    updatedDeck[index].isRevealed = true;
    const revealedCards = updatedDeck.filter((card) => card.isRevealed && !card.isMatched);

    if (revealedCards.length === 2) {
      const [card1, card2] = revealedCards;

      if (card1.value === card2.value) {
        card1.isMatched = true;
        card2.isMatched = true;
        setMatches((prev) => [...prev, index]);
      } else {
        setTimeout(() => {
          card1.isRevealed = false;
          card2.isRevealed = false;
          setDeck([...updatedDeck]);
        }, 1000);
      }

      setAttempts((prev) => prev + 1);
    }

    setDeck([...updatedDeck]);

    if (updatedDeck.every((card) => card.isMatched)) {
      clearInterval(timer);
      saveHighScore(timeElapsed);
      setShowModal(true); // Show congratulations modal
    }
  };

  // Submit high score to the server
  const saveHighScore = (time) => {
    const newScore = { playerName, time, difficulty };

    fetch('http://localhost:5000/api/game/submit-score', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newScore),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Failed to submit high score');
      })
      .then(() => {
        // After successfully saving, fetch the updated high scores
        return fetch('http://localhost:5000/api/game/high-scores');
      })
      .then((response) => response.json())
      .then((data) => {
        setHighScores(data); // Update the high scores list
      })
      .catch((error) => console.error('Error saving high score:', error));
  };

  const closeModal = () => {
    setGameStarted(false);
    setShowModal(false);
  };

  return (
    <div className="App">
      <h1>Fruit Memory Game</h1>
      {!gameStarted ? (
        <StartScreen startGame={startGame} />
      ) : (
        <>
          <Board deck={deck} selectCard={selectCard} />
          <div className="game-info">
            <p>Player: {playerName}</p>
            <p>Difficulty: {difficulty}</p>
            <p>Attempts: {attempts}</p>
            <p>Time Elapsed: {timeElapsed} seconds</p>
          </div>
        </>
      )}
      <HighScore highScores={highScores} />
      <CongratulationsModal 
        isVisible={showModal} 
        onClose={closeModal} 
        playerName={playerName} 
        timeElapsed={timeElapsed} 
      />
    </div>
  );
}

export default App;
