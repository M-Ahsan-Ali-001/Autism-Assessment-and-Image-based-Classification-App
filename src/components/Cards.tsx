import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Cards() {
  return (
    <View style={[styles.card, styles.background]}>
      <Text style={styles.headingText}>Card Title</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  primaryColor: {
    backgroundColor: '#1a6864',
  },

  headingText: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },

  background: {
    backgroundColor: 'red',
  },

  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 5,
    margin: 8,
  },
});
