// App.tsx
import React from 'react';
import { SafeAreaView, Platform, View, StyleSheet } from 'react-native';
import DiceRoller from './components/DiceRoller';

// Type for platform-specific styling
type Styles = {
  container: {
    flex: number;
    justifyContent: 'center';
    alignItems: 'center';
    height?: string;
    width?: string;
  };
};

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // Web-specific styles
    ...Platform.select({
      web: {
        height: '100vh',
        width: '100vw',
      },
      default: {
        // Mobile-specific styles if needed
      }
    })
  },
});

const App = () => {
  // Use regular View for web platform
  if (Platform.OS === 'web') {
    return (
      <View style={styles.container}>
        <DiceRoller />
      </View>
    );
  }

  // Use SafeAreaView for mobile platforms
  return (
    <SafeAreaView style={styles.container}>
      <DiceRoller />
    </SafeAreaView>
  );
};

export default App;