import React from 'react';
import {TouchableOpacity, Image, Text, StyleSheet} from 'react-native';

const CustomButton = ({
  onPress,
  disabled,
  label,
  labelColor = '#DE9181',
  imageSource,
  backgroundColor,
  borderColor,
  isBackArrow,
  BorderRadius,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.buttonContainer,
        {backgroundColor, borderColor, borderRadius: BorderRadius},
      ]}>
      {isBackArrow && imageSource && (
        <Image source={imageSource} style={styles.backButtonImage} />
      )}
      <Text style={[styles.buttonText, {color: labelColor}]}>{label}</Text>
      {!isBackArrow && imageSource && (
        <Image source={imageSource} style={styles.buttonImage} />
      )}
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
    height: 22,
    width: 15,
    resizeMode: 'contain',
    marginLeft: 5,
    marginTop: 5,
  },
  backButtonImage: {
    height: 22,
    width: 15,
    resizeMode: 'contain',
    marginRight: 5,
    marginTop: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CustomButton;
