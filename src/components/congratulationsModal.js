import React from 'react';
import Lottie from 'react-lottie-player';
import confettiAnimation from './Animation - 1731875771680.json'; // Download an animation from LottieFiles

const CongratulationsModal = ({ isVisible, onClose, playerName, timeElapsed }) => {
  if (!isVisible) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <Lottie 
          loop={false} 
          animationData={confettiAnimation} 
          play 
          style={{ width: 300, height: 300 }} 
        />
        <h2>🎉 Congratulations, {playerName}! 🎉</h2>
        <p>You completed the game in {timeElapsed} seconds!</p>
        <button onClick={onClose} className="close-button">Play Again</button>
      </div>
    </div>
  );
};

export default CongratulationsModal;
