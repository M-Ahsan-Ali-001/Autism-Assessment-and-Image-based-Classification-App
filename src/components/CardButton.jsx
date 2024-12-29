import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

import QuestionMark from '../assets/images/QuestionMark';

const CardButton = ({
  name,
  action,
  imgpath,
  nav,
  navigation,
  seinsPop,
  insNO,
  seinsPopPG,
}) => {
  const images = {
    1: require('../assets/images/quizIcon.png'),
    2: require('../assets/images/scanner.png'),
  };

  function log() {
    console.log('LOGGING');
  }

  return (
    <View testID="cardButtons">
      <Text style={styles.sectionTitle}>{name}</Text>
      <TouchableOpacity
        onPress={() => log()}
        style={styles.help}
        testID="helpIcon">
        <QuestionMark
          style={styles.helpIcon}
          onPress={() => {
            seinsPop(true);
            seinsPopPG(insNO);
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate(nav, {navigation: navigation})}
        style={styles.card}>
        <View style={styles.cardContent}>
          <Image source={images[imgpath]} style={styles.cardImage} />
          <Text style={styles.cardText}>{action}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    marginLeft: 18,
    marginTop: 5,
    marginBottom: 5,
    fontSize: 20,
    color: '#0E161F',
    fontWeight: '600',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 21,
    width: 312,
    height: 116,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#F59595',
    elevation: 3,
    alignSelf: 'center',
  },
  cardContent: {
    alignItems: 'center',
  },
  cardImage: {
    height: 60,
    width: 50,
    marginRight: 10,
  },
  cardText: {
    fontFamily: 'Inter-Medium', // change to man-rope
    marginTop: 5,
    fontSize: 16,
    color: '#4F4A4A',
    // fontWeight: '500',
  },
  help: {
    position: 'absolute',
    right: 42,
    top: 48,
    zIndex: 1,
    // borderWidth: 2,
    padding: 10,
  },
});

export default CardButton;
