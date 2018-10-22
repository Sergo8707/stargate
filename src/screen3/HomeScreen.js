import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import { Header, ImageCard, Layout } from '../components/uikit'
import { SPIDER_DETAILS } from '../routes'

const url = 'http://api.tvmaze.com/search/shows?q=spider-man'

export default class HomeScreen extends Component {
  state = {
    title: 'SPIDER MAN',
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
                onPress={() => navigation.navigate(SPIDER_DETAILS, (item.show))}
              />
            ))
            }
          </Layout>
        </ScrollView>
      </View>
    )
  }
}
