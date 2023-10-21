import React, { State } from "react";
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

import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';
import { RadioButton } from 'react-native-paper';
import SvgComponent from "../components/SvgComponent";
import SvgComponent1 from "../components/SvgComponent1";


function IntroScreen({navigation}) {

  const [textFooter, changeTextFooter] = React.useState('An App for Early intervetion of ASD')
  const [shapeCond, setShapeCond] = React.useState(false);
  const svg = <SvgComponent1 />
  const svg1 = <SvgComponent />

  function shape() {
    return (

      svg1
    )
  }


  function shape1() {
    return (

      svg
    )
  }

  const handleGesture = (evt) => {
    const { nativeEvent } = evt;

    if (nativeEvent.velocityX > 0) {
      console.log('Swipe right');

      changeTextFooter("this is asd detection app!")
      setShapeCond(true)
    }


    if (nativeEvent.velocityX < 0) {
      console.log('Swipe rleft');
      navigation.navigate('Details')

      //changeTextFooter("changed text")
      
    }
  };

  return (
    <GestureHandlerRootView style={{ backgroundColor: 'white', flex: 1,height:'100%',width:'100%' }}>
      <PanGestureHandler onGestureEvent={handleGesture}>
        <View style={{ backgroundColor: 'white', flex: 1 }}>
          <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 90 }}>
            <Image source={require('../assets/Logo.png')} style={{ height: 250, width: 250, resizeMode: 'contain' }}></Image>
          </View>


          <View style={{ flex: 1, justifyContent: 'flex-end' }}>
            <View>
              {/* {shapeCond ?(<SvgComponent1/>): (<SvgComponent/>)} */}
              {/* <SvgComponent/> */}
              <Image source={require('../assets/test1.png')}
              style={{
                width:'100%'
                ,height:'90%'
              }
            
            
            }></Image>
            

              <View style={{
                 position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 30,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <Text style={{ fontWeight: '900', fontSize: 18, color: 'black' }}>{textFooter}</Text>
              </View>

              <View

                style={{
                  position: 'absolute',
                  top: 150,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row'
                }}
              >

                <RadioButton status="checked"></RadioButton>
                <RadioButton></RadioButton>
                <RadioButton></RadioButton>
              </View>



            </View>
          </View>


        </View>

      </PanGestureHandler>

    </GestureHandlerRootView>




  )
}

export default IntroScreen;