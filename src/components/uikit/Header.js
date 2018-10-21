import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { ifIphoneX } from 'react-native-iphone-x-helper'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { w } from '../../../constants'

const Header = ({ title, detail, onPress, leftIcon, leftColor }) => {
  const { viewStyle, textStyle, leftButtonStyle } = styles
  return (
    <View style={viewStyle}>
      <TouchableOpacity onPress={onPress}>
        <Ionicons name={leftIcon} style={[leftButtonStyle, { paddingLeft: detail ? 10 : 20 }]} color={leftColor} />
      </TouchableOpacity>
      <Text numberOfLines={1} ellipsizeMode='tail' style={[textStyle, {paddingLeft: leftIcon ? 10 : 0 }]}>{title}</Text>
    </View >
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: 'row',
    backgroundColor: '#30d0fe',
    ...ifIphoneX({
      height: 116
    }, {
      height: 90
    }),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    color: '#fff',
    fontSize: 28,
    width: w - 40,
    fontFamily: 'AvenirNext-DemiBold',
    ...ifIphoneX({
      paddingTop: 75
    }, {
      paddingTop: 50
    })
  },
  leftButtonStyle: {
    ...ifIphoneX({
      paddingTop: 75
    }, {
      paddingTop: 50
    }),
    fontSize: 35
  }
})

export { Header }
