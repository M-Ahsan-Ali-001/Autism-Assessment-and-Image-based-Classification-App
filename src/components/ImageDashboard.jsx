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

function ImageButtonDashboard(props) {
  const arrowPath = '../assets/arrowPng.png';
  const hamBurgerPath = '../assets/hamburger.png';
  const userPath = '../assets/user.png';
  const Questionnair1 = '../assets/Q1.png';

  const Questionnair2 = '../assets/Q2.png';
  const ScanImage = '../assets/faceScan.png';

  return (
    <View>
      {props.nmb === 1 ? (
        <Image source={require(arrowPath)} style={props.styl} />
      ) : props.nmb === 2 ? (
        <Image source={require(hamBurgerPath)} style={props.styl} />
      ) : props.nmb === 3 ? (
        <Image source={require(userPath)} style={props.styl} />
      ) : props.nmb === 4 ? (
        <Image source={require(Questionnair1)} style={props.styl} />
      ) : props.nmb === 5 ? (
        <Image source={require(Questionnair2)} style={props.styl} />
      ) :props.nmb === 6 ? (
        <Image source={require(ScanImage)} style={props.styl} />
      ) : null}
    </View>
  );
}
export default ImageButtonDashboard;
