import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS, FONTS} from '../../util/constants';

type Props = {
  pricePerNight: number;
};

export default function Price({pricePerNight}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.wrapperPrice}>
        <Text style={styles.price}>${pricePerNight}</Text>
        <Text style={styles.perNight}>/ per night</Text>
      </View>
      <TouchableOpacity style={styles.button} activeOpacity={0.9}>
        <Text style={styles.titleButton}>Book Now</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    alignItems: 'center',
  },
  wrapperPrice: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  price: {
    fontFamily: FONTS.regular,
    color: COLORS.textPrimary,
    fontSize: 26,
  },
  perNight: {
    fontFamily: FONTS.regular,
    color: COLORS.textPrimary,
    fontSize: 12,
  },
  button: {
    backgroundColor: COLORS.secondary,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25,
    borderRadius: 20,
  },
  titleButton: {
    color: COLORS.primary,
    fontFamily: FONTS.bold,
    marginTop: 3,
    fontSize: 13,
  },
});
