import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Weather from './components/Weather';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Wish from './Wish';

const Stack = createStackNavigator();
export default function App() {
  return (
    <Wish> 
      <NavigationContainer>
       <Stack.Navigator>
         <Stack.Screen name="Home" component={ZipCodeScreen} />
         <Stack.Screen name="Weather" component={WeatherScreen} />
       </Stack.Navigator>
      </NavigationContainer>
   
    </Wish>
  );
}