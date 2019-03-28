import React from "react";
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from "react-navigation";
import Main from './src/components/Main';
import Logs from './src/components/Logs';
import Nav from './src/components/Nav';
import Score from './src/components/Score';
import SignLoan from './src/components/SignLoan';
import Profile from './src/components/Profile';

import AuthLoadingScreen from './src/components/AuthLoadingScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';


const AppNavigator = createStackNavigator({
  // AuthLoadingScreen: {
  //   screen: AuthLoadingScreen
  // },
  Main: {
    screen: Main
  },
  Logs: {
    screen: Logs
  },
  Nav:{
    screen: Nav
  },
  Score:{
    screen: Score
  },
  SignLoan: {
    screen: SignLoan
  },
  Profile: {
    screen: Profile
  }
});


const Menu = createStackNavigator({
  Nav:{
    screen: Nav
  },
})

const ScorePage = createStackNavigator({
  Score:{
    screen: Score
  },
})

const App = createBottomTabNavigator(
  {
    Home: { screen: AppNavigator },
    Menu: { screen: Menu },
    ScorePage: { screen: ScorePage }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Menu') {
          iconName = `ios-checkmark-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'ScorePage') {
          iconName = `ios-checkmark-circle${focused ? '' : '-outline'}`;
        }
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#42f44b',
      inactiveTintColor: 'gray',
    },
  }
);
//For React Navigation 2.+ need to export App only
//export default App;
//For React Navigation 3.+
export default createAppContainer(App);