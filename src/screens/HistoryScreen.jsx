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
import QuestionMark from '../assets/images/QuestionMark';
import InsPopup from '../components/Instructionspopup';
var SharedPreferences = require('react-native-shared-preferences');
function HistoryScreen(props) {
  const [aq_10, SetAQ] = useState([]);
  const [adhd, SetAD] = useState([]);
  const [mode, SetModel] = useState([]);
  const [insPop,seinsPop] = useState(false)
  const [insPopPG,seinsPopPG] = useState(0)

  let a1 = '';
  let a2 = '';
  let a3 = '';

  useEffect(() => {
    const FtData = async () => {
      SharedPreferences.getItem('userEmail', function (value) {
        console.log('abc--+' + value);
      });

      SharedPreferences.getItem('userid', async function (value) {
        console.log('abc--+' + value);

        try {
          const response = await axios.post(
            'https://dashborad-autism.netlify.app/.netlify/functions/display_aq_10',
            {
              id: `${value}`,
            },
          );
          //setGet(response.data);
          console.log(response.data);
          SetAQ(response.data);

          console.log('aa====' + a1);
        } catch (error) {
          console.log(error);
        }
      });

      SharedPreferences.getItem('userid', async function (value) {
        console.log('abc--+' + value);

        try {
          const response = await axios.post(
            'https://dashborad-autism.netlify.app/.netlify/functions/display_adhd',
            {
              id: `${value}`,
            },
          );
          //setGet(response.data);
          console.log(response.data);
          SetAD(response.data);
          // a2=JSON.parse(adhd)
        } catch (error) {
          console.log(error);
        }
      });

      SharedPreferences.getItem('userid', async function (value) {
        console.log('abc--+' + value);

        try {
          const response = await axios.post(
            'https://dashborad-autism.netlify.app/.netlify/functions/display_model',
            {
              id: `${value}`,
            },
          );
          //setGet(response.data);
          console.log(response.data);
          SetModel(response.data);
          // a3=JSON.parse(mode)
        } catch (error) {
          console.log(error);
        }
      });
    };
    FtData();
  }, []);
  const extractDate = fullDate => {
    const dateObj = new Date(fullDate);
    return dateObj.toString().substring(4, 15); // Extracting "Sun Mar 17 2024"
  };
  return (
    <View style={styles.body}>
          <InsPopup insPop={insPop}   seinsPop={seinsPop} insPopPG={insPopPG}/>
         <QuestionMark  onPress={()=>{seinsPop(true); seinsPopPG(('3'))}}/>
      {(aq_10.length === 0) & (mode.length === 0) & (adhd.length === 0) ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: 'black'}}>No Data to Show !</Text>
        </View>
      ) : (
        <ScrollView>
          {mode.length !== 0 ? (
            <View>
              {mode.map((item, index) => (
                <View key={index} style={styles.box2}>
                  <View style={styles.ver}>
                    <Text style={styles.textMain}>Model</Text>

                    <Text style={styles.text}> {extractDate(item.date)}</Text>
                  </View>

                  <View style={styles.ver}>
                    <Text style={styles.text}>Score: {item.score}%</Text>
                    <Text style={styles.text}>Class: {item.state}</Text>
                  </View>
                </View>
              ))}
            </View>
          ) : null}

          {aq_10.length !== 0 ? (
            <View>
              {aq_10.map((item, index) => (
                <View key={index} style={styles.box1}>
                  <View style={styles.ver}>
                    <Text style={styles.textMain}>Autism</Text>

                    <Text style={styles.text}> {extractDate(item.date)}</Text>
                  </View>

                  <View style={styles.ver}>
                    <Text style={styles.text}>Score: {item.score}</Text>
                    <Text style={styles.text}>State: {item.state}</Text>
                  </View>
                </View>
              ))}
            </View>
          ) : null}

          {adhd.length !== 0 ? (
            <View>
              {adhd.map((item, index) => (
                <View key={index} style={styles.box3}>
                  <View style={styles.ver}>
                    <Text style={styles.textMain}>ADHD</Text>

                    <Text style={styles.text}> {extractDate(item.date)}</Text>
                  </View>

                  <View style={styles.ver}>
                    <Text style={styles.text}>Score: {item.score}</Text>
                    <Text style={styles.text}>State: {item.state}</Text>
                  </View>
                </View>
              ))}
            </View>
          ) : null}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'white',

    fontSize: 16,
    marginTop: 22,
  },

  textMain: {
    color: 'white',

    fontSize: 40,
    fontWeight: 'bold',
  },
  ver: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  body: {
    flex: 1,

    margin: 20,
  },
  box1: {
    backgroundColor: '#488AAF',
    marginTop: 50,
    padding: 20,
    borderRadius: 20,
  },
  box2: {
    backgroundColor: '#6B3DCD',
    marginTop: 50,
    padding: 20,
    borderRadius: 20,
  },
  box3: {
    backgroundColor: '#a0EBCC',
    marginTop: 50,
    padding: 20,
    borderRadius: 25,
  },
});

export default HistoryScreen;
