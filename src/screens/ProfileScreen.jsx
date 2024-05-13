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
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Shadow} from 'react-native-shadow-2';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import axios from 'axios';
import ImageButtonDashboard from '../components/ImageDashboard';
var SharedPreferences = require('react-native-shared-preferences');
function ProfileScreen(props) {
  const [email, SetEmail] = useState('tt@gmail.com');
  const [idd, SetID] = useState('');
  const [aq_10, SetAQ] = useState([]);
  const [adhd, SetAD] = useState([]);
  const [mode, SetModel] = useState([]);
  const [AQf, setAQf] = useState([]);
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



      // SharedPreferences.getItem("userid",  async function(value){
      //   console.log("abc--+"+value);
           
      //   try {
      //     const response = await axios.post('https://dashborad-autism.netlify.app/.netlify/functions/display_adhd',
      //     {
      //       "id" : `${value}`
      //     });
      //     //setGet(response.data);
      //     console.log(response.data)
      //     SetAD(response.data)
  
      //   } catch (error) {
      //    console.log(error)
      //   }
      
      
      // })

      
      // SharedPreferences.getItem("userid", async function(value){
      //   console.log("abc--+"+value);
           
      //   try {
      //     const response = await axios.post('https://dashborad-autism.netlify.app/.netlify/functions/display_model',
      //     {
      //       "id" : `${value}`
      //     });
      //     //setGet(response.data);
      //     console.log(response.data)
      //     SetModel(response.data)
  
      //   } catch (error) {
      //    console.log(error)
      //   }
      
      
      // })



    }

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
              labels: aqLabel1.slice(-5),
              datasets: [
                {
                  data: aqScore1.slice(-5),
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
    FtData();
  },[])


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
            labels: aqLabel1.slice(-5),
            datasets: [
              {
                data: aqScore1.slice(-5),
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
  const [listDisp, setListDisp] = useState('none');
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

          // setAQf(response.data);

          // setAqLabel(aqLabel1);
          // setAqScore(aqScore1);
          console.log('aq---' + aqLabel1);
          console.log('aq' + aqScore1);

          setdata1({
            labels: aqLabel1.slice(-5),
            datasets: [
              {
                data: aqScore1.slice(-5),
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
            labels: aqLabel1.slice(-5),
            datasets: [
              {
                data: aqScore1.slice(-5),
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

  const [Disindex, setDisindx] = useState(10);
  const [graphButtonT, setGraphButtonT] = useState('AQ_10');
  const extractDate = fullDate => {
    const dateObj = new Date(fullDate);
    return dateObj.toString().substring(4, 7); // Extracting "Sun Mar 17 2024"
  };

  const handlePressList = () => {
    if (listDisp === 'none') {
      setListDisp('block');
    } else {
      setListDisp('none');
    }
  };
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
  const chartConfig = {
    backgroundGradientFrom: '#DDCAE3',
    backgroundGradientFromOpacity: 20,
    backgroundGradientTo: '#DDCAE3',
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };
  return (
    <View style={styles.body}>
      <View style={styles.TopBox}>
        <ImageButtonDashboard nmb={3} styl={{height:45,width:45, borderRadius:25}} />

        <View style={styles.mail}>
          <Text style={styles.tHead}>{email}</Text>
        </View>
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
    borderRadius: 100,

   

    // borderRadius: 100,
  },
  mail: {
    backgroundColor: '#F59481',
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
    color:'white',
   
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




  },
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
  })
});

export default ProfileScreen;
