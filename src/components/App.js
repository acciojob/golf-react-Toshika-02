import React, { useState, useEffect } from 'react';
// import './GolfGame.css';

const GolfGame = () => {
  const [ballPosition, setBallPosition] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  const handleStartGame = () => {
    setGameStarted(true);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (gameStarted) {
        if (e.key === 'ArrowRight' || e.keyCode === 39) {
          setBallPosition((prevPosition) => prevPosition + 5);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [gameStarted]);

  return (
    <div>
      {!gameStarted ? (
        <button className="start" onClick={handleStartGame}>
          Start
        </button>
      ) : null}

      {gameStarted ? (
        <div
          className="ball"
          style={{ left: `${ballPosition}px` }}
        ></div>
      ) : null}
    </div>
  );
};

export default GolfGame;
