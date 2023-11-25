import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Data} from '../interface/dataInterface';
import {COLORS, FONTS} from '../util/constants';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import SearchScreen from '../screens/SearchScreen';
import ListHotelsScreen from '../screens/ListHotelsScreen';
import OnboardingScreen from '../screens/OnboardingScreen';

export type RootStackParamsList = {
  OnboardingScreen: undefined;
  HomeScreen: undefined;
  DetailsScreen: {
    item: Data;
    formatDateCheckIn?: string;
    formatDateCheckOut?: string;
  };
  SearchScreen: undefined;
  ListHotelsScreen: {
    searchHotels: Data[];
    formatDateCheckIn: string;
    formatDateCheckOut: string;
  };
};

const Stack = createNativeStackNavigator<RootStackParamsList>();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{animation: 'fade'}}>
        <Stack.Screen
          name="OnboardingScreen"
          component={OnboardingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DetailsScreen"
          component={DetailsScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={{
            headerShadowVisible: false,
            headerStyle: {backgroundColor: COLORS.primary},
            headerTitle: 'Search Hotels',
            headerTitleAlign: 'center',
            headerTitleStyle: {fontFamily: FONTS.bold},
          }}
        />
        <Stack.Screen
          name="ListHotelsScreen"
          component={ListHotelsScreen}
          options={{
            headerShadowVisible: false,
            headerStyle: {backgroundColor: COLORS.primary},
            headerTitle: 'Hotels',
            headerTitleAlign: 'center',
            headerTitleStyle: {fontFamily: FONTS.bold},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
