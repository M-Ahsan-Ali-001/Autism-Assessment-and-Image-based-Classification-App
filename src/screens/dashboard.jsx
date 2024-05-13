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
  TouchableOpacity,
} from 'react-native';



var SharedPreferences = require('react-native-shared-preferences');

import {Shadow} from 'react-native-shadow-2';
import ImageButtonDashboard from '../components/ImageDashboard';
import CardMenu from '../components/cardMenu';
import HomeSVG from '../assets/images/homeSVG';
import Animated, {FadeInLeft, FadeInRight} from 'react-native-reanimated';
import ProfileScreen from './ProfileScreen';
import HistoryScreen from './HistoryScreen';
import axios from 'axios';

function Dashboard({navigation}) {

  const [buttSelector, setbuttSelector] = useState(1);
  const [selectScreen, setScreen] = useState(1);
  const Q1='../assets/images/Q1.png'
  const Q2='../assets/images/Q2.png'
  const Scan='../assets/images/faceScan.png'
  const Exc='../assets/images/excla.png'
 
 function Boxes (props){
    return(
      
    <View>
    <Text style={styles.cardMenuTitle}>{props.name}</Text>
 <View style={styles.boxHolder}>
 
<TouchableOpacity onPress={()=>{console.log('Clicked')}}>

  
<View style={styles.smallBox} >

<Image source={require( Exc)} style={{ height:30,width:30}}/>


<Text style={styles.textinBox} >Instructions</Text>
</View>
</TouchableOpacity>
<TouchableOpacity onPress={()=>{navigation.navigate(props.nav)}}>
<View style={styles.smallBox}>
  {props.imgpath ===1 ?(
      <Image source={require(Q1)} style={{ height:50,width:50}}/>
      
):props.imgpath ===2?(
  <Image source={require(Q2)} style={{ height:50,width:50}}/>
      
):props.imgpath ===3?(
  <Image source={require(Scan)} style={{ height:50,width:50}}/>
      
):null}

<Text style={styles.textinBox} >{props.name2}</Text>

</View>
</TouchableOpacity>
 </View>


</View>
    )

  }


  return (
    <View style={styles.fullPage}>

      <View style={styles.upperBody}>
        {selectScreen === 1 ? (
          <View>
            <View style={styles.greetTextContainer}>
              <Text>
                <Text style={styles.greetText}>Hey, </Text>
                <Text style={[styles.greetText, styles.pinkColor]}>Aizen</Text>
              </Text>
              <Text style={styles.greetText}>Welcome Back!</Text>
              <ImageButtonDashboard nmb={3} styl={styles.userImage} />
            </View>
          <Boxes name='Autism' name2="Quiz" imgpath={1} nav='AQ_10'/>
          <Boxes name='ADHD' name2="Quiz" imgpath={2} nav='ADHD' />
          <Boxes name='AI Analysis' name2="Scanner" imgpath={3} nav='Scan'/>
        
        

          </View>
        ) : selectScreen === 2 ? (
          <ProfileScreen />
        ) : selectScreen === 3 ? (
          <HistoryScreen />
        ) : null}
      </View>
      <View style={styles.bottomNAV}>
        {/* Bottom Navigation Area  */}

        <Shadow distance={5} offset={[0, 2]}>
          <View style={styles.bottomNAVO}>
            <HomeSVG
              fill={buttSelector === 1 ? '#FDFDFD' : '#6B6E89'}
              onPress={() => {
                setbuttSelector(1);
                setScreen(1);
              }}
              bColor={buttSelector === 1 ? '#F59481' : 'white'}
              svgN={1}
              margin={8}
              padding={0}
              marginS={9}
              paddingS={0}
              h={40}
              w={28}
            />
            <HomeSVG
              fill={buttSelector === 2 ? '#FDFDFD' : '#6B6E89'}
              onPress={() => {
                setbuttSelector(2);
                setScreen(2);
              }}
              bColor={buttSelector === 2 ? '#F59481' : 'white'}
              svgN={2}
              margin={8}
              padding={0}
              marginS={9}
              paddingS={0}
              h={40}
              w={28}
            />
            <HomeSVG
              fill={buttSelector === 3 ? '#FDFDFD' : '#6B6E89'}
              onPress={() => {
                setbuttSelector(3);
                setScreen(3);
              }}
              bColor={buttSelector === 3 ? '#F59481' : 'white'}
              svgN={3}
              margin={8}
              padding={0}
              marginS={9}
              paddingS={0}
              h={40}
              w={28}
            />
            <HomeSVG
              fill={buttSelector === 4 ? '#FDFDFD' : '#6B6E89'}
              onPress={() => {
                setbuttSelector(4);
                SharedPreferences.setItem('loginState', 'false');

                navigation.navigate('Signin');
                navigation.reset({
                  index: 0,
                  routes: [{name: 'Signin'}],
                });
              }}
              bColor={buttSelector === 4 ? '#F59481' : 'white'}
              svgN={4}
              margin={8}
              padding={0}
              marginS={9}
              paddingS={0}
              h={40}
              w={28}
            />
          </View>
        </Shadow>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pinkColor: {
    color: '#F59481',
  },
  textinBox:{
    fontSize:16,
    color:'black',
    fontWeight:'800',
    marginTop:10

  }
,
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
    marginLeft: 18,
    marginBottom: 8,
    fontWeight:'900',
    fontSize: 18,
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
  boxHolder:{

flexDirection:'row',
justifyContent:'space-around',
padding:2

  },
  smallBox:{


    height:130,
 

    width:130,
    backgroundColor:'#DCDCDC',
    borderRadius:15,
    alignItems:'center',
    justifyContent:'center'
  },

  card1: {
    height: 20,
    width: 18,
    resizeMode: 'cover',
    // alignSelf: 'center',
  },

  History_Area: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 25,
    marginTop: 70,
  },
  buttonGraph: {
    position: 'relative',
    backgroundColor: '#F59481',
    height: 30,
    width: 80,
    borderRadius: 30,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  GlistBut: {
    color: 'black',
    margin: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    zIndex: -1,
  },

  graphCont: {
    zIndex: -2,
    position: 'absolute',
    top: 130,

    left: '9%',
  },
  graph: {
    borderRadius: 20,
    zIndex: 1,
    position: 'relative',
  },
  upperBody: {
    flex: 0.9,
    height: '100%',
  },
  bottomNAV: {
    flex: 0.1,

    height: 50,
    width: 300,
    borderRadius: 300,
    marginTop: 0,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignSelf: 'center',

    alignItems: 'flex-end',
  },

  bottomNAVO: {
    height: 60,
    width: 300,
    borderRadius: 300,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
