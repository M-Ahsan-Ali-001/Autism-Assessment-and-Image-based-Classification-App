import React from 'react';

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

function LogoIntroScreen(prop) {
  const path1 = '../assets/images/intro1.png';
  const path2 = '../assets/images/intro2.png';
  const path3 = '../assets/images/intro3.png';

  return (
    <View
      style={{justifyContent: 'center', alignItems: 'center', marginTop: 90}}>
      {prop.pageN === 1 ? (
        <Image
          source={require(path1)}
          style={{height: prop.h, width: prop.w, resizeMode: 'contain'}}
        />
      ) : prop.pageN === 2 ? (
        <Image
          source={require(path2)}
          style={{height: prop.h, width: prop.w, resizeMode: 'contain'}}
        />
      ) : prop.pageN === 3 ? (
        <Image
          source={require(path3)}
          style={{height: prop.h, width: prop.w, resizeMode: 'contain'}}
        />
      ) : null}
    </View>
  );
}

export default LogoIntroScreen;
