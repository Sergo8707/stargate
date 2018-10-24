import React, { PureComponent } from 'react'
import { ScrollView, View, Text, StyleSheet } from 'react-native'
import { Header, ImageBigCard } from '../components/uikit'

class DelailsScreen extends PureComponent {
  render() {
    const { show } = this.props.navigation.state.params
    const { image, name, summary } = show
    const { navigation } = this.props
    const data = { image }
    const { container, h1, h2, sub } = styles
    return (
      <View style={container}>
        <Header 
          detail
          title={name}
          onPressLeft={() => navigation.goBack()} 
          iconLeft='ios-arrow-back'
          colorLeft='#fff'
        />
        <ScrollView>
          <View style={sub}>
            <ImageBigCard data={data} />
            <Text style={h1}>{name.toUpperCase()}</Text>
            <Text style={h2}>{summary.replace(/<[^>]+>/g, '')}</Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  sub: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 150,
    backgroundColor: '#fff'
  },
  h1: {
    fontFamily: 'AvenirNext-DemiBold',
    fontSize: 30,
    padding: 15,
    textAlign: 'center'
  },
  h2: {
    fontFamily: 'AvenirNext-DemiBold',
    fontSize: 15,
    padding: 15,
    color: 'grey',
    textAlign: 'center',
    paddingHorizontal: 15
  }
})

export default DelailsScreen
