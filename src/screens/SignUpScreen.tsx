import React, {useCallback, useState} from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  Dimensions,
  Alert,
  TouchableOpacity,
} from 'react-native';
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInUp,
  FadeOut,
} from 'react-native-reanimated';
import AuthenticationButton from '../components/AuthenticationButton';

import Realm from 'realm';
import {useApp} from '@realm/react';

const {height, width} = Dimensions.get('window');

const SignUpScreen = ({navigation}: any) => {
  const realmApp = useApp();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const SignUp = useCallback(
    async (newEmail: string, newPassword: string) => {
      try {
        // Attempt to register the user
        const newUser = await realmApp.emailPasswordAuth.registerUser({
          email: newEmail,
          password: newPassword,
        });

        // Optional: You may want to perform additional actions here, such as sending a confirmation email.
        console.log('Successfully registered and signed in user!', newUser);

        navigation.navigate('Signin');
      } catch (signUpError: any) {
        console.error('Error signing up:', signUpError);

        Alert.alert('ERROR', signUpError.message);
      }
    },
    [realmApp],
  );

  const goToSignIn = () => {
    navigation.navigate('Signin');
  };

  const logo = require('../assets/images/Logo.png');

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Animated.Image
          style={styles.logo as any}
          entering={FadeInDown.delay(150).duration(900)}
          source={logo}
        />
        <Animated.Text
          entering={FadeInUp.delay(200).duration(900)}
          style={styles.titleText}>
          <Text style={styles.autismText}>Autism</Text>{' '}
          <Text style={styles.launchpadText}>Launchpad</Text>
        </Animated.Text>
      </View>
      <Text style={styles.signInText}>Sign Up!</Text>
      <Text style={styles.tagText}>
        Lets continue with us for a better experience
      </Text>
      {/* <Text style={styles.inputTitle}>User Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your Username"
        placeholderTextColor="gray"
      /> */}
      <Text style={styles.inputTitle}>Email*</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your Email"
        placeholderTextColor="gray"
        textContentType="emailAddress"
        onChangeText={setUsername}
        autoCapitalize="none"
        value={username}
      />
      <Text style={styles.inputTitle}>Password*</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your Password"
        placeholderTextColor="gray"
        secureTextEntry={true}
        onChangeText={setPassword}
        value={password}
      />
      <View style={styles.buttonContainer}>
        <AuthenticationButton
          buttonText="Sign up"
          onPress={() => SignUp(username, password)}
        />
      </View>
      <TouchableOpacity onPress={goToSignIn}>
        <Text style={styles.signUpText}>
          <Text style={{color: 'gray'}}>Already have an account?</Text>{' '}
          <Text style={{color: '#F59481'}}>Sign In</Text>
        </Text>
      </TouchableOpacity>
      <Animated.View
        style={styles.termsAndServicesContainer}
        entering={FadeIn.delay(200).duration(900)}>
        <Text style={styles.termsAndServices}>
          <Text style={{color: 'gray'}}>By continuing, you agree to</Text>{' '}
          <Text style={{color: '#F59481'}}>Terms and conditions</Text>
        </Text>
      </Animated.View>
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
    fontFamily: 'Rajdhani-Bold',
    fontSize: 24,
    textAlign: 'center',

    color: 'black',
  },
  launchpadText: {
    fontFamily: 'Rajdhani-Bold',
    fontSize: 24,
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

    // fontWeight: '500',
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
    fontFamily: 'Inter',
    marginTop: 16,
    textAlign: 'center',
    fontSize: 12,
  },
  termsAndServices: {
    marginTop: 16,
    textAlign: 'center',
    alignItems: 'center',
    fontFamily: 'Inter',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '500',
  },

  termsAndServicesContainer: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 16,
  },
});

export default SignUpScreen;
