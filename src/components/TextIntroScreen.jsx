import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function TextIntroScreen(prop) {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={styles.introTitle}>{prop.tFooter}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  introTitle: {
    width: 192,
    fontFamily: 'Rajdhani-Bold',
    fontSize: 25,
    textAlign: 'center',
    color: '#4F4A4A',
  },
});
export default TextIntroScreen;
