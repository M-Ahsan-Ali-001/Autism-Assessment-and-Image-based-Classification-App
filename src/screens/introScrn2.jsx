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
    <GestureHandlerRootView style={{backgroundColor: '#FDFDFD', flex: 1}}>
      <PanGestureHandler onGestureEvent={handleGesture}>
        <View style={styles.container}>
          <LogoIntroScreen pageN={2} h={223} w={293} />
          <TextIntroScreen tFooter="Built-In Questionnaire" />
          <Text style={styles.tagText}>
            Standardized Questionnaires for easy screening of ASD and ADHD.
          </Text>
          <RadioButtonIntro nmb={2} />
        </View>
      </PanGestureHandler>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  tagText: {
    textAlignVertical: 'center',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 20,
    textAlign: 'center',
    color: '#000000',
  },
});

export default IntroScreen2;
