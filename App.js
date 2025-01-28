import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { SegmentedButtons } from 'react-native-paper';
import { SvgUri } from 'react-native-svg';

const Die = ({ rolling }) => {
  const [value, setValue] = useState(1);
  const rotateAnim = useState(new Animated.Value(0))[0];
  const scaleAnim = useState(new Animated.Value(1))[0];

  const getDieAsset = () => {
    return require(`./assets/dice${value}.svg`);
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
      <SvgUri
        uri={getDieAsset()}
        width="100%"
        height="100%"
      />
    </Animated.View>
  );
};

// ... Rest of the App component remains the same as previous answer

const styles = StyleSheet.create({
  // ... Keep previous styles and add:
  dieContainer: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
