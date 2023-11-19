import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInUp,
  BounceInUp,
  BounceInDown,
} from 'react-native-reanimated';

function ProGressBar(props) {
  let x = 1;

  return (
    <View>
      {props.select === 1 ? (
        <View style={styles.container}>
          <View style={styles.cubeS}></View>

          <View style={styles.circleS}></View>

          <View style={styles.circleS}></View>
        </View>
      ) : props.select === 2 ? (
        <View style={styles.container}>
          <View style={styles.circleS}></View>
          <View style={styles.cubeS}></View>

          <View style={styles.circleS}></View>
        </View>
      ) : props.select === 3 ? (
        <View style={styles.container}>
       
     

          <View style={styles.circleS}></View>
          <View style={styles.circleS}></View>
          <View style={styles.cubeS}></View>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  circleS: {
    height: 12,
    width: 12,
    borderRadius: 100,

    backgroundColor: '#D9D9D9',
  },
  cubeS: {
    height: 12,
    width: 30,
    borderRadius: 200,

    backgroundColor: '#C66350',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 80,
  },
});

export default ProGressBar;
