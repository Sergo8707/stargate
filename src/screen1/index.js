import { createStackNavigator } from 'react-navigation'
import HomeScreen from './HomeScreen'
import DetailsScreen from './DetailsScreen'
import {
  STARGATE_DETAILS,
  STARGATE_HOME
} from '../routes'

export default createStackNavigator(
  {
    [STARGATE_HOME]: HomeScreen,
    [STARGATE_DETAILS]: DetailsScreen
  },
  {
    headerMode: 'none'
  }
)
