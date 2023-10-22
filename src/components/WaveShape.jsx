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

function WaveShape(prop) {
  const path1 = '../assets/wave1.png';
  const path2 = '../assets/wave2.png';
  const path3 = '../assets/wave3.png';

  return (
    <View style={{justifyContent: 'flex-end'}}>
      {prop.shapeN === 1 ? (
        <Image
          source={require('../assets/wave1.png')}
          style={{
            width: '100%',
            height: '90%',
            margin: 0,
            padding: 0,
            top: 15,
            justifyContent: 'flex-end',
            resizeMode: 'contain',
          }}></Image>
      ) : prop.shapeN === 2 ? (
        <Image
          source={require('../assets/wave2.png')}
          style={{
            width: '100%',
            height: '90%',
            margin: 0,
            padding: 0,
            top: 15,
            justifyContent: 'flex-end',
            resizeMode: 'contain',
          }}></Image>
      ) : prop.shapeN === 3 ? (
        <Image
          source={require('../assets/wave3.png')}
          style={{
            width: '100%',
            height: '90%',
            margin: 0,
            padding: 0,
            top: 15,
            justifyContent: 'flex-end',
            resizeMode: 'contain',
          }}></Image>
      ) : null}
    </View>
  );
}

export default WaveShape;
