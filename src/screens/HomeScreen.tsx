import React, {useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import {COLORS, FONTS} from '../util/constants';
import Tabs from '../components/home/Tabs';
import Carousel from '../components/home/Carousel';

export default function HomeScreen() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Where do you wand go</Text>
        <Tabs setSelectedIndex={setSelectedIndex} />
        {selectedIndex === 0 && <Carousel />}
        {selectedIndex === 1 && <Text>America</Text>}
        {selectedIndex === 2 && <Text>Europe</Text>}
        {selectedIndex === 3 && <Text>Asia</Text>}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    flex: 1,
  },
  title: {
    paddingHorizontal: 22,
    fontSize: 28,
    color: COLORS.textPrimary,
    maxWidth: 250,
    lineHeight: 40,
    letterSpacing: 0.2,
    fontFamily: FONTS.regular,
    textTransform: 'capitalize',
  },
});
