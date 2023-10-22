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
import {Button, RadioButton} from 'react-native-paper';
import LogoIntroScreen from '../components/LogoIntroScree';
import RadioButtonIntro from '../components/RadioButtonIntro';
import TextIntroScreen from '../components/TextIntroScreen';
import WaveShape from '../components/WaveShape';
import ButtonIntro from '../components/ButtonIntro';

function IntroScreen3({navigation}) {
  const [textFooter, changeTextFooter] = React.useState('AQ 10 question');
  const [shapeCond, setShapeCond] = React.useState(false);

  const handleGesture = evt => {
    const {nativeEvent} = evt;

    if (nativeEvent.velocityX > 0) {
      console.log('Swipe right');
      navigation.navigate('Details');
      // navigation.navigate('Home')
    }

    if (nativeEvent.velocityX < 0) {
      console.log('Swipe rleft');

      changeTextFooter('changed text');
      setShapeCond(false);
    }
  };

  return (
    <GestureHandlerRootView style={{backgroundColor: 'white', flex: 1}}>
      <PanGestureHandler onGestureEvent={handleGesture}>
        <View style={{backgroundColor: 'white', flex: 1}}>
          <LogoIntroScreen pageN={3} h={250} w={250} />

          <View style={{flex: 1, justifyContent: 'flex-end'}}>
            <View style={{justifyContent: 'flex-end'}}>
              <WaveShape shapeN={3} />
              {/* <TextIntroScreen tFooter="Yes ! " l={0} r={0} b={30} t={0} /> */}

             <ButtonIntro
               l={0}
               r={0}
               b={30}
               t={60}
             />

              <RadioButtonIntro nmb={3} />
            </View>
          </View>
        </View>
      </PanGestureHandler>
    </GestureHandlerRootView>
  );
}

export default IntroScreen3;
