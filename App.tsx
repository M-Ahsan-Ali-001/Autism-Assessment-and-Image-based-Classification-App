/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import Svg, { Circle } from 'react-native-svg'
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

// screens:
import IntroScreen3 from './src/screens/introScrn3';
import Dashboard from './src/screens/dashboard';
import AQ_10 from './src/screens/AQ_10';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';


function App(): JSX.Element {



  const Stack = createNativeStackNavigator();


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
        screenOptions={{
          headerShown: false, // Hide the header for all screens in this stack
        }}


      >
        <Stack.Screen name="Home" component={IntroScreen} options={{ animation: "slide_from_right" }} // Disable animation for this screen
        />
        <Stack.Screen name="Details" component={IntroScreen2} options={{ animation: "slide_from_right" }} />
        <Stack.Screen name="Screen3" component={IntroScreen3} options={{ animation: "slide_from_right" }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ animation: "slide_from_right" }} />
        <Stack.Screen name="Signup" component={SignUpScreen} options={{ animation: "slide_from_right" }} />
        <Stack.Screen name="Dashboard" component={Dashboard} options={{ animation: "slide_from_right" }} />
        <Stack.Screen name="AQ_10" component={AQ_10} options={{ animation: "slide_from_right" }} />
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
