/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import Svg,{Circle} from 'react-native-svg'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Image,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import IntroScreen from './src/screens/IntroScrn';
import IntroScreen2 from './src/screens/introScrn2';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function App(): JSX.Element {


 
  const Stack = createNativeStackNavigator();


  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home"
    screenOptions={{
      headerShown: false, // Hide the header for all screens in this stack
    }}
  

    >
        <Stack.Screen name="Home" component={IntroScreen} options={{ animation:"none" }} // Disable animation for this screen
 />
        <Stack.Screen name="Details" component={IntroScreen2} options={{ animation:"none" }} />
      </Stack.Navigator>
    </NavigationContainer>
 
  );
}


const styles = StyleSheet.create({
  page: {
    width: '100%', // Adjust the width or height based on your layout
    height: '100%', // to fit the viewport

   
  },
});
export default App;
