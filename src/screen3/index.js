import { createStackNavigator } from 'react-navigation'
import HomeScreen from './HomeScreen'
import DetailsScreen from './DetailsScreen'
import {
  SPIDER_DETAILS,
  SPIDER_HOME
} from '../routes'

export default createStackNavigator(
  {
    [SPIDER_HOME]: HomeScreen,
    [SPIDER_DETAILS]: DetailsScreen
  },
  {
    headerMode: 'none'
  }
)
