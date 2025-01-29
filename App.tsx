// App.tsx
import React from 'react';
import { SafeAreaView, Platform } from 'react-native';
import DiceRoller from './components/DiceRoller';

// Web-specific styling (optional)
const webStyles = Platform.select({
  web: {
    container: {
      height: '100vh',
      width: '100vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  default: {},
});

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, ...webStyles.container }}>
      <DiceRoller />
    </SafeAreaView>
  );
};

export default App;