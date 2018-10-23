import React, { PureComponent } from 'react'
import { ScrollView, Button, View, Text, StyleSheet } from 'react-native'
import { Header, ImageBigCard } from '../components/uikit'
import { 
  STARGATE_HOME
} from '../routes'

class DelailsScreen extends PureComponent {
  render() {
    const { image, name, summary } = this.props.navigation.state.params
    const { navigation } = this.props
    const data = { image }
    const { container, h1, h2, sub } = styles
    return (
      <View style={container}>
        <Header 
          detail
          title={name}
          onPress={() => navigation.goBack()} 
          leftIcon='ios-arrow-back'
          leftColor='#fff'
        />
        <ScrollView>
          <View style={sub}>
            <ImageBigCard data={data} />
            <Button
              onPress={() => navigation.navigate(STARGATE_HOME)}
              title='Learn More'
              color='#000'
              accessibilityLabel='Learn More'
            />
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
