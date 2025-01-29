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
    // Changed to 6 to include all dice faces (0-5)
    const randomDice = Math.floor(Math.random() * 6);
    setCurrentDice(randomDice);
  };

  // Get the current dice component
  const CurrentDice = diceFaces[currentDice];

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        onPress={rollDice}
        activeOpacity={0.7}
        style={styles.touchable}
      >
        <CurrentDice width={200} height={200} />
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
  touchable: {
    padding: 10, // Add some padding to increase the touchable area
  },
});

export default DiceRoller;