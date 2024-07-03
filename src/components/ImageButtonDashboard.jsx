import React from 'react';
import { Image, View } from 'react-native';

function ImageButtonDashboard(props) {
  const arrowPath = require('../assets/images/arrowPng.png');
  const hamBurgerPath = require('../assets/images/hamburger.png');
  const userPath = require('../assets/images/user.png');
  const Questionnair1 = require('../assets/images/Q1.png');
  const Questionnair2 = require('../assets/images/Q2.png');
  const ScanImage = require('../assets/images/faceScan.png');

  return (
    <View testID="imageContainer">
      {props.nmb === 1 ? (
        <Image testID="imageComponent" source={arrowPath} style={props.styl} />
      ) : props.nmb === 2 ? (
        <Image testID="imageComponent" source={hamBurgerPath} style={props.styl} />
      ) : props.nmb === 3 ? (
        <Image testID="imageComponent" source={userPath} style={props.styl} />
      ) : props.nmb === 4 ? (
        <Image testID="imageComponent" source={Questionnair1} style={props.styl} />
      ) : props.nmb === 5 ? (
        <Image testID="imageComponent" source={Questionnair2} style={props.styl} />
      ) : props.nmb === 6 ? (
        <Image testID="imageComponent" source={ScanImage} style={props.styl} />
      ) : null}
    </View>
  );
}

export default ImageButtonDashboard;
