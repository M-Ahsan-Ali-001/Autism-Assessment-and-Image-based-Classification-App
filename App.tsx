/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Image,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { startMapper } from 'react-native-reanimated';
import Svg, { Path } from 'react-native-svg'
import SvgComponent from './src/components/SvgComponent';


type SectionProps = PropsWithChildren<{
  title: string;
}>;






function App(): JSX.Element {





  return (

    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ marginTop: 90 }}></View>
      <View style={{ flex:1 , justifyContent:'center',alignItems:'center'}}>

        <Image source={require('./src/assets/Logo.png')}   style={{width: 250, height: 250 , resizeMode:'contain'}}  ></Image>



      </View>




      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
    <SvgComponent/>
        <View style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        ><Text style={style.textBottom}> SUiiiiiiiiiiiiiiiiii </Text></View>


      </View>






    </View>

  );
}


const style = StyleSheet.create({

  textBottom: {
    fontSize: 25,
    color: 'white'
    , fontWeight: 'bold'



  }



})


export default App;
