import React, {State, Suspense, lazy} from 'react';
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
  ActivityIndicator,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import AQtest from '../components/AQ_10.json';
import {RadioButton} from 'react-native-paper';

function AQ_10() {
  //console.log(AQtest['1a'])
  const list = ['a', 'b', 'c', 'd'];
  let correctAns = Array(3).fill(0);
  // console.log(correctAns)
  const [selectedKeys, setSelectedKeys] = React.useState({});
  const AQ_test = lazy(() => import('../components/AQ_10_Get'));

  return (
    <View style={{flex: 1, backgroundColor: '#1a6864', padding: 12}}>
      <Suspense
        fallback={
          <ActivityIndicator
            size="large"
            color="white"
            style={{marginTop: '100%'}}
          />
        }>
        <AQ_test />
      </Suspense>
    </View>
  );
}

export default AQ_10;
