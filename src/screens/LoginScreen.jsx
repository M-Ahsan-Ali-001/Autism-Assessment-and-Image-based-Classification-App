import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  Dimensions,
} from 'react-native';
import Animated from 'react-native-reanimated';
import SpecialButton from '../components/SpecialButton';

const {height, width} = Dimensions.get('window');

const LoginScreen = ({navigation}) => {
  const logo = require('../assets/images/Logo.png');

  const handleSignUpPress = () => {
    navigation.navigate('Signup');
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.titleText}>
          <Text style={styles.autismText}>Autism</Text>{' '}
          <Text style={styles.launchpadText}>Launchpad</Text>
        </Text>
      </View>

      <Text style={styles.signInText}>Sign In!</Text>
      <Text style={styles.tagText}>
        Lets continue with us for a better experience
      </Text>

      <Text style={styles.inputTitle}>User Name*</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="gray"
      />

      <Text style={styles.inputTitle}>Password*</Text>
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="gray"
        secureTextEntry={true}
      />

      <View style={styles.buttonContainer}>
        <SpecialButton buttonText="Sign in" navi={navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFDFD',
  },
  logoContainer: {
    marginBottom: 60,
    alignItems: 'center',
  },
  logo: {
    height: 60,
    width: 60,
    resizeMode: 'contain',
    marginTop: height * 0.1,
  },
  autismText: {
    fontSize: height * 0.04,
    color: 'black',
    fontVariant: ['small-caps'],
  },
  launchpadText: {
    fontSize: height * 0.04,
    color: '#F59481',
    fontVariant: ['small-caps'],
  },
  titleText: {
    alignSelf: 'center',
  },
  input: {
    height: height * 0.06,
    width: width * 0.78,
    borderColor: 'white',
    borderWidth: 0.5,
    marginBottom: 20,
    padding: 10,
    color: 'gray',
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0,
    shadowRadius: 1.41,

    elevation: 1,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  inputTitle: {
    paddingLeft: 8,
    textAlign: 'justify',
    color: '#202020',
    fontSize: 14,
    fontFamily: 'Inter',
    fontWeight: '500',
    marginBottom: 8,
  },
  signInText: {
    padding: 8,
    color: '#2C2C2C',
    fontSize: 28,
    fontFamily: 'Inter',
    fontWeight: '700',
  },
  tagText: {
    color: '#2C2C2C',
    fontSize: 16,
    paddingLeft: 8,
    paddingRight: 8,
    marginBottom: 32,
    color: '#707070',
  },
});

export default LoginScreen;
