import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS, FONTS} from '../util/constants';

type Props = {
  amount: number;
  setAmount: React.Dispatch<React.SetStateAction<number>>;
};

export default function SelectAmount({setAmount, amount}: Props) {
  const handleRemoveAmount = () => {
    if (amount <= 1) return;
    setAmount(amount - 1);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.9}
        onPress={handleRemoveAmount}>
        <Text style={styles.textButton}>-</Text>
      </TouchableOpacity>
      <Text style={styles.quantity}>{amount}</Text>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.9}
        onPress={() => setAmount(amount + 1)}>
        <Text style={styles.textButton}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '40%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: 40,
    height: 40,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: COLORS.textThird,
  },
  textButton: {
    fontFamily: FONTS.bold,
    color: COLORS.secondary,
    fontSize: 18,
    marginTop: 4,
  },
  quantity: {
    textAlignVertical: 'center',
    height: 40,
    fontFamily: FONTS.bold,
    marginTop: 2,
    color: COLORS.textPrimary,
  },
});
