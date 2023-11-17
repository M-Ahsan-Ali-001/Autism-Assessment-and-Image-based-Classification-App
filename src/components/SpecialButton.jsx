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
function AuthenticationButton(props) {
  const {buttonText, onPress} = props;
  const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

  return (
    <AnimatedTouchable
      entering={BounceInDown.delay(200).duration(1000)}
      onPress={() => {
        props.navi.navigate('Dashboard');
      }}>
      <Text style={styles.buttonS}>{buttonText}</Text>
    </AnimatedTouchable>
  );
}

const styles = StyleSheet.create({
  buttonS: {
    backgroundColor: '#F59481',
    color: 'white',
    fontSize: 20,
    borderRadius: 8,
    width: 310,
    height: 40,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontVariant: ['small-caps'],
    fontFamily: 'monospace',
    marginTop: 40,
    // shadowColor: 'black',
    // shadowOffset: {
    //   width: 0,
    //   height: 12,
    // },
    // shadowOpacity: 0.58,
    // shadowRadius: 16.0,
    // elevation: 24,
  },
});

export default AuthenticationButton;
