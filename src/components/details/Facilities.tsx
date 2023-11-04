import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../util/constants';

export default function Facilities() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Our Facilities</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingBottom: 5,
  },
  title: {
    fontFamily: FONTS.regular,
    color: COLORS.textPrimary,
    letterSpacing: 0.2,
    fontSize: 14,
  },
});
