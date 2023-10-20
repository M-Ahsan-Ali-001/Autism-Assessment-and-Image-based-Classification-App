import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function SvgImage() {
  return (
    <View>
      <Text>SvgImage</Text>
    </View>
  )
}


const MySvgComponent = () => (
    <Svg height="60" width="60">
      <Circle cx="25" cy="25" r="25" fill="blue" />
    </Svg>
  );

const styles = StyleSheet.create({})