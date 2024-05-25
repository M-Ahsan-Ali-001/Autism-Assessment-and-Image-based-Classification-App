import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import ImageButtonDashboard from '../components/ImageDashboard';
import ProfileScreen from './ProfileScreen';
import HistoryScreen from './HistoryScreen';
import CardButton from '../components/CardButton';
import BottomNavigation from '../components/BottomNavigation';

function Dashboard({navigation}) {
  const [buttSelector, setbuttSelector] = useState(1);
  const [selectScreen, setScreen] = useState(1);

  return (
    <View style={styles.fullPage}>
      <View style={styles.upperBody}>
        {selectScreen === 1 ? (
          <View>
            <View style={styles.greetTextContainer}>
              <Text>
                <Text style={styles.greetText}>Hey, </Text>
                <Text style={[styles.greetText, styles.pinkColor]}>User</Text>
                <Text style={styles.greetText}>{'\n'}Welcome Back!</Text>
              </Text>
              <View style={styles.userImageContainer}>
                <ImageButtonDashboard nmb={3} styl={styles.userImage} />
              </View>
            </View>
            <CardButton
              name="Autism"
              action="Questionnaire"
              imgpath={1}
              nav="AQ_10"
              navigation={navigation}
            />
            <CardButton
              name="ADHD"
              action="Questionnaire"
              imgpath={1}
              nav="ADHD"
              navigation={navigation}
            />
            <CardButton
              name="AI Analysis"
              action="Scanner"
              imgpath={2}
              nav="Scan"
              navigation={navigation}
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
    // borderWidth: 1,
    justifyContent: 'space-between',
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
    padding: 15,
    // borderWidth: 2,
    backgroundColor: 'white',
    borderRadius: 50,
    marginLeft: 10,
    shadowColor: '#F59595',
    elevation: 3
  },
  userImage: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
    // padding: 30,
    borderRadius: 50,
    borderWidth: 2,
  },
  upperBody: {
    flex: 0.9,
    height: '100%',
  },
});

export default Dashboard;
