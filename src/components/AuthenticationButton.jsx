import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Animated } from 'react-native';
import {
  FadeInDown,
  createAnimatedComponent,
} from 'react-native-reanimated';

// Button for Login / Sign Up screens
function AuthenticationButton(props) {
  const { buttonText, onPress, navi } = props;
  const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

  return (
    <AnimatedTouchable
      entering={FadeInDown.delay(150).duration(600)}
      onPress={() => onPress && onPress()}>
      <Text style={styles.buttonS}>{buttonText}</Text>
    </AnimatedTouchable>
  );
}

const styles = StyleSheet.create({
  buttonS: {
    backgroundColor: '#F59481',
    borderRadius: 8,
    width: 310,
    height: 40,
    marginTop: 25,
    fontFamily: 'Inter',
    textAlignVertical: 'center',
    fontSize: 16,
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: 16,
    textAlign: 'center',
    color: '#FFFFFF',
  },
});

export default AuthenticationButton;
