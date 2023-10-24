import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  Dimensions,
} from 'react-native';
import Animated, {
  FadeIn,
  FadeInUp,
  FadeInLeft,
  FadeInRight,
} from 'react-native-reanimated';

const {height, width} = Dimensions.get('window');

export default function SignUpScreen() {
  const logo = require('../assets/images/Logo.png');
  const topRight = require('../assets/images/topRight.png');
  const bottomLeft = require('../assets/images/bottomLeft.png');

  return (
    <View style={styles.container}>
      <Animated.Image
        entering={FadeInRight.delay(200).duration(1000)}
        source={topRight}
        style={styles.topRightImage}
      />
      <Animated.Image
        entering={FadeInLeft.delay(400).duration(1000)}
        source={bottomLeft}
        style={styles.bottomLeftImage}
      />
      <Animated.Image
        entering={FadeInUp.delay(400).duration(800).springify().damping(3)}
        source={logo}
        style={styles.logo}
      />
      <Text style={styles.title}>Autism Launchpad</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#ffffff"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#ffffff"
        secureTextEntry={true}
      />
      <Text style={{color: 'white', marginTop: height * 0.02, alignContent}}>
        Forgot Password?
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a6864',
    alignItems: 'center',
  },
  logo: {
    flexGrow: 0.4,
    height: height * 0.15,
    width: height * 0.15,
    resizeMode: 'contain',
    marginTop: height * 0.1,
  },
  title: {
    fontSize: height * 0.04,
    color: 'white',
    fontVariant: ['small-caps'],
    fontFamily: 'EBGaramond-VariableFont_wght',
  },
  input: {
    height: height * 0.05,
    width: width * 0.8,
    borderColor: 'white',
    borderWidth: 0.5,
    marginTop: height * 0.02,
    paddingLeft: 10,
    color: 'white',
    borderRadius: 10,
    backgroundColor: 'darkslategrey',
  },

  topRightImage: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: height * 0.3,
    width: height * 0.3,
    resizeMode: 'contain',
    // opacity: 0.8,
  },

  bottomLeftImage: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: height * 0.3,
    width: height * 0.3,
    resizeMode: 'contain',
    zIndex: -1,
    // opacity: 0.8,
  },
});
