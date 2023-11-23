import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Modal} from 'react-native';
import {COLORS, FONTS} from '../util/constants';
import Icon from 'react-native-vector-icons/Ionicons';
import {Calendar} from 'react-native-calendars';
import {Pressable} from 'react-native';

type Props = {
  label: string;
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  date: string;
  disabled?: boolean;
};

export default function SelectDate({
  label,
  selected,
  setSelected,
  date,
  disabled,
}: Props) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [cancelSelectDate, setCancelSelectDate] = useState(false);

  const handleCancelPress = () => {
    setIsOpenModal(false);
    setCancelSelectDate(true);
  };

  const handleApplyPress = () => {
    setIsOpenModal(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity
        style={[styles.contentSelectDate, {opacity: !disabled ? 1 : 0.5}]}
        activeOpacity={0.9}
        disabled={disabled}
        onPress={() => {
          setIsOpenModal(true), setCancelSelectDate(false);
        }}>
        <Icon name="calendar-outline" size={18} />
        <Text style={styles.date}>
          {selected === '' || cancelSelectDate ? 'Select Date' : date}
        </Text>
      </TouchableOpacity>
      <Modal visible={isOpenModal} transparent={true} animationType="fade">
        <Pressable
          onPress={() => {
            setIsOpenModal(false), setCancelSelectDate(true);
          }}
          style={styles.containerModal}>
          <TouchableOpacity
            style={styles.containerCalendar}
            activeOpacity={1}
            onPress={() => setIsOpenModal(true)}>
            <Calendar
              onDayPress={day => {
                setSelected(day.dateString);
              }}
              markedDates={{
                [selected]: {
                  selected: true,
                  disableTouchEvent: true,
                  selectedColor: COLORS.secondary,
                },
              }}
              theme={{
                textSectionTitleColor: COLORS.textPrimary,
                todayTextColor: COLORS.secondary,
                dayTextColor: COLORS.textPrimary,
                textDisabledColor: COLORS.textSecondary,
                arrowColor: COLORS.secondary,
                monthTextColor: COLORS.secondary,
                textMonthFontFamily: FONTS.bold,
              }}
              style={styles.calendar}
            />
            <View style={styles.wrapperButtons}>
              <Pressable
                onPress={handleCancelPress}
                style={[styles.button, {backgroundColor: COLORS.textThird}]}>
                <Text style={[styles.textButton, {color: COLORS.textPrimary}]}>
                  Cancel
                </Text>
              </Pressable>
              <Pressable
                onPress={handleApplyPress}
                style={[styles.button, {backgroundColor: COLORS.secondary}]}>
                <Text style={[styles.textButton, {color: '#FFFFFF'}]}>
                  Apply
                </Text>
              </Pressable>
            </View>
          </TouchableOpacity>
        </Pressable>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '47%',
  },
  label: {
    fontSize: 13,
    fontFamily: FONTS.regular,
    letterSpacing: 0.4,
    marginBottom: 4,
    color: COLORS.textSecondary,
  },
  contentSelectDate: {
    backgroundColor: COLORS.textThird,
    height: 40,
    borderRadius: 13,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  date: {
    fontFamily: FONTS.bold,
    fontSize: 12,
    color: COLORS.textPrimary,
    paddingTop: 4,
  },
  containerModal: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  containerCalendar: {
    backgroundColor: '#fff',
    width: '80%',
    alignSelf: 'center',
    padding: 14,
    elevation: 12,
    borderRadius: 13,
  },
  calendar: {
    width: '100%',
    alignSelf: 'center',
    height: 350,
  },
  wrapperButtons: {
    marginTop: 15,
    width: '100%',
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'flex-end',
  },
  button: {
    alignSelf: 'flex-end',
    width: 80,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  textButton: {
    fontSize: 13,
    fontFamily: FONTS.bold,
    marginTop: 2,
  },
});
