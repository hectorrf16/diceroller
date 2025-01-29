import { View, Text } from 'react-native';
import DiceRoller from '../components/DiceRoller';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <DiceRoller />
    </View>
  );
}