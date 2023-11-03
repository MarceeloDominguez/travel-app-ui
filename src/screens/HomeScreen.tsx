import React, {useState} from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';
import {DATA} from '../data/data';
import {COLORS, FONTS} from '../util/constants';
import Tabs from '../components/home/Tabs';
import Carousel from '../components/home/Carousel';
import SearchComponent from '../components/home/SearchComponent';
import PopularCategories from '../components/home/PopularCategories';
import Header from '../components/home/Header';

export default function HomeScreen() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const filteredByAmerica = DATA.filter(item => item.category === 'America');
  const filteredByEurope = DATA.filter(item => item.category === 'Europe');
  const filteredByAsia = DATA.filter(item => item.category === 'Asia');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <Text style={styles.title}>Where do you wand go</Text>
        <SearchComponent />
        <Tabs setSelectedIndex={setSelectedIndex} />
        {selectedIndex === 0 && <Carousel data={DATA} />}
        {selectedIndex === 1 && <Carousel data={filteredByAmerica} />}
        {selectedIndex === 2 && <Carousel data={filteredByEurope} />}
        {selectedIndex === 3 && <Carousel data={filteredByAsia} />}
        <PopularCategories />
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
