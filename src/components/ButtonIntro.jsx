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

import {Button} from 'react-native-paper';

function ButtonIntro(prop) {
  return (
    <View
      style={{
        // position: prop.pos,
        // top: prop.t,
        // left: prop.l,
        // right: prop.r,
        // bottom: prop.b,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {prop.numb === 1 ? (
        <Text
          style={styles.buttonS}
          onPress={() => {
            prop.navi.navigate('Login');

            console.log('suiiiii');
          }}>
          {' '}
          Get Started
        </Text>
      ) : prop.numb === 2 ? (
        <Text
          style={styles.buttonS}
          onPress={() => {
            prop.navi.navigate('Login');

            console.log('suiiiii');
          }}>
          {' '}
          {prop.text}
        </Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  buttonS: {
    backgroundColor: 'black',
    color: 'white',
    fontSize: 23,
    borderRadius: 69,
    padding: 10,
    borderWidth: 2,

  },
});

export default ButtonIntro;
