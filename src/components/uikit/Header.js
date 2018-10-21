import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { ifIphoneX } from 'react-native-iphone-x-helper'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Header = ({ title, onPress, leftIcon, leftColor }) => {
  const { viewStyle, textStyle, leftButtonStyle } = styles
  return (
    <View style={viewStyle}>
      <TouchableOpacity onPress={onPress}>
        <Ionicons name={leftIcon} style={leftButtonStyle} color={leftColor} />
      </TouchableOpacity>
      <Text style={textStyle}>{title}</Text>
    </View >
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#30d0fe',
    ...ifIphoneX({
      height: 116
    }, {
      height: 90
    }),
    justifyContent: 'center',
    paddingLeft: 22,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    color: '#fff',
    fontSize: 28,
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
