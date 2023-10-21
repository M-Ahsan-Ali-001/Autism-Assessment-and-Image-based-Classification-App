import React, { State } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Image,
  Text,
  useColorScheme,
  View,
  Alert,
} from 'react-native';



import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';

import SvgComponent from "../components/SvgComponent";

function IntroScreen() {

  const [textFooter, changeTextFooter] = React.useState('this is asd detection app!')
  //const textSeq= []

  const handleGesture = (evt) => {
    const { nativeEvent } = evt;

    if (nativeEvent.velocityX > 0) {
      console.log('Swipe right');
      changeTextFooter("this is asd detection app!")
    }


    if (nativeEvent.velocityX < 0) {
      console.log('Swipe rleft');
      changeTextFooter("changed text")
    }
  };

  return (
    <GestureHandlerRootView style={{ backgroundColor: 'white', flex: 1 }}>
      <PanGestureHandler onGestureEvent={handleGesture}>
        <View style={{ backgroundColor: 'white', flex: 1 }}>
          <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 90 }}>
            <Image source={require('../assets/Logo.png')} style={{ height: 250, width: 250, resizeMode: 'contain' }}></Image>
          </View>


          <View style={{ flex: 1, justifyContent: 'flex-end' }}>
            <View>
              <SvgComponent />
              <View style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <Text style={{ fontWeight: '900', fontSize: 20 }}>{textFooter}</Text>
              </View>
            </View>
          </View>


        </View>

      </PanGestureHandler>

    </GestureHandlerRootView>




  )
}

export default IntroScreen;