import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

const CustomButton = ({ onPress, disabled, label, imageSource, backgroundColor, borderColor }) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled} style={[styles.buttonContainer, { backgroundColor, borderColor }]}>
      {imageSource && <Image source={imageSource} style={styles.buttonImage} />}
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    // borderRadius: 5,
    // borderWidth: 1,
  },
  buttonImage: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#DE9181',
  },
});

export default CustomButton;
