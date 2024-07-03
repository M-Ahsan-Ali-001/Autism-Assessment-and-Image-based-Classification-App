import React, {Suspense, lazy} from 'react';
import {LogBox} from 'react-native';
import {View, ActivityIndicator} from 'react-native';

function AQ_10() {
  const list = ['a', 'b', 'c', 'd'];
  let correctAns = Array(3).fill(0);
  const [selectedKeys, setSelectedKeys] = React.useState({});
  const AQ_test = lazy(() => import('../components/AQ_10_Get'));
  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);
  return (
    <View style={{flex: 1, backgroundColor: '#FDFDFD', padding: 12}}>
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
