import React, {useCallback, useState,useEffect} from 'react';
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
import Animated, {FadeIn, FadeInDown, FadeInUp} from 'react-native-reanimated';
import AuthenticationButton from '../components/AuthenticationButton';

import Realm from 'realm';
import {useApp} from '@realm/react';
var SharedPreferences = require('react-native-shared-preferences');

const {height, width} = Dimensions.get('window');

const SignInScreen = ({navigation}: any) => {
  const realmApp = useApp();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  
  useEffect(() => {
  const check =()=>{

    let state =""

 

    SharedPreferences.getItem("loginState", function(value:string)
    {
      state=value
      console.log("abc--+"+value);
      
    if (value === "true"){

      navigation.navigate('Dashboard');
      navigation.reset({
        index: 0,
        routes: [{ name: 'Dashboard' }],
      });
    }
    });

  }
  check();


  },[])


  const login = useCallback(
    async (newEmail: string, newPassword: string) => {
      const credentials = Realm.Credentials.emailPassword(
        newEmail,
        newPassword,
      );

      try {
        // Attempt to sign in
        const user = await realmApp.logIn(credentials);
        console.log('Successfully logged in:', user.id);
        SharedPreferences.setItem("userid", user.id);
      
        SharedPreferences.setItem("userEmail", newEmail);
        SharedPreferences.setItem("loginState", "true");

        navigation.navigate('Dashboard');
        navigation.reset({
          index: 0,
          routes: [{ name: 'Dashboard' }],
        });
          } catch (signInError: any) {
        // If sign in fails, handle the error
        console.log('Sign In Error:', signInError);
        Alert.alert('ERROR', signInError.message);

        // if (signInError.statusCode === 4401) {
        //   // 4401 indicates that the user doesn't exist
        //   // Display an alert to prompt the user to sign up
        //   Alert.alert(
        //     'User Not Found',
        //     'The provided email does not exist. Please sign up.',
        //     [{text: 'Sign Up', onPress: () => navigation.navigate('Signup')}],
        //     {cancelable: false},
        //   );
        // } else {
        //   // Handle other errors (e.g., incorrect password)
        //   Alert.alert(
        //     'Sign In Failed',
        //     'Error signing in. Please check your credentials.',
        //     [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        //     {cancelable: false},
        //   );
        // }
      }
    },
    [realmApp],
  );

  const goToSignUpScreen = () => {
    navigation.navigate('Signup');
  };

  const logo = require('../assets/images/Logo.png');

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Animated.Image
          entering={FadeInDown.delay(150).duration(900)}
          source={logo}
          style={styles.logo}
        />
        <Animated.Text
          entering={FadeInUp.delay(200).duration(900)}
          style={styles.titleText}>
          <Text style={styles.autismText}>Autism</Text>{' '}
          <Text style={styles.launchpadText}>Launchpad</Text>
        </Animated.Text>
      </View>

      <Text style={styles.signInText}>Sign In!</Text>
      <Text style={styles.tagText}>
        Lets continue with us for a better experience
      </Text>

      <Text style={styles.inputTitle}>Email*</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
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
          buttonText="Sign In"
          onPress={() => login(username, password)}
        />
      </View>

      <TouchableOpacity onPress={goToSignUpScreen}>
        <Text style={styles.signUpText}>
          <Text style={{color: 'gray'}}>Don't have an account?</Text>{' '}
          <Text style={{color: '#F59481'}}>Sign up</Text>
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

    elevation: 2,
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
    marginTop: 16,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 16,
  },
});

export default SignInScreen;
