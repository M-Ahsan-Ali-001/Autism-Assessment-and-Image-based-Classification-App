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
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
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
  const [pressedCard, setPressedCard] = useState(null);
  const [graphButtonT, setGraphButtonT] = useState('AQ_10');
  const [listDisp, setListDisp] = useState('none');
  const [buttSelector, setbuttSelector] = useState(1);
  const [selectScreen, setScreen] = useState(1);
  const [Disindex, setDisindx] = useState(10);
  const [AQf, setAQf] = useState([]);
  const [adhd, setAdhd] = useState([]);
  const [Mod, setMod] = useState([]);
  const [aqLabel, setAqLabel] = useState([
    'Jan',
    'Feb',
    'March',
    'April',
    'May',
    'June',
  ]);
  const [aqScore, setAqScore] = useState([20, 45, 28, 80, 99, 43]);

  const [data1, setdata1] = useState({
    labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
    legend: [graphButtonT + ' Dummy Data'], // optional
  });
  const extractDate = fullDate => {
    const dateObj = new Date(fullDate);
    return dateObj.toString().substring(4, 7); // Extracting "Sun Mar 17 2024"
  };

  useEffect(() => {
    const fetchAd = async () => {
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

          if (response.data.length > 0) {
            let aqLabel1 = [];
            let aqScore1 = [];
            let x = response.data;
            x.map(async (item, idx) => {
              console.log(extractDate(item.date) + item.score);
              aqLabel1.push(extractDate(item.date));
              aqScore1.push(parseFloat(item.score));
            });

            setAQf(response.data);

            setAqLabel(aqLabel1);
            setAqScore(aqScore1);
            console.log('aq---' + aqLabel1);
            console.log('aq' + aqScore1);

            setdata1({
              labels: aqLabel1,
              datasets: [
                {
                  data: aqScore1,
                  color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                  strokeWidth: 2, // optional
                },
              ],
              legend: [graphButtonT], // optional
            });
          }
        } catch (error) {
          console.log(error);
        }
      });
    };

    fetchAd();
  }, []);

  const fetctAq10 = name => {
    setdata1({
      labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          data: [20, 45, 28, 80, 99, 43],
          color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
          strokeWidth: 2, // optional
        },
      ],
      legend: [name + ' Dummy Data'], // optional
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

        if (response.data.length > 0) {
          let aqLabel1 = [];
          let aqScore1 = [];
          let x = response.data;
          x.map(async (item, idx) => {
            console.log(extractDate(item.date) + item.score);
            aqLabel1.push(extractDate(item.date));
            aqScore1.push(parseFloat(item.score));
          });

          setAQf(response.data);

          setAqLabel(aqLabel1);
          setAqScore(aqScore1);
          console.log('aq---' + aqLabel1);
          console.log('aq' + aqScore1);

          setdata1({
            labels: aqLabel1,
            datasets: [
              {
                data: aqScore1,
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                strokeWidth: 2, // optional
              },
            ],
            legend: [name], // optional
          });
        } else {
          setdata1({
            labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                strokeWidth: 2, // optional
              },
            ],
            legend: [name + ' Dummy Data'], // optional
          });
        }
      } catch (error) {
        console.log(error);
      }
    });
  };

  // adhd
  const fetctAdhd = name => {
    setdata1({
      labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          data: [20, 45, 28, 80, 99, 43],
          color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
          strokeWidth: 2, // optional
        },
      ],
      legend: [name + ' Dummy Data'], // optional
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

        if (response.data.length > 0) {
          let aqLabel1 = [];
          let aqScore1 = [];
          let x = response.data;
          x.map(async (item, idx) => {
            console.log(extractDate(item.date) + item.score);
            aqLabel1.push(extractDate(item.date));
            aqScore1.push(parseFloat(item.score));
          });

          setAQf(response.data);

          setAqLabel(aqLabel1);
          setAqScore(aqScore1);
          console.log('aq---' + aqLabel1);
          console.log('aq' + aqScore1);

          setdata1({
            labels: aqLabel1,
            datasets: [
              {
                data: aqScore1,
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                strokeWidth: 2, // optional
              },
            ],
            legend: [name], // optional
          });
        } else {
          setdata1({
            labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                strokeWidth: 2, // optional
              },
            ],
            legend: [name + ' Dummy Data'], // optional
          });
        }
      } catch (error) {
        console.log(error);
      }
    });
  };

  // model

  const fetctModel = name => {
    setdata1({
      labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          data: [20, 45, 28, 80, 99, 43],
          color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
          strokeWidth: 2, // optional
        },
      ],
      legend: [name + ' Dummy Data'], // optional
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

        if (response.data.length > 0) {
          let aqLabel1 = [];
          let aqScore1 = [];
          let x = response.data;
          x.map(async (item, idx) => {
            console.log(extractDate(item.date) + item.score);
            aqLabel1.push(extractDate(item.date));
            aqScore1.push(parseFloat(item.score));
          });

          setAQf(response.data);

          setAqLabel(aqLabel1);
          setAqScore(aqScore1);
          console.log('aq---' + aqLabel1);
          console.log('aq' + aqScore1);

          setdata1({
            labels: aqLabel1,
            datasets: [
              {
                data: aqScore1,
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                strokeWidth: 2, // optional
              },
            ],
            legend: [name], // optional
          });
        } else {
          setdata1({
            labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                strokeWidth: 2, // optional
              },
            ],
            legend: [name + ' Dummy Data'], // optional
          });
        }
      } catch (error) {
        console.log(error);
      }
    });
  };

  const chartConfig = {
    backgroundGradientFrom: '#DDCAE3',
    backgroundGradientFromOpacity: 20,
    backgroundGradientTo: '#DDCAE3',
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  // const data = {
  //   labels:  ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
  //   datasets: [
  //     {
  //       data:  [20, 45, 28, 80, 99, 43],
  //       color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
  //       strokeWidth: 2, // optional
  //     },
  //   ],
  //   legend: [graphButtonT], // optional
  // };

  // const data1 = {
  //   labels:  aqLabel,
  //   datasets: [
  //     {
  //       data:  aqScore,
  //       color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
  //       strokeWidth: 2, // optional
  //     },
  //   ],
  //   legend: [graphButtonT], // optional
  // };

  const handleCardPress = cardNumber => {
    setPressedCard(cardNumber);
    SharedPreferences.getItem('userEmail', function (value) {
      console.log('abc--+' + value);
    });
  };

  const handlePressList = () => {
    if (listDisp === 'none') {
      setListDisp('block');
    } else {
      setListDisp('none');
    }
  };
  // const fetchADHD = async () => {
  //   let id=""
  //   SharedPreferences.getItem("userEmail", function(value){
  //     console.log("abc--+"+value);
  //     id =value
  //   });

  //   try {
  //     const response = await axios.post('https://dashborad-autism.netlify.app/.netlify/functions/display_adhd',
  //     {
  //       "id" : `${id}`
  //     });
  //     //setGet(response.data);
  //     console.log(response.data)
  //     setAdhd(response.data)

  //   } catch (error) {
  //    console.log(error)
  //   } finally {
  //     console.log("error")
  //   }
  // };

  // const fetchAQ_10 = async () => {
  //   let id=""
  //   SharedPreferences.getItem("userEmail", function(value){
  //     console.log("abc--+"+value);
  //     id =value
  //   });

  //   try {
  //     const response = await axios.post('https://dashborad-autism.netlify.app/.netlify/functions/display_aq_10',
  //     {
  //       "id" : `${id}`
  //     });
  //     //setGet(response.data);
  //     console.log(response.data)
  //     setAQf(response.data)

  //     console.log(AQf.length === 0)

  //   } catch (error) {
  //    console.log(error)
  //   } finally {
  //     console.log("error")
  //   }
  // };

  // const fetchModel = async () => {

  //   let id=""
  //   SharedPreferences.getItem("userEmail", function(value){
  //     console.log("abc--+"+value);
  //     id =value
  //   });
  //   try {
  //     const response = await axios.post('https://dashborad-autism.netlify.app/.netlify/functions/display_model',
  //     {
  //       "id" : `${id}`
  //     });
  //     //setGet(response.data);
  //     console.log(response.data)
  //     setMod(response.data)

  //   } catch (error) {
  //    console.log(error)
  //   } finally {
  //     console.log("error")
  //   }
  // };

  return (
    <View style={styles.fullPage}>
      {/* <View style={styles.header}>
        <GestureHandlerRootView>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Signin');
              console.log('back');
            }}>
            <ImageButtonDashboard nmb={1} styl={styles.arrowImage} />
          </TouchableOpacity>
        </GestureHandlerRootView>
      </View> */}

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

            <Text style={styles.cardMenuTitle}>Assessments</Text>
            <View style={styles.cardMenu}>
              <Animated.View
                entering={FadeInLeft.delay(150).duration(900)}
                style={styles.indicatorLeft(
                  pressedCard === 4 || pressedCard === 5,
                )}
              />
              <CardMenu
                imgNmb={4}
                textCard={'AQ 10'}
                nav={navigation}
                imgIcon={styles.card1}
                nvb={1}
                onPress={() => handleCardPress(4)}
              />
              <CardMenu
                imgNmb={5}
                textCard={'ADHD'}
                nav={navigation}
                nvb={2}
                imgIcon={styles.card1}
                onPress={() => handleCardPress(5)}
              />
              <CardMenu
                imgNmb={6}
                textCard={'Scan'}
                nvb={3}
                nav={navigation}
                imgIcon={styles.card1}
                onPress={() => handleCardPress(6)}
              />
              <Animated.View
                entering={FadeInRight.delay(150).duration(900)}
                style={styles.indicatorRight(
                  pressedCard === 6 || pressedCard === 5,
                )}
              />
            </View>
            <View>
              <View style={styles.graphCont}>
                {/* Graph Starts here */}
                <Shadow distance={5} offset={[0, 3]}>
                  <LineChart
                    data={data1}
                    width={300}
                    height={220}
                    borderRadius={300}
                    chartConfig={chartConfig}
                    style={styles.graph}
                  />
                </Shadow>
              </View>
              <View style={styles.History_Area}>
                {/* History and button Area  */}

                <Text style={styles.cardMenuTitle}>History</Text>

                <View>
                  <TouchableOpacity onPress={handlePressList}>
                    <Shadow distance={1} offset={[1, 2]}>
                      <View style={styles.buttonGraph}>
                        {/* Graph button Area  */}

                        <Text>{graphButtonT} </Text>
                        <Image
                          source={require('../assets/images/downArrow.png')}
                        />
                      </View>
                    </Shadow>
                  </TouchableOpacity>

                  <View
                    style={{
                      display: listDisp,
                      maxHeight: 150,
                      maxWidth: 80,
                      left: 1,
                      top: 3,
                      borderRadius: 10,
                      backgroundColor: '#F2F2F2',
                      alignItems: 'center',
                      zIndex: Disindex,
                    }}>
                    {/* Graph button Drop Down List  */}

                    <Text
                      style={styles.GlistBut}
                      onPress={() => {
                        setGraphButtonT('AQ_10');
                        handlePressList();
                        // fetchAQ_10();
                        fetctAq10('AQ_10');
                      }}>
                      AQ_10
                    </Text>
                    <Text
                      style={styles.GlistBut}
                      onPress={() => {
                        setGraphButtonT('ADHD');
                        handlePressList();
                        // fetchADHD();
                        fetctAdhd('ADHD');
                      }}>
                      ADHD
                    </Text>
                    <Text
                      style={styles.GlistBut}
                      onPress={() => {
                        setGraphButtonT('Scan');
                        handlePressList();
                        // fetchModel();
                        fetctModel('SCAN');
                      }}>
                      SCAN
                    </Text>
                  </View>
                </View>
              </View>
            </View>
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
    marginLeft: 30,
    marginBottom: 8,
    fontSize: 22,
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
