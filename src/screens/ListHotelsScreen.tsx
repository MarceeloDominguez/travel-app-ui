import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {COLORS, FONTS} from '../util/constants';
import Icon from 'react-native-vector-icons/Ionicons';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamsList} from '../navigation/navigation';

const {width} = Dimensions.get('window');

const WIDTH_IMAGE = width - 44;

type Props = NativeStackScreenProps<RootStackParamsList, 'ListHotelsScreen'>;

export default function ListHotelsScreen({route, navigation}: Props) {
  const {searchHotels, formatDateCheckIn, formatDateCheckOut} = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.contentButtonOptions}>
        <TouchableOpacity style={styles.buttonOptions} activeOpacity={0.9}>
          <Icon name="options-outline" size={14} color={COLORS.textPrimary} />
          <Text style={styles.textButtonOptions}>Filters</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonOptions} activeOpacity={0.9}>
          <Icon
            name="swap-vertical-outline"
            size={14}
            color={COLORS.textPrimary}
          />
          <Text style={styles.textButtonOptions}>Sorts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonOptions} activeOpacity={0.9}>
          <Icon name="location-outline" size={14} color={COLORS.textPrimary} />
          <Text style={styles.textButtonOptions}>Maps</Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={searchHotels}
          keyExtractor={(_, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 80}}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.cantentCard}
              activeOpacity={0.9}
              onPress={() =>
                navigation.navigate('DetailsScreen', {
                  item,
                  formatDateCheckIn,
                  formatDateCheckOut,
                })
              }>
              <Image style={styles.image} source={{uri: item.image}} />
              <View style={styles.contentInfoCard}>
                <View style={styles.contentTitle}>
                  <Text numberOfLines={1} style={styles.title}>
                    {item.name}
                  </Text>
                  <Text style={styles.price}>
                    ${item.pricePerNight}{' '}
                    <Text style={styles.textPrice}>/ per night</Text>
                  </Text>
                </View>
                <View style={styles.contentReviews}>
                  <View style={styles.cardReviews}>
                    <Icon name="star" size={12} color="#fff" />
                    <Text style={styles.numberReviews}>{item.rating}</Text>
                  </View>
                  <Text style={styles.reviews}>(4232 reviews)</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    marginHorizontal: 22,
  },
  cantentCard: {
    marginVertical: 15,
  },
  image: {
    width: WIDTH_IMAGE,
    height: 150,
    borderRadius: 13,
  },
  contentInfoCard: {
    paddingTop: 8,
  },
  contentTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 20,
  },
  contentReviews: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    marginTop: 4,
  },
  title: {
    flex: 1,
    fontFamily: FONTS.bold,
    color: COLORS.textPrimary,
    letterSpacing: 0.3,
    fontSize: 13,
  },
  price: {
    fontFamily: FONTS.bold,
    color: COLORS.textPrimary,
    letterSpacing: 0.3,
    fontSize: 16,
  },
  textPrice: {
    fontSize: 12,
    fontFamily: FONTS.regular,
  },
  cardReviews: {
    backgroundColor: COLORS.secondary,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    borderRadius: 4,
    paddingHorizontal: 8,
    height: 22,
  },
  numberReviews: {
    color: '#fff',
    fontFamily: FONTS.bold,
    fontSize: 12,
    marginTop: 2,
  },
  reviews: {
    fontFamily: FONTS.regular,
    fontSize: 12,
    paddingTop: 4,
  },
  contentButtonOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    gap: 15,
  },
  buttonOptions: {
    backgroundColor: COLORS.textThird,
    flex: 1,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    flexDirection: 'row',
    gap: 6,
  },
  textButtonOptions: {
    fontFamily: FONTS.regular,
    fontSize: 14,
    color: COLORS.textPrimary,
  },
});
