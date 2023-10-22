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

import {RadioButton} from 'react-native-paper';
function RadioButtonIntro(prop) {
  return (
    <View
      style={{
        position: 'absolute',
        top: 250,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      }}>
      <RadioButton
        color="black"
        disabled={true}
        status={prop.nmb === 1 ? 'checked' : 'unchecked'}
      />
      <RadioButton
        color="black"
        disabled={true}
        status={prop.nmb === 2 ? 'checked' : 'unchecked'}></RadioButton>
      <RadioButton
        color="black"
        disabled={true}
        status={prop.nmb === 3 ? 'checked' : 'unchecked'}></RadioButton>
    </View>
  );
}

const styles = StyleSheet.create({
  radioButton: {
    color: 'red',
  },
});

export default RadioButtonIntro;
