/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import type {PropsWithChildren} from 'react';
import {StyleSheet} from 'react-native';

import IntroScreen from './src/screens/IntroScrn';
import IntroScreen2 from './src/screens/introScrn2';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// screens:
import IntroScreen3 from './src/screens/introScrn3';
import Dashboard from './src/screens/dashboard';
import AQ_10 from './src/screens/AQ_10';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import ScanScreen from './src/screens/ScanScreen';
import {OrientationLocker, PORTRAIT} from 'react-native-orientation-locker';

import {AppProvider} from '@realm/react';
import ADHD from './src/screens/ADHD';

import React, {useState, useEffect, useRef} from 'react';
import {AppState} from 'react-native';
type SectionProps = PropsWithChildren<{
  title: string;
}>;
function App(): JSX.Element {
  const Stack = createNativeStackNavigator();
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);
  const activeTime = useRef<number>(0);
  const backgroundTime = useRef<number>(0);
  const hold = useRef<number>(0);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        console.log('App has come to the foreground!');
        console.log(new Date().getMinutes());
        activeTime.current = new Date().getMinutes();
      }

      if (
        (appState.current.match(/active/) && nextAppState === 'inactive') ||
        nextAppState === 'background'
      ) {
        backgroundTime.current = new Date().getMinutes();
        hold.current = activeTime.current - backgroundTime.current;
        console.log('App has come to the closed!', hold.current);
      }

      // if (
      //   appState.current.match(/active/)){
      //     console.log('App YEs!');

      //   }

      //   if (
      //     appState.current.match(/background|inactive/)){
      //       console.log('App Gone!');

      //     }

      appState.current = nextAppState;
      setAppStateVisible(appState.current);
      // console.log('AppState', appState.current);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <NavigationContainer>
      <OrientationLocker orientation={PORTRAIT} />
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{
          headerShown: false, // Hide the header for all screens in this stack
        }}>
        <Stack.Screen
          name="Home"
          component={IntroScreen}
          options={{animation: 'slide_from_right'}} // Disable animation for this screen
        />
        <Stack.Screen
          name="Details"
          component={IntroScreen2}
          options={{animation: 'slide_from_right'}}
        />
        <Stack.Screen
          name="Screen3"
          component={IntroScreen3}
          options={{animation: 'slide_from_right'}}
        />
        <Stack.Screen
          name="Signin"
          component={SignInScreen}
          options={{animation: 'slide_from_right'}}
        />
        <Stack.Screen
          name="Signup"
          component={SignUpScreen}
          options={{animation: 'slide_from_right'}}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{animation: 'slide_from_right'}}
        />
        <Stack.Screen
          name="AQ_10"
          component={AQ_10}
          options={{animation: 'slide_from_right'}}
        />
        <Stack.Screen
          name="ADHD"
          component={ADHD}
          options={{animation: 'slide_from_right'}}
        />

        <Stack.Screen
          name="Scan"
          component={ScanScreen}
          options={{animation: 'slide_from_right'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function AppWrapper() {
  return (
    <AppProvider id={'asd-tvtdw'}>
      {/* <UserProvider fallback={SignInScreen}> */}
      {/* <RealmProvider> */}
      <App />
      {/* </RealmProvider> */}
      {/* </UserProvider> */}
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  page: {
    width: '100%', // Adjust the width or height based on your layout
    height: '100%', // to fit the viewport
  },
});
export default AppWrapper;
