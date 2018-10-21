import React, { PureComponent } from 'react'
import { View, Text } from 'react-native'

class DelailsScreen extends PureComponent {
  render() {
    console.log('this.props', this.props)
    
    return (
      <View>
        <Text>
          Hello World
        </Text>
      </View>
    )
  }
}

export default DelailsScreen
