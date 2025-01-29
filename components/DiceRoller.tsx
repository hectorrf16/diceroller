import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

// Import your SVG files
import Dice1 from '../assets/dice1.svg';
import Dice2 from '../assets/dice2.svg';
import Dice3 from '../assets/dice3.svg';
import Dice4 from '../assets/dice4.svg';
import Dice5 from '../assets/dice5.svg';
import Dice6 from '../assets/dice6.svg';

// Store the imported SVGs in an array
const diceFaces = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];

const DiceRoller: React.FC = () => {
  const [currentDice, setCurrentDice] = useState<number>(0);

  const rollDice = () => {
    const randomDice = Math.floor(Math.random() * 5);
    setCurrentDice(randomDice);
  };

  // Get the current dice component
  const CurrentDice = diceFaces[currentDice];

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={rollDice}>
        <CurrentDice width={200} height={200} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
});

export default DiceRoller;