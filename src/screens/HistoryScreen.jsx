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


function HistoryScreen(props){


    return(

<View style={styles.body}>

        
<Text style={styles.text}> History Area</Text>
</View>    )

}


const styles =StyleSheet.create({

text:{
    color:"black",

    fontSize:30
},

body:{

    margin:20
}

})

export default HistoryScreen;
