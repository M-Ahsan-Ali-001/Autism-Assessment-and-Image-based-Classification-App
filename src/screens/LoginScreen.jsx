import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Animated, FadeInDown} from 'react-native-reanimated';
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
        <Animated.Image source={logo} style={styles.logo} 
          entering={FadeInDown.delay(150).duration(600)}
        
        />
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
        placeholder="Enter your Username"
        placeholderTextColor="gray"
      />

      <Text style={styles.inputTitle}>Password*</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your Password"
        placeholderTextColor="gray"
        secureTextEntry={true}
      />

      <View style={styles.buttonContainer}>
        <SpecialButton buttonText="Sign in" navi={navigation} />
      </View>

      <TouchableOpacity onPress={handleSignUpPress}>
        <Text style={styles.signUpText}>
          <Text style={{color: 'gray'}}>Don't have an account?</Text>{' '}
          <Text style={{color: '#F59481'}}>Sign up</Text>
        </Text>
      </TouchableOpacity>

      <View style={styles.termsAndServicesContainer}>
        <Text style={styles.termsAndServices}>
          <Text style={{color: 'gray'}}>By continuing, you agree to</Text>{' '}
          <Text style={{color: '#F59481'}}>Terms and conditions</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#fdfdfd',
  },
  logoContainer: {
    marginBottom: 60,
    alignItems: 'center',
  },
  logo: {
    height: 60,
    width: 60,
    resizeMode: 'contain',
    marginTop: height * 0.04,
    marginBottom: height * 0.01, // equal to 8
  },
  autismText: {
    fontFamily: 'Rajdhani',
    fontSize: 24,
    fontWeight: 'bold',

    textAlign: 'center',

    color: 'black',
  },
  launchpadText: {
    fontFamily: 'Rajdhani',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#F59481',
  },
  titleText: {
    alignSelf: 'center',
  },
  input: {
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 12,
    color: '#202020',

    marginTop: 8,
    marginBottom: 20,
    marginLeft: 25,

    textAlign: 'justify',
    paddingLeft: 16,

    width: width * 0.85,
    height: 44,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 50,
    elevation: 1,
  },

  buttonContainer: {
    alignItems: 'center',
    marginTop: 0,
  },
  inputTitle: {
    marginLeft: 25,
    marginBottom: 8,

    textAlign: 'justify',
    color: '#202020',
    fontSize: 14,
    fontFamily: 'Inter',
    fontWeight: '500',
  },
  signInText: {
    fontFamily: 'Inter',
    fontSize: 28,
    fontWeight: '700',
    fontStyle: 'normal',
    color: '#2C2C2C',
    marginTop: 8,
    marginBottom: 2,
    marginLeft: 25,
  },
  tagText: {
    fontFamily: 'Inter',
    fontSize: 11,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 11,
    color: '#707070',

    marginTop: 2,
    marginBottom: 32,
    marginLeft: 25,
  },
  signUpText: {
    marginTop: 16,
    textAlign: 'center',
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.5)',
  },
  termsAndServices: {
    marginTop: 16,
    textAlign: 'center',
    alignItems: 'center',
    color: 'rgba(0, 0, 0, 0.5)',
    fontFamily: 'Inter',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '500',
  },

  termsAndServicesContainer: {
    marginTop: 16,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 16,
  },
});

export default LoginScreen;
