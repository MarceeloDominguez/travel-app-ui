import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../util/constants';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {
  title: string;
  icon: string;
  label: string;
  amount: number;
};

export default function Amount({title, icon, label, amount}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.content}>
        <Icon name={icon} size={18} />
        <Text style={styles.textContent}>
          {amount} {title}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '47%',
  },
  content: {
    backgroundColor: COLORS.textThird,
    width: '100%',
    height: 40,
    borderRadius: 13,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 10,
  },
  label: {
    fontSize: 13,
    fontFamily: FONTS.regular,
    letterSpacing: 0.4,
    marginBottom: 4,
    color: COLORS.textSecondary,
  },
  textContent: {
    fontFamily: FONTS.bold,
    fontSize: 12,
    color: COLORS.textPrimary,
    paddingTop: 4,
  },
});
