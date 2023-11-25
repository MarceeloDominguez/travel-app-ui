import React from 'react';
import {View, StyleSheet, ViewToken} from 'react-native';
import {onboardingData} from '../data/onboardingData';
import RenderItem from '../components/onboarding/RenderItem';
import {Onboarding} from '../interface/onboardingInterface';
import Animated, {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';

export default function OnboardingScreen() {
  const flatListRef = useAnimatedRef<Animated.FlatList<Onboarding> | any>();
  const x = useSharedValue(0);
  const flatListIndex = useSharedValue(0);

  const onViewableItemsChanged = ({
    viewableItems,
  }: {
    viewableItems: ViewToken[];
  }) => {
    if (viewableItems[0].index !== null) {
      flatListIndex.value = viewableItems[0].index;
    }
  };

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
          scrollEventThrottle={16}
          contentContainerStyle={styles.contentContainerStyle}
          ref={flatListRef}
          onScroll={onScroll}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={{
            minimumViewTime: 300,
            viewAreaCoveragePercentThreshold: 10,
          }}
          renderItem={({item, index}) => (
            <RenderItem item={item} index={index} x={x} />
          )}
        />
      </View>
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
