import { Dimensions } from 'react-native';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const DICE_ANIMATION = {
  springConfig: {
    stiffness: 100,
    damping: 10,
    mass: 1
  }
};