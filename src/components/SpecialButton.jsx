import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInUp,
  BounceInUp,
  BounceInDown,
} from 'react-native-reanimated';

// button for Login / Sign Up screens
function SpecialButton(props) {
  const {buttonText, onPress} = props;
  const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

  return (
    <AnimatedTouchable
      entering={BounceInDown.delay(200).duration(1000)}
      onPress={() => {
        props.navi.navigate('Login');
      }}>
      <Text style={styles.buttonS}>{buttonText}</Text>
    </AnimatedTouchable>
  );
}

const styles = StyleSheet.create({
  buttonS: {
    backgroundColor: 'white',
    color: 'black',
    fontSize: 20,
    borderRadius: 15,
    width: 120,
    height: 50,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderWidth: 2,
    borderColor: 'darkslategrey',
    fontVariant: ['small-caps'],
    fontFamily: 'monospace',
    marginTop: 20,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
});

export default SpecialButton;
