import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Image,
  Text,
  useColorScheme,
  View,
  Alert,
} from 'react-native';

import ImageButtonDashboard from '../components/ImageDashboard';
import CardMenu from '../components/cardMenu';

import Animated, {FadeInLeft, FadeInRight} from 'react-native-reanimated';

function Dashboard({navigation}) {
  const [pressedCard, setPressedCard] = useState(null);

  const handleCardPress = cardNumber => {
    setPressedCard(cardNumber);
  };

  return (
    <View style={styles.fullPage}>
      {/* <View style={styles.header}>
        <GestureHandlerRootView>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Signin');
              console.log('back');
            }}>
            <ImageButtonDashboard nmb={1} styl={styles.arrowImage} />
          </TouchableOpacity>
        </GestureHandlerRootView>
      </View> */}

      <View style={styles.greetTextContainer}>
        <Text>
          <Text style={styles.greetText}>Hey, </Text>
          <Text style={[styles.greetText, styles.pinkColor]}>Aizen</Text>
        </Text>
        <Text style={styles.greetText}>Welcome Back!</Text>
        <ImageButtonDashboard nmb={3} styl={styles.userImage} />
      </View>

      <Text style={styles.cardMenuTitle}>Services</Text>
      <View style={styles.cardMenu}>
        <Animated.View
          entering={FadeInLeft.delay(150).duration(900)}
          style={styles.indicatorLeft(pressedCard === 4 || pressedCard === 5)}
        />
        <CardMenu
          imgNmb={4}
          textCard={'AQ 10'}
          nav={navigation}
          imgIcon={styles.card1}
          onPress={() => handleCardPress(4)}
        />
        <CardMenu
          imgNmb={5}
          textCard={'ADHD'}
          imgIcon={styles.card1}
          onPress={() => handleCardPress(5)}
        />
        <CardMenu
          imgNmb={6}
          textCard={'Scan'}
          imgIcon={styles.card1}
          onPress={() => handleCardPress(6)}
        />
        <Animated.View
          entering={FadeInRight.delay(150).duration(900)}
          style={styles.indicatorRight(pressedCard === 6 || pressedCard === 5)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pinkColor: {
    color: '#F59481',
  },

  fullPage: {
    backgroundColor: '#FDFDFD',
    flex: 1,
  },
  // header: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   padding: 15,
  //   marginTop: 30,
  // },
  arrowImage: {
    height: 30,
    width: 50,
    resizeMode: 'contain',
  },

  hamburgerImage: {
    height: 30,
    width: 50,
    resizeMode: 'contain',
  },
  greetTextContainer: {
    // flexDirection: 'row',
    margin: 50,
    alignItems: 'Justify',
  },
  greetText: {
    fontSize: 22,
    fontStyle: 'italic',
    color: 'black',
  },

  userImage: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
    // borderRadius: 100,
    alignSelf: 'flex-end',
    marginTop: -50,
  },

  cardMenuTitle: {
    // marginHorizontal: 14,
    marginLeft: 30,
    marginBottom: 8,
    fontSize: 22,
    // fontStyle: 'italic',
    color: 'black',
    textAlign: 'justify',
    justifyContent: 'flex-start',
    // marginBottom: 10,
  },

  cardMenu: {
    // marginHorizontal: 14,
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // borderWidth: 1,
  },

  card1: {
    height: 20,
    width: 18,
    resizeMode: 'cover',
    // alignSelf: 'center',
  },

  indicatorLeft: isSelected => ({
    width: 15,
    height: 85,
    backgroundColor: isSelected ? '#F59481' : '#F2F2F2',
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    marginTop: -40,
  }),

  indicatorRight: isSelected => ({
    width: 15,
    height: 85,
    backgroundColor: isSelected ? '#F59481' : '#F2F2F2',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    marginTop: -40,
  }),
});

export default Dashboard;
