import React, { useState } from 'react';
import dice1 from './assets/dice1.svg';
import dice2 from './assets/dice2.svg';
import dice3 from './assets/dice3.svg';
import dice4 from './assets/dice4.svg';
import dice5 from './assets/dice5.svg';
import dice6 from './assets/dice6.svg';

const DiceRoller = () => {
  const [diceNumber, setDiceNumber] = useState(1);
  const [isRolling, setIsRolling] = useState(false);

  const diceFaces = {
    1: dice1,
    2: dice2,
    3: dice3,
    4: dice4,
    5: dice5,
    6: dice6
  };

  const rollDice = () => {
    if (!isRolling) {
      setIsRolling(true);
      setTimeout(() => {
        setDiceNumber(Math.floor(Math.random() * 6) + 1);
        setIsRolling(false);
      }, 1000);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <button
        onClick={rollDice}
        disabled={isRolling}
        className="relative group"
      >
        <img 
          src={diceFaces[diceNumber]} 
          alt={`Dice showing ${diceNumber}`} 
          className={`w-32 h-32 transition-transform duration-1000 cursor-pointer 
            ${isRolling ? 'animate-spin' : 'hover:scale-110'}
            ${isRolling ? 'cursor-not-allowed' : 'hover:shadow-xl'}`}
        />
        {!isRolling && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-sm text-gray-600">Click to roll!</span>
          </div>
        )}
      </button>
    </div>
  );
};

export default DiceRoller;
