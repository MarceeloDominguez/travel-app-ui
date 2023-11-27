import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import Animated, {
  Extrapolate,
  SharedValue,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
} from 'react-native-reanimated';

type Props = {
  index: number;
  x: SharedValue<number>;
};

const {width: WIDTH_SCREEN} = Dimensions.get('window');

export default function Dot({index, x}: Props) {
  const animatedDotStyle = useAnimatedStyle(() => {
    const widthAnimation = interpolate(
      x.value,
      [
        (index - 1) * WIDTH_SCREEN,
        index * WIDTH_SCREEN,
        (index + 1) * WIDTH_SCREEN,
      ],
      [20, 50, 20],
      Extrapolate.CLAMP,
    );

    const opacityAnimation = interpolate(
      x.value,
      [
        (index - 1) * WIDTH_SCREEN,
        index * WIDTH_SCREEN,
        (index + 1) * WIDTH_SCREEN,
      ],
      [0.5, 1, 0.5],
      Extrapolate.CLAMP,
    );

    const backgroundColor = interpolateColor(
      x.value,
      [0, WIDTH_SCREEN, 2 * WIDTH_SCREEN],
      ['#925e1d', '#065238', '#13005A'],
    );

    return {width: widthAnimation, opacity: opacityAnimation, backgroundColor};
  });

  return <Animated.View style={[styles.dot, animatedDotStyle]} />;
}

const styles = StyleSheet.create({
  dot: {
    height: 10,
    borderRadius: 5,
  },
});
