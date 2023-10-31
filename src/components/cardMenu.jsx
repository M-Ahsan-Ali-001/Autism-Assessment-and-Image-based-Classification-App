import React, {State} from 'react';
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
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import ImageButtonDashboard from './ImageDashboard';
import {
  GestureHandlerRootView,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';

function CardMenu(props) {
  const prtMessgae = () => {
    console.log('test');
    props.nav.navigate("AQ_10")
  };
  return (
    <View style={styles.cardStyle}>
      <GestureHandlerRootView style={{ flex: 1}}>
    
     <TouchableOpacity onPress={prtMessgae}>

     <ImageButtonDashboard nmb={props.imgNmb} styl={props.cardDesign} />

<Text style={styles.textStyle}>{props.textCard}</Text>
<Text style={styles.textStyle1}>{props.textCard2}</Text>
     </TouchableOpacity>
        </GestureHandlerRootView>
    </View>
  );
}

const styles = StyleSheet.create({
  cardStyle: {
    margin: 10,
    marginTop: '7%',
  },
  textStyle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textStyle1: {
    fontSize: 12,
    textAlign: 'center',

    fontWeight: 'bold',
  },
 

});

export default CardMenu;
