import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable, Dimensions} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import {COLORS, FONTS} from '../../util/constants';

const {width: WIDTH_SCREEN} = Dimensions.get('window');

const TAB_WIDTH = WIDTH_SCREEN / 4;

const HALF_TAB = TAB_WIDTH / 2;

const TABS = ['All', 'America', 'Europe', 'Asia'];

const ALL_TAB = TAB_WIDTH + HALF_TAB;
const AMERICA_TAB = TAB_WIDTH / 2;
const EUROPE_TAB = TAB_WIDTH / 2;
const ASIA_TAB = TAB_WIDTH + HALF_TAB;

type Props = {
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
};

export default function Tabs({setSelectedIndex}: Props) {
  const [selectedTab, setSelectedTab] = useState<string>('All');
  const offset = useSharedValue(-ALL_TAB);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{translateX: offset.value}],
  }));

  const handlePress = (tab: string, index: number) => {
    setSelectedTab(tab);
    setSelectedIndex(index);

    const newOffset = (() => {
      switch (tab) {
        case 'All':
          return -ALL_TAB;
        case 'America':
          return -AMERICA_TAB;
        case 'Europe':
          return EUROPE_TAB;
        case 'Asia':
          return ASIA_TAB;
        default:
          return -ALL_TAB;
      }
    })();

    offset.value = withTiming(newOffset);
  };

  return (
    <View style={styles.containerTabs}>
      <View style={styles.tabs}>
        {TABS.map((tab, index) => (
          <Pressable
            key={tab}
            style={styles.tab}
            onPress={() => handlePress(tab, index)}>
            <Text
              style={[
                styles.tabTitle,
                {
                  color:
                    selectedTab === tab
                      ? COLORS.secondary
                      : COLORS.textSecondary,
                },
              ]}>
              {tab}
            </Text>
          </Pressable>
        ))}
      </View>
      <Animated.View style={[styles.animatedCircle, animatedStyles]} />
    </View>
  );
}

const styles = StyleSheet.create({
  containerTabs: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabs: {
    flexDirection: 'row',
  },
  tab: {
    paddingVertical: 5,
    width: TAB_WIDTH,
    alignItems: 'center',
  },
  tabTitle: {
    fontFamily: FONTS.regular,
    fontSize: 14,
    letterSpacing: 0.7,
  },
  animatedCircle: {
    height: 10,
    width: 10,
    backgroundColor: COLORS.secondary,
    borderRadius: 5,
  },
});
