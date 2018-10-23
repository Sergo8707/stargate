import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import { Header, ImageCard, Layout } from '../components/uikit'
import { STARGATE_DETAILS } from '../routes'

const url = 'http://api.tvmaze.com/search/shows?q=stargate'

export default class HomeScreen extends Component {
  state = {
    title: 'STAR GATE',
    data: []
  }

  componentDidMount = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      this.setState({ data })
    } catch (e) {
      throw e
    }
  }

  onGoBack = (someDataFromChildren) => {
    console.log('someDataFromChildren', someDataFromChildren)
  }

  render() {
    const { title, data } = this.state
    const { navigation } = this.props
    
    return (
      <View>
        <Header 
          title={title}
          leftIcon='ios-menu'
          leftColor='#fff'
          onPress={() => navigation.openDrawer()}
        />
        <ScrollView>
          <Layout>
            {data.map(item => (
              <ImageCard 
                data={item.show}
                key={item.show.id} 
                onPress={() => navigation.navigate(STARGATE_DETAILS, ({ show: item.show, onGoBack: this.onGoBack }))}
              />
            ))
            }
          </Layout>
        </ScrollView>
      </View>
    )
  }
}
