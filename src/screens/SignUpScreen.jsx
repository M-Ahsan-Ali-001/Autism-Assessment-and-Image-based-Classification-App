import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  Dimensions,
} from 'react-native';
import {Button} from 'react-native-paper';

const {height} = Dimensions.get('window');

export default function SignUpScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/Logo.png')}
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
        placeholder="Email"
        placeholderTextColor="#ffffff"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#ffffff"
        secureTextEntry={true}
      />
      <Text style={{color: 'white', marginTop: 10}}>
        Already have an account?
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a6864',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    flexGrow: 0.4,
    height: 150,
    width: 150,
    resizeMode: 'contain',
    // borderWidth: 3,
    // borderColor: 'white',
    marginTop: height * 0.1,
  },
  title: {
    fontSize: 40,
    color: 'white',
    fontVariant: ['small-caps'],
    fontFamily: 'EBGaramond-VariableFont_wght',
  },
  input: {
    height: '0',
    width: '80%',
    borderColor: 'white',
    borderWidth: 0.5,
    marginTop: 10,
    paddingLeft: 10,
    color: 'white',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
});
