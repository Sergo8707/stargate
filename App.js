import React, {Component} from 'react'
import { View } from 'react-native'
import Header from './src/components/uikit/Header'

export default class App extends Component {
  state = {
    title: 'STAR GATE'
  }
  render() {
    return (
      <View>
        <Header title={this.state.title} />
      </View>
    )
  }
}
