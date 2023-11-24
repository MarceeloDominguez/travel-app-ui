import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../util/constants';

type Props = {
  overview: string;
};

export default function Overview({overview}: Props) {
  return (
    <View>
      <Text style={styles.title}>Overview</Text>
      <Text style={styles.overview}>{overview}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: FONTS.regular,
    color: COLORS.textPrimary,
    fontSize: 14,
    letterSpacing: 0.2,
    marginBottom: 4,
  },
  overview: {
    fontSize: 13,
    fontFamily: FONTS.regular,
    lineHeight: 18,
  },
});
