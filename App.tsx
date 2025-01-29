// App.tsx
import React from 'react';
import { Platform, View, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import DiceRoller from './components/DiceRoller';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      web: {
        height: '100vh',
        width: '100vw',
      },
    })
  },
});

const App = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <DiceRoller />
    </GestureHandlerRootView>
  );
};

export default App;