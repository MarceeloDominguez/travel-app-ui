import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS, FONTS} from '../../util/constants';

const {width} = Dimensions.get('window');

const WIDTH_SCREEN = width - 60;

export default function StayInformation() {
  return (
    <View style={styles.container}>
      <View style={[styles.card, {width: WIDTH_SCREEN * 0.6}]}>
        <View style={styles.wrapperCheck}>
          <View>
            <Text style={styles.title}>Check-in</Text>
            <Text style={styles.subTitle}>25 Agus</Text>
          </View>
          <Icon name="arrow-forward" size={15} color={COLORS.textPrimary} />
          <View>
            <Text style={styles.title}>Check-out</Text>
            <Text style={styles.subTitle}>26 Agus</Text>
          </View>
        </View>
      </View>
      <View style={[styles.card, {width: WIDTH_SCREEN * 0.2}]}>
        <View style={styles.wrapperGuestRoom}>
          <Text style={styles.title}>Guest</Text>
          <Text style={styles.subTitle}>10</Text>
        </View>
      </View>
      <View style={[styles.card, {width: WIDTH_SCREEN * 0.2}]}>
        <View style={styles.wrapperGuestRoom}>
          <Text style={styles.title}>Room</Text>
          <Text style={styles.subTitle}>5</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 8,
  },
  card: {
    backgroundColor: '#e9ecf1',
    padding: 10,
    borderRadius: 12,
  },
  wrapperCheck: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: FONTS.regular,
    fontSize: 12,
  },
  subTitle: {
    fontFamily: FONTS.bold,
    fontSize: 13,
    color: COLORS.textPrimary,
  },
  wrapperGuestRoom: {
    alignItems: 'center',
  },
});
