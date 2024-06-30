import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Text, Modal, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import ImageButtonDashboard from '../components/ImageDashboard';
import ProfileScreen from './ProfileScreen';
import HistoryScreen from './HistoryScreen';
import CardButton from '../components/CardButton';
import BottomNavigation from '../components/BottomNavigation';
import axios from "axios";
import Avatar from 'react-native-boring-avatars';
import SharedPreferences from 'react-native-shared-preferences';
import InsPopup from '../components/Instructionspopup';

const countries = ["pakistan", "Canada", "UK", "Australia", "india","china"];

const CustomPicker = ({ data, selectedValue, onValueChange }) => {
  return (
    <ScrollView style={styles.pickerContainer}>
      {data.map((item) => (
        <TouchableOpacity key={item} onPress={() => onValueChange(item)} style={styles.pickerItem}>
          <Text style={styles.pickerItemText}>{item}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

function Dashboard({ navigation }) {
  const [buttSelector, setbuttSelector] = useState(1);
  const [selectScreen, setScreen] = useState(1);
  const [email, SetEmail] = useState('');
  const [insPop, seinsPop] = useState(false);
  const [insPopPG, seinsPopPG] = useState(0);
  const [countryCheck, setcountryCheck] = useState('0');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('');
const [id_i , setId_i] = useState('');
  useEffect(() => {
    const sleep = (ms) => {
      return new Promise(resolve => setTimeout(resolve, ms));
    };

    const FtData = async () => {
      let vale = " ";
      SharedPreferences.getItem('userEmail', function (value) {
        SetEmail(value);
        vale = value;
      });

      SharedPreferences.getItem('userid', function (value) {
        setId_i(value);

      });

      await sleep(2000);

      console.log(vale);

      const req = await axios.post(' https://dashborad-autism.netlify.app/.netlify/functions/find_user',
        {
          "email": `${vale}`
        });

      console.log(req.data);

      if (req.data[0].country) {
        setcountryCheck(req.data[0].country);
        setModalVisible(false);
        console.log(countryCheck);
      } else {
        setcountryCheck('0');
        setModalVisible(true);
      }
    };

    FtData();
  }, []);

  const handleOkayButton = async () => {
    setcountryCheck(selectedCountry);
    setModalVisible(false);
    const req = await axios.post(' https://dashborad-autism.netlify.app/.netlify/functions/user_count_check',
      {
        "id": `${id_i}`,
        'country':`${countries[selectScreen-1]}`
      });

      console.log(req.data)
  };

  const removeDomain = (email) => {
    const atIndex = email.indexOf('@');
    if (atIndex !== -1) {
      return email.substring(0, atIndex);
    }
    return email;
  };

  return (
    <View style={styles.fullPage}>
      <InsPopup insPop={insPop} seinsPop={seinsPop} insPopPG={insPopPG} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
        
            <Text style={styles.TopItemText}>Select Your Country and press okay!</Text>
            <CustomPicker
              data={countries}
              selectedValue={selectedCountry}
              onValueChange={setSelectedCountry}
            />
            <TouchableOpacity style={styles.okButton} onPress={handleOkayButton}>
              <Text style={styles.okButtonText}>Okay</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View style={styles.upperBody}>
        {selectScreen === 1 ? (
          <View>
            <View style={styles.greetTextContainer}>
              <Text>
                <Text style={styles.greetText}>Hey, </Text>
                <Text style={[styles.greetText, styles.pinkColor]}>{removeDomain(email)}</Text>
                <Text style={styles.greetText}>{'\n'}Welcome Back!</Text>
              </Text>
              <View style={styles.userImageContainer}>
                <Avatar
                  size={80}
                  name={email}
                  variant="beam"
                  colors={[
                    '#9E6B7C',
                    '#F87887',
                    '#92CCB6',
                    '#F3D597',
                    '#B6D89C',
                  ]}
                />
              </View>
            </View>
            <CardButton
              name="Autism"
              action="Questionnaire"
              imgpath={1}
              nav="AQ_10"
              navigation={navigation}
              seinsPop={seinsPop}
              seinsPopPG={seinsPopPG}
              insNO={'0'}
            />
            <CardButton
              name="ADHD"
              action="Questionnaire"
              imgpath={1}
              nav="ADHD"
              navigation={navigation}
              seinsPop={seinsPop}
              seinsPopPG={seinsPopPG}
              insNO={'1'}
            />
            <CardButton
              name="AI Analysis"
              action="Scanner"
              imgpath={2}
              nav="Scan"
              seinsPop={seinsPop}
              navigation={navigation}
              seinsPopPG={seinsPopPG}
              insNO={'2'}
            />
          </View>
        ) : selectScreen === 2 ? (
          <ProfileScreen />
        ) : selectScreen === 3 ? (
          <HistoryScreen />
        ) : null}
      </View>
      <BottomNavigation
        buttSelector={buttSelector}
        setbuttSelector={setbuttSelector}
        setScreen={setScreen}
        navigation={navigation}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  pinkColor: {
    color: '#F59481',
  },
  fullPage: {
    backgroundColor: '#F4F4F4',
    flex: 1,
  },
  greetTextContainer: {
    margin: 45,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  greetText: {
    fontFamily: 'Inter-Medium',
    fontSize: 30,
    fontStyle: 'italic',
    color: 'black',
  },
  greetTextLine: {
    display: 'flex',
    flexDirection: 'row',
  },
  userImageContainer: {
    width: 90,
    height: 90,
    borderColor: '#F59595',
    borderRadius: 100,
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#F59595',
    elevation: 3,
    marginLeft: 60,
  },
  upperBody: {
    flex: 0.9,
    height: '100%',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '80%', // Adjust the width as needed
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  pickerContainer: {
    maxHeight: 200, // Adjust the height as needed
    width: '100%',
  },
  pickerItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  pickerItemText: {
    fontSize: 18,
    color:'black'
  },
  okButton: {
    marginTop: 20,
    backgroundColor: '#F59481',
    borderRadius: 5,
    padding: 10,
    elevation: 2,
  },
  okButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  TopItemText: {
    fontSize: 18,
    color:'black',
    fontWeight:'bold'
  },
});

export default Dashboard;
