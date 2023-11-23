import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {COLORS, FONTS} from '../../util/constants';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamsList} from '../../navigation/navigation';

export default function SearchComponent() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamsList>>();

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.9}
      onPress={() => navigation.navigate('SearchScreen')}>
      <View style={styles.wrapperTextEndIcon}>
        <Text style={styles.text}>Search your hotel</Text>
        <Image
          source={require('../../assets/icons/Button-search.png')}
          style={styles.icon}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.textThird,
    marginHorizontal: 22,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    marginVertical: 20,
  },
  wrapperTextEndIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontFamily: FONTS.regular,
    color: COLORS.textSecondary,
    fontSize: 13,
    paddingLeft: 20,
  },
  icon: {
    width: 34,
    height: 34,
    marginRight: 5,
  },
});
