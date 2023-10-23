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
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import ImageButtonDashboard from './ImageDashboard';

function CardMenu(props) {
  return (
    <View  style={styles.cardStyle}>
        <ImageButtonDashboard nmb={props.imgNmb} styl={props.cardDesign} />

      <Text style={styles.textStyle}>{props.textCard}</Text>
      <Text style={styles.textStyle1}>{props.textCard2}</Text>
    </View>
  );
}



const styles = StyleSheet.create({
cardStyle:{
    margin:10,
marginTop:'7%'

},
textStyle:{

    fontSize:18,
    fontWeight:'bold'
},textStyle1:{

    fontSize:12,
    textAlign:'center',
    
    fontWeight:'bold'
}

})

export default CardMenu;
