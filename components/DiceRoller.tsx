import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Platform, Text, Pressable } from 'react-native';

// Import your SVG files
import Dice1 from '../assets/dice1.svg';
import Dice2 from '../assets/dice2.svg';
import Dice3 from '../assets/dice3.svg';
import Dice4 from '../assets/dice4.svg';
import Dice5 from '../assets/dice5.svg';
import Dice6 from '../assets/dice6.svg';

const diceFaces = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];

const DiceRoller: React.FC = () => {
  const [currentDice, setCurrentDice] = useState<number>(0);
  const [debug, setDebug] = useState<string>('Debug info will appear here');
  const containerRef = useRef<View>(null);

  useEffect(() => {
    // Log that component has mounted
    console.log('DiceRoller mounted');
    // Log the imported SVGs
    console.log('Dice faces loaded:', diceFaces.map(dice => !!dice));
  }, []);

  const rollDice = () => {
    setDebug('Roll dice called at: ' + new Date().toISOString());
    console.log('Rolling dice!');
    const randomDice = Math.floor(Math.random() * 6);
    setCurrentDice(randomDice);
  };

  const handlePress = (event: any) => {
    setDebug(`Press detected: ${event.type} at ${new Date().toISOString()}`);
    console.log('Dice pressed!');
    rollDice();
  };

  const CurrentDice = diceFaces[currentDice];
  console.log("CurrentDice", CurrentDice);

  return (
    <View style={styles.container} ref={containerRef}>
      {/* Debug information */}
      <Text style={styles.debugText}>
        Current Platform: {Platform.OS}
      </Text>
      <Text style={styles.debugText}>
        Current Dice: {currentDice}
      </Text>
      <Text style={styles.debugText}>
        {debug}
      </Text>

      {/* The actual dice */}
      <Pressable 
        onPress={handlePress}
        style={styles.pressableArea}
      >
        <View style={styles.diceBackground}>
          {CurrentDice ? (
          <CurrentDice 
            width={200} 
            height={200}
          />
          ):(
            <text>Loading...</text>
          )}
        </View>
      </Pressable>

      {/* Test buttons */}
      <View style={styles.buttonContainer}>
        <Pressable 
          onPress={() => {
            setDebug('Test button 1 pressed')
            console.log("Test button 1 pressed")
          }}
          style={styles.testButton}
        >
          <Text>Test Button 1</Text>
        </Pressable>
        
        <Pressable 
          onPress={() => setDebug('Test button 2 pressed')}
          style={styles.testButton}
        >
          <Text>Test Button 2</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  debugText: {
    marginBottom: 10,
    color: '#333',
  },
  pressableArea: {
    width: 250,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 0, 0, 0.1)', // Red tint to see the pressable area
    marginVertical: 20,
  },
  diceBackground: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 255, 0, 0.1)', // Green tint to see the dice container
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
    gap: 10,
  },
  testButton: {
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
  },
});

export default DiceRoller;