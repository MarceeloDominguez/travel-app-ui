import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamsList} from '../navigation/navigation';
import {COLORS, FONTS} from '../util/constants';
import Icon from 'react-native-vector-icons/Ionicons';
import StayInformation from '../components/details/StayInformation';
import Facilities from '../components/details/Facilities';
import Price from '../components/details/Price';

type Props = NativeStackScreenProps<RootStackParamsList, 'DetailsScreen'>;

const {width: WIDTH_SCREEN} = Dimensions.get('window');

export default function DetailsScreen({route, navigation}: Props) {
  const {item} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={{uri: item.image}} style={styles.image} />
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.9}
          style={styles.buttonBack}>
          <Icon
            name="chevron-back-outline"
            color={COLORS.secondary}
            size={24}
          />
        </TouchableOpacity>
        <View style={styles.contentContainer}>
          <View style={styles.wrapperNameEndIconHeart}>
            <Text style={styles.name} numberOfLines={1}>
              {item.name}
            </Text>
            <Icon name="heart" size={20} color={COLORS.textSecondary} />
          </View>
          <View style={styles.containerRating}>
            <Icon name="star" size={12} color={COLORS.primary} />
            <Text style={styles.rating}>{item.rating}</Text>
          </View>
          <View style={styles.lineSeparator} />
          <StayInformation />
          <Facilities />
          <Price pricePerNight={item.pricePerNight} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    flex: 1,
  },
  image: {
    width: WIDTH_SCREEN,
    height: WIDTH_SCREEN * 0.9,
  },
  contentContainer: {
    backgroundColor: COLORS.primary,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    transform: [{translateY: -30}],
    padding: 22,
  },
  wrapperNameEndIconHeart: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name: {
    color: COLORS.textPrimary,
    fontFamily: FONTS.regular,
    fontSize: 22,
    letterSpacing: 0.2,
  },
  containerRating: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    backgroundColor: COLORS.secondary,
    maxWidth: 50,
    height: 24,
    borderRadius: 8,
    marginVertical: 10,
  },
  rating: {
    fontSize: 12,
    fontFamily: FONTS.bold,
    color: COLORS.primary,
    marginTop: 3,
  },
  lineSeparator: {
    backgroundColor: '#7A869A26',
    height: 1,
    marginVertical: 15,
  },
  buttonBack: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    position: 'absolute',
    top: 20,
    left: 22,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});
