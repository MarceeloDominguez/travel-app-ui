import React, {useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Animated,
} from 'react-native';

const {width} = Dimensions.get('window');

const ITEM_SIZE = width * 0.6;

export default function Carousel() {
  const scrollX = useRef(new Animated.Value(0)).current;
  const DATA = [{key: 'left-spacer'}, ...Array(10), {key: 'right-spacer'}];

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
          {DATA.map((item, index) => {
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
                <View style={styles.wrapperPoste}>
                  <Image
                    style={styles.posterImage}
                    source={{
                      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbKuLTZsfAauhM7jFEL7FNMzVUfdeaeVe0pA&usqp=CAU',
                    }}
                  />
                </View>
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
    height: 300,
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
    height: 300,
    borderRadius: 20,
  },
});
