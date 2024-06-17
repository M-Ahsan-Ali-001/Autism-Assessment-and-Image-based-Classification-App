import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Modal,} from 'react-native';
import ImageButtonDashboard from '../components/ImageDashboard';
import ProfileScreen from './ProfileScreen';
import HistoryScreen from './HistoryScreen';
import CardButton from '../components/CardButton';
import BottomNavigation from '../components/BottomNavigation';

import Avatar from 'react-native-boring-avatars';

import SharedPreferences from 'react-native-shared-preferences';
import InsPopup from '../components/Instructionspopup';

function Dashboard({navigation}) {
  const [buttSelector, setbuttSelector] = useState(1);
  const [selectScreen, setScreen] = useState(1);
  const [email, SetEmail] = useState('');
  const [insPop,seinsPop] = useState(false)
  const [insPopPG,seinsPopPG] = useState(0)
  useEffect(() => {
    const FtData = async () => {
      SharedPreferences.getItem('userEmail', function (value) {
        SetEmail(value);
      });
    };
    FtData();
  });

  const removeDomain = (email) => {
    const atIndex = email.indexOf('@');
    if (atIndex !== -1) {
      return email.substring(0, atIndex);
    }
    return email;
  };

  return (
    <View style={styles.fullPage}>
       <InsPopup insPop={insPop}   seinsPop={seinsPop} insPopPG={insPopPG}/>
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
});

export default Dashboard;
