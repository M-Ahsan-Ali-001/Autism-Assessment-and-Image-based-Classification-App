import React from 'react';
import {StyleSheet, View} from 'react-native';

function ProgressBar(props) {
  return (
    <View testID="container">
      {props.select === 1 ? (
        <View style={styles.container}>
          <View testID="cube" style={styles.cubeS}></View>
          <View testID="circle" style={styles.circleS}></View>
          <View testID="circle" style={styles.circleS}></View>
        </View>
      ) : props.select === 2 ? (
        <View style={styles.container}>
          <View testID="circle" style={styles.circleS}></View>
          <View testID="cube" style={styles.cubeS}></View>
          <View testID="circle" style={styles.circleS}></View>
        </View>
      ) : props.select === 3 ? (
        <View style={styles.container}>
          <View testID="circle" style={styles.circleS}></View>
          <View testID="circle" style={styles.circleS}></View>
          <View testID="cube" style={styles.cubeS}></View>
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

export default ProgressBar;
