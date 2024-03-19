import React, { useState, Suspense, lazy } from 'react';
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
