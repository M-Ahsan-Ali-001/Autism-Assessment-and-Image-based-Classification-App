import React, { useState, useEffect,useRef } from 'react';
import { LogBox } from 'react-native';
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
  Animated,
} from 'react-native';

import QuestionMark from '../assets/images/QuestionMark';
import InsPopup from '../components/Instructionspopup';

import { launchImageLibrary } from 'react-native-image-picker';
import axios from "axios";
var SharedPreferences = require('react-native-shared-preferences');
function ScanScreen({navigation}) {
  const [insPop,seinsPop] = useState(false)
  const [insPopPG,seinsPopPG] = useState(0)
  const a = React.useRef(false);
 const [st,Ust] = useState(true)
  const [selectedImage, setSelectedImage] = useState(null);
  let scanLineY = React.useRef(new Animated.Value(0)).current;
  const [lineShow, setline] = useState("none");
const [result,SetResult]=useState("");
const [probs,SetProbs]=useState("");
const [cache,SetCache]=useState(true);

const [id,Setid]=useState("");
  let scanLineAnimation;

  const startScanLineAnimation = () => {

    scanLineAnimation = Animated.sequence([
      Animated.timing(scanLineY, {
        toValue: 300,
        duration: 2000,
        useNativeDriver: false,
      }),
      Animated.timing(scanLineY, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: false,
      }),
    ]);

 if(a.current )
      {  
        scanLineAnimation.reset(() => {startScanLineAnimation()});
        scanLineAnimation.start(() => {startScanLineAnimation();
      
        });
      }
  else{


    
    scanLineAnimation.stop(() => {startScanLineAnimation();
      
    });
  }

  };
  
//   const stopScanLineAnimation = () => {
//     if (scanLineAnimation) {
//       scanLineAnimation.stop(() => stopScanLineAnimation());
//     }
//   };

    //192.168.100.212:3000/uploadfile/
    const webReq = async () => {
      console.log("asd");

      if (!selectedImage) {
        console.warn('No image selected');
        return;
      }
    
      try {
        const formData = new FormData();
        
        // Append the image file to the FormData
        formData.append('file', {
          uri: selectedImage,
          name: 'image.jpg',
          type: 'image/jpeg',
        });
    
        // Send the FormData in the request
        const config = {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }


        // const response = await axios.post("http://192.168.100.200:3000/uploadfile/",formData,config);

        const response = await axios.post("https://da045680-9472-4326-842a-22d289790e66-00-27lc5w6klpzyx.sisko.replit.dev/uploadfile/",formData,config);

    
        const rresult = await response.data;
         console.log('rr'+rresult);
         const lt= (rresult[0]).split("--")
         console.log('lt1'+lt[0]);
      
         console.log('lt2'+lt[1]);



         
       SharedPreferences.getItem("userid", function(value){
          console.log("abc--+"+value);
        Setid(value)
        });


           console.log("id--+"+id);
        const today = new Date();
        console.log("Date--"+today);


         SharedPreferences.getItem("userid", function(value){
        console.log("abc--+"+value);
        try {
          const response2 =  axios.post('https://dashborad-autism.netlify.app/.netlify/functions/model_ins',
          {
            "id" : `${value}`,
            "date":`${today}`,
            "score":`${lt[1]}`,
            "state":`${lt[0]}`
            
          });
          //setGet(response.data);
          console.log(response2.data)
   
      
          
        } catch (error) {
         console.log(error)
        } 
      });
    
    
         SetResult(lt[0])
         SetProbs(lt[1])      

        SetCache(true);
        a.current =false
        
        console.log("value of a : "+ a.current)
        setline("none");

      } catch (error) {
        console.log('Error sending image:', error);
        webReq();
      }
   
      
    };
    
    
    const callAnimation=   () => {

  
if(cache === true)   
{
      startScanLineAnimation();
      webReq();
      SetCache(false);
      a.current =false
    
}
else{
  Alert.alert("Already scanning")
}   
      
    };

  const handleImageLibrary = async () => {
    try {

      const response = await launchImageLibrary({ mediaType: 'photo' });

      if (response.didCancel) {
        console.log('User cancelled image picker');
        a.current =false
        setSelectedImage(null);
        
        setline("none")
       // st=1


        console.log(st)
      } else if (response.error) {
        console.error('ImagePicker Error: ', response.error);
      } else if (response.assets && response.assets.length > 0) {
      
        const selectedImageUri = response.assets[0].uri;
        setSelectedImage(selectedImageUri);
        console.log('Selected Image:', selectedImageUri);
        SetCache(true);
        SetProbs("")
        SetResult("")
        
        a.current =false
        setline("block")
       // st=0
      } else {
        console.warn('No image selected');
        a.current =false
        setline("none")

       // st=0
      }
    } catch (error) {
      console.error('Error launching image library: ', error);
    }
  };

  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);

  return (
    <View style={styles.mainbody}>
     
     <InsPopup insPop={insPop}   seinsPop={seinsPop} insPopPG={insPopPG}/>
      <View style={styles.upperbody}>
        <Image source={require("../assets/images/leftArrow.png")} />
        <Text style={styles.buttonArrow} onPress={()=>{navigation.navigate('Dashboard')}}>Back</Text>
        <QuestionMark style={styles.helpIcon}  onPress={()=>{seinsPop(true); seinsPopPG(('4'))}}/>
              </View>
  
    

      <View style={styles.midBody}>
        {selectedImage ? (
          <View>
            <View>
              <Animated.View
                style={[
                  styles.scanLine,
                  {

                    display:lineShow,

                    top: scanLineY,
                  },
                ]}
              ></Animated.View>
              <Image
                source={{ uri: `file://${selectedImage}` }}
                style={{
                  width: 300,
                  height: 300,
                  marginBottom: 20,
                  zIndex: 1,
                }}
                onError={(error) =>
                  console.error('Image loading error:', error.nativeEvent.error)
                }
              />
            </View>
            <Text style={{ color: 'white', marginBottom: 0 }}>
              {' '}
              Predicted Class:{result}
            </Text>
            <Text style={{ color: 'white', marginBottom: 0 }}> Probability:{probs}%</Text>
          </View>
        ) : (
          <Text style={{ color: 'white', marginBottom: 0 }}>
            {' '}
            no image selected
          </Text>
        )}
      </View>

      <View style={styles.lowerBody}>
        <View style={styles.buttonBottom}>
          <Text
            style={{ color: 'white', marginBottom: 0 }}
            onPress={handleImageLibrary}
          >
            Upload Image
          </Text>
        </View>

        <View style={styles.buttonBottom}>
          <Text style={{ color: 'white', marginBottom: 0 } } onPress={()=>{       a.current =true;setline("block");callAnimation();    }}>Scan Image</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainbody: {
    margin: 10,
    flex: 1,
  },
  upperbody: {
    flex: 0.2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  midBody: {
    flex: 0.6,
    height: 'auto',
    backgroundColor: '#F59481',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  lowerBody: {
    flex: 0.2,
    height: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  buttonArrow: {
    color: '#F59481',
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 5,
    padding: 2,
  },
  buttonBottom: {
    backgroundColor: '#F59481',
    color: 'white',
    height: 40,
    width: 130,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  scanLine: {
    backgroundColor: '#39F863',
    position: 'relative',
    height: 3,
    zIndex: 2,

  },
  helpIcon:{

 left:'160%'
  }

});

export default ScanScreen;