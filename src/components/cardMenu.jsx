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
  TouchableWithoutFeedback,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import ImageButtonDashboard from './ImageDashboard';
// import {
//   GestureHandlerRootView,
//   TouchableWithoutFeedback,
// } from 'react-native-gesture-handler';

function CardMenu(props) {
  const [isPressed, setIsPressed] = useState(false);

  const onPressInHandler = () => {
    props.onPress();
    setIsPressed(true);
  };

  const onPressOutHandler = () => {
    // props.onPress();
    setIsPressed(false);
  };

  const onPressHandler = () => {
    if (props.nvb === 1) props.nav.navigate('AQ_10');
    else if (props.nvb === 2) props.nav.navigate('ADHD');
    else if (props.nvb === 3) props.nav.navigate('Scan');
  };

  return (
    <View style={styles.cardStyle}>
      <TouchableWithoutFeedback
        onPressIn={onPressInHandler}
        onPressOut={onPressOutHandler}
        onPress={onPressHandler}>
        <View
          style={[
            styles.cardInner,
            {backgroundColor: isPressed ? '#F59481' : '#F2F2F2'},
          ]}>
          <ImageButtonDashboard nmb={props.imgNmb} styl={props.imgIcon} />
          <Text style={styles.textStyle}>{props.textCard}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  cardInner: {
    width: 100,
    height: 36,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 10,
    // backgroundColor: '#F2F2F2',
    borderRadius: 8,
  },
  textStyle: {
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: '600',
    fontStyle: 'normal',
    color: '#0E161F',
  },
  indicatorLeft: {
    width: 10,
    height: 85,
    backgroundColor: '#F59481',
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
});

export default CardMenu;
