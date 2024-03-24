import React from 'react';
import {View, Text, Modal, Button, StyleSheet} from 'react-native';
import CustomButton from './CustomButton';

const CustomPopup = ({visible, label, message, onClose}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.container}>
        <View style={styles.popup}>
          <Text style={styles.heading}>{label}</Text>
          <Text style={styles.text}>{message}</Text>
          {/* <Button title="Close" onPress={onClose} /> */}
          <CustomButton
            style={styles.button}
            backgroundColor={'white'}
            label={'Close'}
            labelColor={'#DE9181'}
            BorderRadius={10}
            onPress={onClose}></CustomButton>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  popup: {
    backgroundColor: '#DE9181',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '85%',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 3,
  },
  heading: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#1E1B1B',
    // color: 'white',
  },
  text: {
    fontSize: 18,
    marginTop: 10,
    // fontWeight: '400',
    marginBottom: 25,
    textAlign: 'justify',
  },
});

export default CustomPopup;
