import React, { PureComponent } from 'react'
import { View, Text } from 'react-native'
import { Header } from '../components/uikit'
import Icon from 'react-native-vector-icons/FontAwesome'

class DelailsScreen extends PureComponent {
  render() {
    console.log('this.props', this.props)
    const { image, name, summary } = this.props.navigation.state.params
    const { navigation } = this.props
    return (
      <View>
        <Header 
          detail
          title={name}
          onPress={() => navigation.goBack()} 
          leftIcon='ios-arrow-back'
          leftColor='#fff'
        />
        <Text>
          Hello World
        </Text>
        <Icon name='rocket' size={30} color='#900' />
      </View>
    )
  }
}

export default DelailsScreen
