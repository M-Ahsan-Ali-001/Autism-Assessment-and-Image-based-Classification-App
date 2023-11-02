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
import RadioButtonIntro from '../components/RadioButtonIntro';
import TextIntroScreen from '../components/TextIntroScreen';
import WaveShape from '../components/WaveShape';
import LogoIntroScreen from '../components/LogoIntroScree';

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
         
          <LogoIntroScreen pageN={2} h={270} w={270}/>

          <View style={{flex: 1, justifyContent: 'flex-end'}}>
            <View style={{justifyContent: 'flex-end'}}>
              <WaveShape shapeN={2} />

              <TextIntroScreen
                tFooter="Questionnaires for easy initial Screening."
                l={0}
                r={0}
                b={0}
                t={0}
              />

              <RadioButtonIntro nmb={2}></RadioButtonIntro>
            </View>
          </View>
        </View>
      </PanGestureHandler>
    </GestureHandlerRootView>
  );
}

export default IntroScreen2;
