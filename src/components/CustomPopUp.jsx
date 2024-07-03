import React from 'react';
import {View, Text, Modal, StyleSheet, Image, Linking} from 'react-native';
import CustomButton from './CustomButton';

const CustomPopup = ({
  visible,
  label,
  message,
  onClose,
  imageCheck,
  urlcheck,
}) => {
  const pathStop = '../assets/images/stopPic.png';
  const pathSubmmited = '../assets/images/tickLogo.png';
  const urlAQ = 'https://autismhampshire.org.uk/assets/uploads/AQ10-Child.pdf';
  const urlADHD =
    'https://www.hbinetwork.com/wp-content/uploads/2018/06/ADHD_Screening_Tool.pdf';

  return (
    <Modal
      testID="modal"
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.container}>
        <View style={styles.popup}>
          <Text style={styles.heading}>{label}</Text>
          {imageCheck === '1' ? (
            <Image
              source={require(pathStop)}
              style={{height: 100, width: 100}}
            />
          ) : imageCheck === '2' ? (
            <Image
              source={require(pathSubmmited)}
              style={{height: 100, width: 100}}
            />
          ) : null}
          <Text style={styles.text}>{message}</Text>
          {/* <Button title="Close" onPress={onClose} /> */}

          {urlcheck === '1' ? (
            <Text
              style={styles.url}
              onPress={() => {
                Linking.openURL(urlAQ);
              }}>
              {' '}
              Go to AQ_10
            </Text>
          ) : urlcheck === '2' ? (
            <Text
              style={styles.url}
              onPress={() => {
                Linking.openURL(urlADHD);
              }}>
              {' '}
              Goto ADHD
            </Text>
          ) : null}
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
  url: {
    color: 'blue',
    fontSize: 19,
    margin: 10,
    textDecorationLine: 'underline',
  },
});

export default CustomPopup;
