import React, {State} from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';

import {
  GestureHandlerRootView,
  PanGestureHandler,
} from 'react-native-gesture-handler';
import LogoIntroScreen from '../components/LogoIntroScree';
import RadioButtonIntro from '../components/RadioButtonIntro';
import TextIntroScreen from '../components/TextIntroScreen';
import { ProgressBar } from 'react-native-paper';
import ProgressBar from '../components/ProgressBar';

function IntroScreen({navigation}) {
  const [textFooter, changeTextFooter] = React.useState('AQ 10 question');
  const [shapeCond, setShapeCond] = React.useState(false);

  const handleGesture = evt => {
    const {nativeEvent} = evt;

    if (nativeEvent.velocityX > 0) {
      console.log('Swipe right');
    }

    if (nativeEvent.velocityX < 0) {
      console.log('Swipe rleft');

      //changeTextFooter("changed text")
      //setShapeCond(false)
      navigation.navigate('Details');
    }
  };

  return (
    <GestureHandlerRootView style={{backgroundColor: '#FDFDFD', flex: 1}}>
      <PanGestureHandler onGestureEvent={handleGesture}>
        <View style={styles.container}>
          <LogoIntroScreen pageN={1} h={223} w={293} />
          <TextIntroScreen tFooter="Autism Detection using AI" />
          <Text style={styles.tagText}>
            Built-In algorithm for early intervention and detection of Autism.
          </Text>
          {/* <RadioButtonIntro nmb={1} /> */}
      <ProgressBar select={1}></ProgressBar>
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
    maxWidth:300
  },
});

export default IntroScreen;
