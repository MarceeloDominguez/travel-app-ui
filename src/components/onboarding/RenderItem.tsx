import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import {Onboarding} from '../../interface/onboardingInterface';
import {COLORS, FONTS} from '../../util/constants';
import Animated, {
  Extrapolate,
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

type Props = {
  item: Onboarding;
  index: number;
  x: SharedValue<number>;
};

const {width: WIDTH_SCREEN} = Dimensions.get('window');

export default function RenderItem({item, index, x}: Props) {
  const circleAnimation = useAnimatedStyle(() => {
    const scale = interpolate(
      x.value,
      [
        (index - 1) * WIDTH_SCREEN,
        index * WIDTH_SCREEN,
        (index + 1) * WIDTH_SCREEN,
      ],
      [1, 4, 4],
      Extrapolate.CLAMP,
    );

    return {transform: [{scale}]};
  });

  const imageAnimation = useAnimatedStyle(() => {
    const translateYAnimation = interpolate(
      x.value,
      [
        (index - 1) * WIDTH_SCREEN,
        index * WIDTH_SCREEN,
        (index + 1) * WIDTH_SCREEN,
      ],
      [200, 0, -200],
      Extrapolate.CLAMP,
    );

    return {transform: [{translateY: translateYAnimation}]};
  });

  return (
    <View style={styles.itemContainer}>
      <View style={styles.circleContainer}>
        <Animated.View
          style={[
            styles.circle,
            {backgroundColor: item.backgroundColor},
            circleAnimation,
          ]}
        />
      </View>
      <Animated.View style={imageAnimation}>
        <Image source={item.image} style={styles.image} />
      </Animated.View>
      <Animated.View style={[styles.contentText, imageAnimation]}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: WIDTH_SCREEN,
    height: WIDTH_SCREEN * 0.9,
    resizeMode: 'contain',
  },
  contentText: {
    marginTop: 14,
  },
  title: {
    textAlign: 'center',
    fontFamily: FONTS.bold,
    color: COLORS.textPrimary,
    fontSize: 22,
    lineHeight: 44,
  },
  description: {
    maxWidth: WIDTH_SCREEN * 0.8,
    textAlign: 'center',
    fontFamily: FONTS.regular,
    fontSize: 16,
    color: COLORS.textPrimary,
  },
  circleContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: WIDTH_SCREEN,
    height: WIDTH_SCREEN,
    borderRadius: WIDTH_SCREEN / 2,
  },
});
