import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../util/constants';
import {icons} from '../../util/dataFacilities';

export default function Facilities() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Our Facilities</Text>
      <View style={styles.containerIcon}>
        {icons.map((item, index) => (
          <View key={index} style={styles.wrapperIcon}>
            {item.icon}
            <Text style={styles.titleFacilities}>{item.name}</Text>
          </View>
        ))}
      </View>
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
    marginVertical: 15,
  },
  containerIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    padding: 10,
    alignItems: 'center',
  },
  wrapperIcon: {
    gap: 10,
    alignItems: 'center',
  },
  titleFacilities: {
    fontFamily: FONTS.regular,
    fontSize: 12,
    color: COLORS.textPrimary,
    letterSpacing: 0.2,
  },
});
