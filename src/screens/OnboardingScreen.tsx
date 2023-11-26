import React, {useState} from 'react';
import {View, StyleSheet, ViewToken, Text, Dimensions} from 'react-native';
import {onboardingData} from '../data/onboardingData';
import RenderItem from '../components/onboarding/RenderItem';
import Animated, {
  SlideInRight,
  SlideOutRight,
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import Dot from '../components/onboarding/Dot';
import {COLORS, FONTS} from '../util/constants';

interface OnViewableItemsChangedInfo {
  viewableItems: ViewToken[];
}

const {width} = Dimensions.get('window');

const ITEM_WIDTH = width;

export default function OnboardingScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = React.useRef(null);
  const x = useSharedValue(0);
  const flatListIndex = useSharedValue(0);

  const onViewableItemsChanged = ({
    viewableItems,
  }: OnViewableItemsChangedInfo) => {
    if (viewableItems[0]?.index !== null) {
      flatListIndex.value = viewableItems[0]?.index;
    }
  };

  const viewabilityConfigCallbackPairs = React.useRef([
    {
      viewabilityConfig: {
        viewAreaCoveragePercentThreshold: 50,
        minimumViewTime: 600,
      },
      onViewableItemsChanged,
    },
  ]);

  const onScroll = useAnimatedScrollHandler({
    onScroll: event => {
      x.value = event.contentOffset.x;
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.wrapperFlatList}>
        <Animated.FlatList
          data={onboardingData}
          keyExtractor={item => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          snapToInterval={ITEM_WIDTH}
          scrollEventThrottle={16}
          contentContainerStyle={styles.contentContainerStyle}
          ref={flatListRef}
          onMomentumScrollEnd={e => {
            setCurrentIndex(
              Math.round(e.nativeEvent.contentOffset.x / ITEM_WIDTH),
            );
          }}
          onScroll={onScroll}
          // onViewableItemsChanged={onViewableItemsChanged}
          // viewabilityConfig={{
          //   minimumViewTime: 300,
          //   viewAreaCoveragePercentThreshold: 10,
          // }}
          viewabilityConfigCallbackPairs={
            viewabilityConfigCallbackPairs.current
          }
          renderItem={({item, index}) => (
            <RenderItem item={item} index={index} x={x} />
          )}
        />
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 65,
          flexDirection: 'row',
          alignSelf: 'center',
          gap: 10,
        }}>
        {onboardingData.map((_, index) => (
          <Dot key={index} index={index} x={x} />
        ))}
      </View>
      {currentIndex === onboardingData.length - 1 && (
        <Animated.View
          entering={SlideInRight}
          exiting={SlideOutRight}
          style={{
            position: 'absolute',
            bottom: 57,
            right: 22,
          }}>
          <Text
            style={{
              fontFamily: FONTS.bold,
              fontSize: 18,
              color: COLORS.textPrimary,
              letterSpacing: 0.3,
            }}>
            Next
          </Text>
        </Animated.View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapperFlatList: {
    flex: 1,
  },
  contentContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
