import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {COLORS, FONTS} from '../util/constants';
import {DateTime} from 'luxon';
import Icon from 'react-native-vector-icons/Ionicons';
import SelectDate from '../components/SelectDate';
import Amount from '../components/Amount';
import SelectAmount from '../components/SelectAmount';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamsList} from '../navigation/navigation';

type Props = NativeStackScreenProps<RootStackParamsList>;

export default function SearchScreen({navigation}: Props) {
  const [selectedCheckIn, setSelectedCheckIn] = useState('');
  const [selectedCheckOut, setSelectedCheckOut] = useState('');
  const [amountPerson, setAmountPerson] = useState(1);
  const [amountRoom, setAmountRoom] = useState(1);

  const checkInDate = DateTime.fromISO(selectedCheckIn);
  const checkOutDate = DateTime.fromISO(selectedCheckOut);

  const formatDateCheckIn = checkInDate.toFormat('EEE, dd LLL');
  const formatDateCheckOut = checkOutDate.toFormat('EEE, dd LLL');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}>
        <View>
          <Text style={styles.label}>City / Hotels</Text>
          <View>
            <TextInput
              placeholder="New York, United State"
              style={styles.input}
            />
            <Icon name="search" size={20} style={styles.icon} />
          </View>
          <View style={styles.containerComponents}>
            <SelectDate
              label="Check-in"
              selected={selectedCheckIn}
              setSelected={setSelectedCheckIn}
              date={formatDateCheckIn}
            />
            <SelectDate
              label="Check-out"
              selected={selectedCheckOut}
              setSelected={setSelectedCheckOut}
              date={
                checkOutDate > checkInDate
                  ? formatDateCheckOut
                  : 'Select another Date'
              }
              disabled={selectedCheckIn !== '' ? false : true}
            />
          </View>
          <View style={styles.containerComponents}>
            <Amount
              title="Adult"
              icon="person-outline"
              label="Guest Details"
              amount={amountPerson}
            />
            <SelectAmount setAmount={setAmountPerson} amount={amountPerson} />
          </View>
          <View style={styles.containerComponents}>
            <Amount
              title="Room"
              icon="bed-outline"
              label="Room Details"
              amount={amountRoom}
            />
            <SelectAmount setAmount={setAmountRoom} amount={amountRoom} />
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.button}
          onPress={() => navigation.navigate('ListHotelsScreen')}>
          <Text style={styles.textButton}>Search</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    flex: 1,
    marginHorizontal: 22,
  },
  contentContainerStyle: {
    flex: 1,
    justifyContent: 'space-between',
  },
  input: {
    backgroundColor: COLORS.textThird,
    height: 40,
    borderRadius: 13,
    paddingLeft: 40,
    paddingRight: 20,
  },
  icon: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  label: {
    fontSize: 13,
    fontFamily: FONTS.regular,
    letterSpacing: 0.4,
    marginTop: 20,
    marginBottom: 4,
    color: COLORS.textSecondary,
  },
  containerComponents: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    alignItems: 'flex-end',
  },
  button: {
    backgroundColor: COLORS.secondary,
    height: 40,
    borderRadius: 8,
    marginBottom: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  textButton: {
    fontFamily: FONTS.regular,
    color: '#fff',
    fontSize: 13,
    letterSpacing: 0.4,
  },
});
