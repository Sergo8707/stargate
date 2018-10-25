import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import { Header, Layout, SearchBar, ImageCard } from '../components/uikit'
import { 
  STARGATE_DETAILS 
} from '../routes'

const url = 'http://api.tvmaze.com/search/shows?q=stargate'

export default class HomeScreen extends Component {
  state = {
    title: 'STAR GATE',
    data: [],
    visibleSearchbar: false
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

  _onChangeText = text => {
    console.log('text', text)
  }

  render() {
    const { title, data, visibleSearchbar } = this.state
    const { navigation } = this.props
    return (
      <View>
        { visibleSearchbar ?
          <SearchBar
            colorRight={'#fff'}
            iconRight='magnify'
            placeholder="Search"
            onChangeText={this._onChangeText}
            onPressRight={() => this.setState({ visibleSearchbar: false })}
            onBlur={() => this.setState({ visibleSearchbar: true })}
          /> :
          <Header
            title={title}
            colorRight={'#fff'}
            iconRight='magnify'
            onPressRight={() => this.setState({ visibleSearchbar: true })}
          />
        }
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
