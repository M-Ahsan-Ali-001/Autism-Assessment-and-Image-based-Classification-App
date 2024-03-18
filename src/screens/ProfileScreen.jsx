import React, {useEffect, useState} from 'react';
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
import axios from 'axios';
import ImageButtonDashboard from '../components/ImageDashboard';
var SharedPreferences = require('react-native-shared-preferences');
function ProfileScreen(props) {
  const [email, SetEmail] = useState('tt@gmail.com');
  const [idd, SetID] = useState('');
  const [aq_10, SetAQ] = useState([]);
  const [adhd, SetAD] = useState([]);
  const [mode, SetModel] = useState([]);

  useEffect(() => {
    const FtData= async ()=>{

 ;
      SharedPreferences.getItem("userEmail", function(value){
        console.log("abc--+"+value);
        SetEmail(value)
      
      
      });


      SharedPreferences.getItem("userid",  async function(value){
        console.log("abc--+"+value);
           
        try {
          const response =  await axios.post('https://dashborad-autism.netlify.app/.netlify/functions/display_aq_10',
          {
            "id" : `${value}`
          });
          //setGet(response.data);
          console.log(response.data)
          SetAQ(response.data)
  
        } catch (error) {
         console.log(error)
        }
      
      
      })



      SharedPreferences.getItem("userid",  async function(value){
        console.log("abc--+"+value);
           
        try {
          const response = await axios.post('https://dashborad-autism.netlify.app/.netlify/functions/display_adhd',
          {
            "id" : `${value}`
          });
          //setGet(response.data);
          console.log(response.data)
          SetAD(response.data)
  
        } catch (error) {
         console.log(error)
        }
      
      
      })

      
      SharedPreferences.getItem("userid", async function(value){
        console.log("abc--+"+value);
           
        try {
          const response = await axios.post('https://dashborad-autism.netlify.app/.netlify/functions/display_model',
          {
            "id" : `${value}`
          });
          //setGet(response.data);
          console.log(response.data)
          SetModel(response.data)
  
        } catch (error) {
         console.log(error)
        }
      
      
      })



    }
    FtData();
  },[])

  return (
    <View style={styles.body}>
      <View style={styles.TopBox}>
        <ImageButtonDashboard nmb={3} styl={styles.userImage} />

        <View style={styles.mail}>
          <Text style={styles.tHead}>{email}</Text>
        </View>
      </View>
      <View style={styles.bottomBoxx}>

        <View style={styles.box1}>
          <Text style={styles.boxSt}>Autsim</Text>
          <Text style={styles.boxSt2}>Total Tests : {aq_10.length}</Text>

        </View>
        <View style={styles.box2}>
        <Text style={styles.boxSt}>Model</Text>
          <Text style={styles.boxSt2}>Total Tests : {mode.length} </Text>
        </View>
        <View style={styles.box3}>

        <Text style={styles.boxSt}>ADHD</Text>
          <Text style={styles.boxSt2}>Total Tests : {adhd.length}</Text>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'black',

    fontSize: 30,
  },

  body: {
    flex: 1,
  },
  TopBox: {
    flex: 0.3,

    backgroundColor: '#F59481',

    alignItems: 'center',
    justifyContent: 'center',
  },
  userImage: {
    height: 70,
    width: 70,
    resizeMode: 'contain',
    borderRadius: 50,

    // borderRadius: 100,
  },
  mail: {
    backgroundColor: '#874F44',
    borderRadius: 90,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 6,
  },
  tHead: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 16,
    marginRight: 16,
    marginTop: 3,
    marginBottom: 5,
    color:'white'
  },
  bottomBoxx:{
    flex: 0.7,
    justifyContent:'space-around',
    padding:25


  },
  box1:{

    flex:0.29,
    backgroundColor:"#488AAF",
    borderRadius: 21,
    alignItems: 'center',
    justifyContent: 'center',

  },
  box2:{

    flex:0.29,
    backgroundColor:"#6B3DCD",
    borderRadius: 21,
    alignItems: 'center',
    justifyContent: 'center',

  },
  box3:{

    flex:0.29,
    backgroundColor:"#A0EECC",
    borderRadius: 21,
    alignItems: 'center',
    justifyContent: 'center',

  },
  boxSt:{
    fontSize:38,
    fontWeight:"bold",
    color:'white',




  },

  boxSt2:{
    fontSize:16,
    fontWeight:"bold",
    color:'white',
    marginTop:15




  }
});

export default ProfileScreen;
