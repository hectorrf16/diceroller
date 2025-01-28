import { useState } from 'react';
import { Pressable, View } from 'react-native';
import { useSharedValue, withSpring } from 'react-native-reanimated';
import { styled } from 'nativewind';
import { Dice } from './components/Dice';

const StyledPressable = styled(Pressable);
const StyledView = styled(View);

export default function App() {
  const [diceNumber, setDiceNumber] = useState(1);
  const rotation = useSharedValue(0);

  const rollDice = () => {
    rotation.value = withSpring(rotation.value + 720);
    setDiceNumber(Math.floor(Math.random() * 6) + 1);
  };

  return (
    <StyledView className="flex-1 justify-center items-center bg-slate-900">
      <Dice number={diceNumber} />
      
      <StyledPressable
        onPress={rollDice}
        className="bg-amber-500 px-8 py-4 rounded-full mt-8"
      >
        <StyledText className="text-white text-lg font-bold">Roll</StyledText>
      </StyledPressable>
    </StyledView>
  );
}