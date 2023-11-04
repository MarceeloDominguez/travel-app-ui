import React, {useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Animated,
  TouchableOpacity,
} from 'react-native';
import {Data} from '../../interface/dataInterface';
import {COLORS, FONTS} from '../../util/constants';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamsList} from '../../navigation/navigation';

const {width} = Dimensions.get('window');

const ITEM_SIZE = width * 0.6;

type Props = {
  data: Data[];
};

export default function Carousel({data}: Props) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamsList>>();

  const scrollX = useRef(new Animated.Value(0)).current;
  const DATA = [
    {key: 'left-spacer'} as any,
    ...data,
    {key: 'right-spacer'} as any,
  ];

  return (
    <View>
      <Animated.ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        snapToInterval={ITEM_SIZE}
        scrollEventThrottle={16}
        contentContainerStyle={styles.contentContainerCarousel}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: true},
        )}>
        <View style={styles.containerCarousel}>
          {DATA.map((item: Data, index) => {
            if (index === 0 || index === DATA.length - 1) {
              return <View key={index} style={styles.spacerList} />;
            }

            const inputRange = [
              (index - 2) * ITEM_SIZE,
              (index - 1) * ITEM_SIZE,
              index * ITEM_SIZE,
            ];

            const translateY = scrollX.interpolate({
              inputRange,
              outputRange: [10, -30, 10],
            });

            const opacity = scrollX.interpolate({
              inputRange,
              outputRange: [0.3, 1, 0.3],
            });

            return (
              <Animated.View
                key={index}
                style={[
                  styles.containerImage,
                  {opacity, transform: [{translateY}]},
                ]}>
                <TouchableOpacity
                  style={styles.wrapperPoste}
                  activeOpacity={0.9}
                  onPress={() => navigation.navigate('DetailsScreen', {item})}>
                  <Image
                    style={styles.posterImage}
                    source={{uri: item.image}}
                  />
                  <View style={styles.wrapperNameEndPrice}>
                    <Text numberOfLines={1} style={styles.name}>
                      {item.name}
                    </Text>
                    <Text style={styles.price}>
                      ${item.pricePerNight} - Per Night
                    </Text>
                  </View>
                  <LinearGradient
                    start={{x: 1, y: 0}}
                    end={{x: 1, y: 1}}
                    colors={['transparent', 'rgba(0,0,0,0.6)']}
                    style={styles.viewTransparentCard}
                  />
                </TouchableOpacity>
              </Animated.View>
            );
          })}
        </View>
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainerCarousel: {
    paddingVertical: 50,
  },
  containerCarousel: {
    flexDirection: 'row',
  },
  spacerList: {
    height: 280,
    width: (width - ITEM_SIZE) / 2,
  },
  containerImage: {
    width: ITEM_SIZE,
  },
  wrapperPoste: {
    marginHorizontal: 14,
    alignItems: 'center',
  },
  posterImage: {
    width: '100%',
    height: 280,
    borderRadius: 20,
  },
  wrapperNameEndPrice: {
    position: 'absolute',
    bottom: 10,
    left: 16,
  },
  name: {
    color: COLORS.primary,
    fontFamily: FONTS.bold,
    fontSize: 14,
    marginBottom: 5,
    maxWidth: ITEM_SIZE * 0.7,
    zIndex: 1,
  },
  price: {
    color: COLORS.primary,
    fontFamily: FONTS.regular,
    fontSize: 13,
    zIndex: 1,
  },
  viewTransparentCard: {
    position: 'absolute',
    height: 280,
    width: '100%',
    borderRadius: 20,
  },
});
