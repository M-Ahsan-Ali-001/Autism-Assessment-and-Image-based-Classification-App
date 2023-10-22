import React, {State} from 'react';
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

import {
  GestureHandlerRootView,
  PanGestureHandler,
} from 'react-native-gesture-handler';
import {RadioButton} from 'react-native-paper';

function IntroScreen2({navigation}) {
  const [textFooter, changeTextFooter] = React.useState('AQ 10 question');
  const [shapeCond, setShapeCond] = React.useState(false);

  const handleGesture = evt => {
    const {nativeEvent} = evt;

    if (nativeEvent.velocityX > 0) {
      console.log('Swipe right');

      navigation.navigate('Home');
    }

    if (nativeEvent.velocityX < 0) {
      console.log('Swipe rleft');

      changeTextFooter('changed text');
      navigation.navigate('Screen3');
      setShapeCond(false);
    }
  };

  return (
    <GestureHandlerRootView style={{backgroundColor: 'white', flex: 1}}>
      <PanGestureHandler onGestureEvent={handleGesture}>
        <View style={{backgroundColor: 'white', flex: 1}}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 90,
              height: 250,
              width: 250,
            }}>
            {/* <Image source={require('../assets/Logo.png')} style={{ height: 250, width: 250, resizeMode: 'contain' }}></Image> */}
          </View>

          <View style={{flex: 1, justifyContent: 'flex-end'}}>
            <View style={{justifyContent: 'flex-end'}}>
              {/* {shapeCond ?(<SvgComponent1/>): (<SvgComponent/>)} */}
              {/* <SvgComponent1/> */}
              <View style={{justifyContent: 'flex-end'}}>
                <Image
                  source={require('../assets/images/wave2.png')}
                  style={{
                    width: '100%',
                    height: '90%',
                    margin: 0,
                    padding: 0,
                    top: 15,
                    justifyContent: 'flex-end',
                    resizeMode: 'contain',
                  }}></Image>
              </View>

              <View
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{fontWeight: '900', fontSize: 18, color: 'black'}}>
                  {textFooter}
                </Text>
              </View>

              <View
                style={{
                  position: 'absolute',
                  top: 150,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <RadioButton></RadioButton>
                <RadioButton status="checked"></RadioButton>
                <RadioButton></RadioButton>
              </View>
            </View>
          </View>
        </View>
      </PanGestureHandler>
    </GestureHandlerRootView>
  );
}

export default IntroScreen2;
