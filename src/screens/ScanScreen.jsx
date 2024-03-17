import React, { useState, useEffect,useRef } from 'react';
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

import { launchImageLibrary } from 'react-native-image-picker';
import { flags } from 'realm';

function ScanScreen() {
 
 const [a,Ua] = useState(true) // to  stop the animation
 const [st,Ust] = useState(true)
  const [selectedImage, setSelectedImage] = useState(null);
  let scanLineY = React.useRef(new Animated.Value(50)).current;
  const [lineShow, setline] = useState("none");
const [result,SetResult]=useState("");
const [probs,SetProbs]=useState("");
const [cache,SetCache]=useState(true);
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
  
 if(a)
      {  
   
        scanLineAnimation.start(() => {startScanLineAnimation();
      
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
        const response = await fetch("http://192.168.100.200:3000/uploadfile/", {
          method: 'POST',
          headers: {
            // No need to set 'Content-Type' for FormData, it will be set automatically
            // Add any additional headers if needed
            // 'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
          },
          body: formData,
        });
    
        const rresult = await response.json();
        console.log(rresult);
        const lt= (rresult[0]).split("--[[")
        const valuesArray = lt[1].split(" ");
        console.log("AA"+lt[1]);
        const prob1 = parseFloat(valuesArray[0])*100
        
        const prob2 = parseFloat(valuesArray[1])*100

        if(prob1>prob2){
          SetProbs(prob1)    

        }
        else{
          
          SetProbs(prob2) 
          }

        // Convert each substring to a float and filter out any non-numeric values
    //    const floatValues = valuesArray.map(value => parseFloat(value)).filter(value => !isNaN(value));
    
    
        SetResult(lt[0])
       //  SetProbs(floatValues)      

        SetCache(true);
        Ua(false)
        setline("none");

      } catch (error) {
        console.error('Error sending image:', error);
      }
    };
    
    
    const callAnimation=   () => {

  
if(cache === true)   
{
      startScanLineAnimation();
      webReq();
      SetCache(false);
    
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
        Ua(false)
        
        //setline("none")
       // st=1


        console.log(st)
      } else if (response.error) {
        console.error('ImagePicker Error: ', response.error);
      } else if (response.assets && response.assets.length > 0) {
        const selectedImageUri = response.assets[0].uri;
        setSelectedImage(selectedImageUri);
        console.log('Selected Image:', selectedImageUri);

        
        Ua(true)
        setline("block")
       // st=0
      } else {
        console.warn('No image selected');
        Ua(false)
        setline("none")

       // st=0
      }
    } catch (error) {
      console.error('Error launching image library: ', error);
    }
  };



  return (
    <View style={styles.mainbody}>
      <View style={styles.upperbody}>
        <Image source={require("../assets/images/leftArrow.png")} />
        <Text style={styles.buttonArrow}>Back</Text>
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
          <Text style={{ color: 'white', marginBottom: 0 } } onPress={()=>{ setline("block");callAnimation();    }}>Scan Image</Text>
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
});

export default ScanScreen;