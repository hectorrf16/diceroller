import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { SegmentedButtons } from 'react-native-paper';

const Die = ({ rolling }) => {
  const [value, setValue] = useState(1);
  const rotateAnim = useState(new Animated.Value(0))[0];
  const scaleAnim = useState(new Animated.Value(1))[0];

  const getImageSource = () => {
    switch(value) {
      case 1: return require('./assets/die1.png');
      case 2: return require('./assets/die2.png');
      case 3: return require('./assets/die3.png');
      case 4: return require('./assets/die4.png');
      case 5: return require('./assets/die5.png');
      case 6: return require('./assets/die6.png');
      default: return require('./assets/die1.png');
    }
  };

  const startAnimation = () => {
    Animated.parallel([
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.sequence([
        Animated.timing(scaleAnim, { toValue: 0.8, duration: 500, useNativeDriver: true }),
        Animated.timing(scaleAnim, { toValue: 1, duration: 500, useNativeDriver: true }),
      ])
    ]).start();
  };

  if (rolling) {
    startAnimation();
    const interval = setInterval(() => {
      setValue(Math.floor(Math.random() * 6) + 1);
    }, 100);
    setTimeout(() => clearInterval(interval), 1000);
  }

  const rotation = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  });

  return (
    <Animated.View style={[
      styles.dieContainer,
      { 
        transform: [
          { rotate: rotation },
          { scale: scaleAnim }
        ]
      }
    ]}>
      <Image source={getImageSource()} style={styles.dieImage} />
    </Animated.View>
  );
};

export default function App() {
  const [numDice, setNumDice] = useState(1);
  const [rolling, setRolling] = useState(false);
  const [diceKey, setDiceKey] = useState(0);

  const rollDice = () => {
    if (!rolling) {
      setRolling(true);
      setTimeout(() => {
        setRolling(false);
        setDiceKey(prev => prev + 1);
      }, 1000);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dice Roller</Text>
      
      <View style={styles.diceRow}>
        <Die key={`die1-${diceKey}`} rolling={rolling} />
        {numDice > 1 && <Die key={`die2-${diceKey}`} rolling={rolling} />}
      </View>

      <SegmentedButtons
        value={numDice.toString()}
        onValueChange={value => setNumDice(Number(value))}
        buttons={[
          { value: '1', label: '1 Die' },
          { value: '2', label: '2 Dice' },
        ]}
        style={styles.segment}
      />

      <TouchableOpacity 
        style={styles.button} 
        onPress={rollDice}
        disabled={rolling}
      >
        <Text style={styles.buttonText}>{rolling ? 'Rolling...' : 'Roll Dice'}</Text>
      </TouchableOpacity>
    </View>
  );
}

// ... (Keep the same styles as previous answer)
