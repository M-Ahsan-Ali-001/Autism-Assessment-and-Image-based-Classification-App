import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Shadow} from 'react-native-shadow-2';
import HomeSVG from '../assets/images/homeSVG';
import SharedPreferences from 'react-native-shared-preferences';

const BottomNavigation = ({
  buttSelector,
  setbuttSelector,
  setScreen,
  navigation,
}) => {
  return (
    <View style={styles.bottomNAV}>
      <Shadow distance={10} offset={[0, 2]}>
        {
          <View style={styles.bottomNavItems}>
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
        }
      </Shadow>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNAV: {
    flex: 0.1,
    height: 50,
    width: 300,
    borderRadius: 300,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'flex-end',
  },
  bottomNavItems: {
    height: 60,
    width: 300,
    borderRadius: 300,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default BottomNavigation;
