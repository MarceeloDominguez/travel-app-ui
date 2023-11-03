import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageRequireSource,
} from 'react-native';
import {COLORS, FONTS} from '../../util/constants';

interface Categories {
  name: string;
  image: ImageRequireSource;
}

const CATEGORIES: Categories[] = [
  {name: 'Trips', image: require('../../assets/categories/trips.png')},
  {name: 'Hotel', image: require('../../assets/categories/hotel.png')},
  {name: 'Transport', image: require('../../assets/categories/transport.png')},
  {name: 'Events', image: require('../../assets/categories/events.png')},
];

export default function PopularCategories() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Popular Categories</Text>
      <View style={styles.containerCategory}>
        {CATEGORIES.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.contentContainer}
            activeOpacity={0.9}>
            <Image style={styles.imageCategory} source={item.image} />
            <Text style={styles.name}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 22,
    marginBottom: 10,
  },
  containerCategory: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  contentContainer: {
    alignItems: 'center',
  },
  title: {
    fontFamily: FONTS.bold,
    color: COLORS.textPrimary,
    fontSize: 16,
    letterSpacing: 0.2,
  },
  name: {
    fontFamily: FONTS.regular,
    fontSize: 12,
    letterSpacing: 0.2,
    marginTop: 5,
    color: COLORS.textPrimary,
  },
  imageCategory: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});
