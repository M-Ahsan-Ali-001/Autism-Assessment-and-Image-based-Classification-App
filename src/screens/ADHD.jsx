import React, { useState, Suspense, lazy } from 'react';
import { LogBox } from 'react-native';
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

function ADHD() {
  const AQ_test = lazy(() => import('../components/ADHD_Get'));
  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);
  return (
    <View style={{ flex: 1, backgroundColor: '#FDFDFD', padding: 12 }}>
      <Suspense
        fallback={
          <ActivityIndicator
            size="large"
            color="white"
            style={{ marginTop: '100%' }}
          />
        }>
        <AQ_test />
      </Suspense>
    </View>
  );
}

export default ADHD;
