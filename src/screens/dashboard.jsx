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
import ImageButtonDashboard from '../components/ImageDashboard';
import CardMenu from '../components/cardMenu';

function Dashboard(props) {
  return (
    <View style={styles.fullPage}>
      <View style={styles.header}>
        <ImageButtonDashboard nmb={1} styl={styles.arrowImage} />
        <ImageButtonDashboard nmb={2} styl={styles.hamburgerImage} />
      </View>

      <View style={styles.textDiv}>
        <ImageButtonDashboard nmb={3} styl={styles.userImage} />
        <Text style={styles.greetText}> Welcome Back,User!</Text>
      </View>

      <View style={styles.cardMenu}>
        <ScrollView horizontal={true}>
          <CardMenu imgNmb={4} textCard={'AQ 10'} textCard2={'Questionnair'} cardDesign={styles.card1} />
          <CardMenu imgNmb={5} textCard={'ADHD'} textCard2={'Questionnair'} cardDesign={styles.card1} />
          <CardMenu imgNmb={6} textCard={'Scan'} textCard2={'Face'} cardDesign={styles.card1} />
        </ScrollView>
      </View>


      <View style={styles.GraphVisuals}>
        <Text>TODO: Add bar or pie graph</Text>


      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fullPage: {
    backgroundColor: 'white',
    flex: 1,
  },
  header: {
    flexDirection: 'row',

    justifyContent: 'space-between',
    padding: 15,
    marginTop: 30,
  },
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
  textDiv: {
    flexDirection: 'row',
    margin: 50,
    alignItems: 'center',
  },
  greetText: {
    fontSize: 22,
    fontStyle: 'italic',
    color: 'black',
  },

  userImage: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
    borderRadius: 100,
  },

  cardMenu: {
    backgroundColor: '#328B7B',
    flex: 0.25,
    margin: 9,
    borderRadius: 35,
    borderWidth: 1.5,
    borderColor: 'black',
    alignItems: 'center',
    
  },

  card1: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
    backgroundColor: 'white',
    borderRadius: 8,
  },
  GraphVisuals:{


    flex:0.5,
    backgroundColor:"#328B7B",
    height:300,
    width:300,
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
    borderRadius: 35,
    borderWidth: 1.5,
    borderColor: 'black',
    marginTop:20


    


  }
});

export default Dashboard;
