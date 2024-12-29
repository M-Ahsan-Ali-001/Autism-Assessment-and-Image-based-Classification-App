import React from 'react';
import {StyleSheet, View} from 'react-native';
import {RadioButton} from 'react-native-paper';

function RadioButtonIntro(prop) {
  return (
    <View
      testID="radioButton"
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      }}>
      <RadioButton
        style={styles.shape}
        color="black"
        disabled={true}
        status={prop.nmb === 1 ? 'checked' : 'unchecked'}
      />
      <RadioButton
        color="black"
        disabled={true}
        status={prop.nmb === 2 ? 'checked' : 'unchecked'}></RadioButton>
      <RadioButton
        color="black"
        disabled={true}
        status={prop.nmb === 3 ? 'checked' : 'unchecked'}></RadioButton>
    </View>
  );
}

const styles = StyleSheet.create({
  shape: {},
});

export default RadioButtonIntro;
