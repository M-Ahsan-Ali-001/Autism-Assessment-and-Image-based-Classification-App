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

function TextIntroScreen(prop) {
  return (
    <View
      style={{
        position: 'absolute',
        top: prop.t,
        left: prop.l,
        right: prop.r,
        bottom: prop.b,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontWeight: '900',
          fontSize: 18,
          color: 'white',
          justifyContent: 'center',
          textAlign:'center'
        }}>
        {prop.tFooter}
      </Text>
    </View>
  );
}

export default TextIntroScreen;
