import React from 'react'
import { Image, View, Text, StyleSheet } from 'react-native'
import { w } from '../../../constants'

const ImageCard = () => {
  const { container, sub, h1, cover } = styles
  return (
    <View style={container}>
      <View style={sub}>
        <Image style={cover} source={{ url: 'https://github.com/react-native-village/react-native-init/raw/master/stargate/images/Stargate.jpg' }} />
      </View>
      <Text style={h1}>Image</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: w / 2.1
  },
  sub: {
    padding: 10,
    shadowColor: '#000',
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4
  },
  h1: {
    fontFamily: 'AvenirNext-DemiBold',
    fontSize: 18,
    alignSelf: 'center',
    textAlign: 'center',
    width: w / 2.4
  },
  cover: {
    width: w / 2.4,
    height: w * 0.63,
    borderRadius: 10
  }
})
export { ImageCard }
