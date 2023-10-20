import React from 'react';
import type {PropsWithChildren} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Image,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Svg, {Path} from 'react-native-svg';
import CurvesSVG from './src/components/Curves';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {
  const CurvyShape = () => (
    <Svg width="100%" height="100" viewBox="0 0 1440 320">
      <Path
        d="M0,64L60,53.3C120,43,240,21,360,53.3C480,85,600,171,720,181.3C840,192,960,128,1080,112C1200,96,1320,128,1380,144L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        fill="green" // Set the fill color
      />
    </Svg>
  );

  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <View style={{backgroundColor: 'black'}}>
        <CurvesSVG></CurvesSVG>

        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 30, fontWeight: 'bold', color: 'white'}}>
            SUIIIIII
          </Text>
        </View>
      </View>

      <CurvyShape />
    </View>
  );
}

export default App;
