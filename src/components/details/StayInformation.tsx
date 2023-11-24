import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS, FONTS} from '../../util/constants';

const {width} = Dimensions.get('window');

const WIDTH_SCREEN = width - 60;

type Props = {
  formatDateCheckIn: string;
  formatDateCheckOut: string;
  room: number;
  maxPerson: number;
};

export default function StayInformation({
  formatDateCheckIn,
  formatDateCheckOut,
  room,
  maxPerson,
}: Props) {
  const handleDateSplit = (date: string) => {
    const dateSplit = date?.split(',');
    const afterComma = dateSplit[1]?.trim();

    return afterComma;
  };

  return (
    <View style={styles.container}>
      <View style={[styles.card, {width: WIDTH_SCREEN * 0.6}]}>
        <View style={styles.wrapperCheck}>
          <View>
            <Text style={styles.title}>Check-in</Text>
            <Text style={styles.subTitle}>
              {handleDateSplit(formatDateCheckIn)}
            </Text>
          </View>
          <Icon name="arrow-forward" size={15} color={COLORS.textPrimary} />
          <View>
            <Text style={styles.title}>Check-out</Text>
            <Text style={styles.subTitle}>
              {handleDateSplit(formatDateCheckOut)}
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.card, {width: WIDTH_SCREEN * 0.2}]}>
        <View style={styles.wrapperGuestRoom}>
          <Text style={styles.title}>Guest</Text>
          <Text style={styles.subTitle}>{maxPerson}</Text>
        </View>
      </View>
      <View style={[styles.card, {width: WIDTH_SCREEN * 0.2}]}>
        <View style={styles.wrapperGuestRoom}>
          <Text style={styles.title}>Room</Text>
          <Text style={styles.subTitle}>{room}</Text>
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
