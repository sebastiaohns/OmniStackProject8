import { createAppContainer, createSwitchNavigator, createDrawerNavigator, createStackNavigator } from 'react-navigation';

import Login from './pages/Login';
import Main from './pages/Main';

export default createAppContainer(
  createSwitchNavigator({
    Login,
    Main,
  })
);